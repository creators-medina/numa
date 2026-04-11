-- ============================================================
-- NÜMA Açaí — CRM + Inquiry Schema
-- Run this in Supabase SQL Editor:
--   https://supabase.com/dashboard → SQL Editor → New Query
-- ============================================================

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ─── Inquiries (public form submissions) ──────────────────────────────
create table if not exists public.inquiries (
  id            uuid primary key default gen_random_uuid(),
  full_name     text not null,
  email         text not null,
  phone         text,
  event_type    text not null,
  event_date    date,
  guest_count   text,
  venue         text,
  city          text,
  state         text,
  message       text,
  status        text not null default 'new',  -- new | reviewed | archived
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ─── CRM Boards ───────────────────────────────────────────────────────
create table if not exists public.crm_boards (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Insert the default NÜMA board
insert into public.crm_boards (name, slug)
values ('NÜMA Açaí', 'numa-acai')
on conflict (slug) do nothing;

-- ─── Pipeline Columns ─────────────────────────────────────────────────
create table if not exists public.crm_pipeline_columns (
  id          uuid primary key default gen_random_uuid(),
  board_id    uuid not null references public.crm_boards(id) on delete cascade,
  name        text not null,
  position    integer not null default 0,
  color       text,
  is_archived boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Insert default columns for the NÜMA board
insert into public.crm_pipeline_columns (board_id, name, position, color)
select id, col.name, col.pos, col.color
from public.crm_boards,
lateral (values
  ('New Lead',    0, '#C9A87C'),
  ('Contacted',   1, '#8FAF97'),
  ('Qualified',   2, '#2C4A3E'),
  ('Quote Sent',  3, '#7C3D4E'),
  ('Follow Up',   4, '#6B6560'),
  ('Scheduled',   5, '#1B302A')
) as col(name, pos, color)
where public.crm_boards.slug = 'numa-acai'
on conflict do nothing;

-- ─── CRM Leads ────────────────────────────────────────────────────────
create table if not exists public.crm_leads (
  id                   uuid primary key default gen_random_uuid(),
  board_id             uuid not null references public.crm_boards(id) on delete cascade,
  pipeline_column_id   uuid not null references public.crm_pipeline_columns(id),
  inquiry_id           uuid references public.inquiries(id),  -- link to source inquiry

  full_name            text not null,
  business_name        text,
  email                text,
  phone                text,
  service_type         text,   -- e.g. 'Wedding', 'Corporate Event'
  source               text,   -- instagram | referral | website | google | other
  city                 text,
  state                text,
  venue                text,
  event_date           date,
  guest_count          integer,
  budget               text,
  quote_amount         numeric(10,2),

  assigned_to          text,
  tags                 text[] not null default '{}',
  next_action          text,
  next_action_due      date,
  notes_text           text,   -- quick internal notes field
  position             integer not null default 0,

  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

-- ─── CRM Notes ────────────────────────────────────────────────────────
create table if not exists public.crm_notes (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid not null references public.crm_leads(id) on delete cascade,
  body        text not null,
  created_by  text,
  created_at  timestamptz not null default now()
);

-- ─── CRM Activity Log ─────────────────────────────────────────────────
create table if not exists public.crm_activity_log (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid not null references public.crm_leads(id) on delete cascade,
  type        text not null,  -- lead_created | stage_changed | note_added | field_updated
  body        text not null,
  meta        jsonb not null default '{}',
  created_at  timestamptz not null default now()
);

-- ─── Indexes ──────────────────────────────────────────────────────────
create index if not exists idx_crm_leads_board       on public.crm_leads(board_id);
create index if not exists idx_crm_leads_column      on public.crm_leads(pipeline_column_id);
create index if not exists idx_crm_leads_event_date  on public.crm_leads(event_date);
create index if not exists idx_crm_notes_lead        on public.crm_notes(lead_id);
create index if not exists idx_crm_activity_lead     on public.crm_activity_log(lead_id);
create index if not exists idx_crm_cols_board        on public.crm_pipeline_columns(board_id);

-- ─── Updated_at trigger ───────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace trigger trg_inquiries_updated_at
  before update on public.inquiries
  for each row execute function public.set_updated_at();

create or replace trigger trg_crm_boards_updated_at
  before update on public.crm_boards
  for each row execute function public.set_updated_at();

create or replace trigger trg_crm_columns_updated_at
  before update on public.crm_pipeline_columns
  for each row execute function public.set_updated_at();

create or replace trigger trg_crm_leads_updated_at
  before update on public.crm_leads
  for each row execute function public.set_updated_at();

-- ─── Row Level Security ───────────────────────────────────────────────
-- Enable RLS on all tables
alter table public.inquiries enable row level security;
alter table public.crm_boards enable row level security;
alter table public.crm_pipeline_columns enable row level security;
alter table public.crm_leads enable row level security;
alter table public.crm_notes enable row level security;
alter table public.crm_activity_log enable row level security;

-- Inquiries: public can INSERT (form submissions), anon can SELECT/UPDATE for admin
create policy "Anyone can submit an inquiry"
  on public.inquiries for insert
  to anon with check (true);

create policy "Anon can read inquiries"
  on public.inquiries for select
  to anon using (true);

create policy "Anon can update inquiries"
  on public.inquiries for update
  to anon using (true);

-- CRM: full access for anon (admin page uses anon key; add auth later when needed)
create policy "Anon full access to crm_boards"
  on public.crm_boards for all to anon using (true) with check (true);

create policy "Anon full access to crm_pipeline_columns"
  on public.crm_pipeline_columns for all to anon using (true) with check (true);

create policy "Anon full access to crm_leads"
  on public.crm_leads for all to anon using (true) with check (true);

create policy "Anon full access to crm_notes"
  on public.crm_notes for all to anon using (true) with check (true);

create policy "Anon full access to crm_activity_log"
  on public.crm_activity_log for all to anon using (true) with check (true);

-- ─── Sample seed data ─────────────────────────────────────────────────
-- Uncomment to seed test leads after running the above

/*
insert into public.crm_leads
  (board_id, pipeline_column_id, full_name, email, phone, service_type,
   source, city, state, event_date, guest_count, tags)
select
  b.id,
  (select id from public.crm_pipeline_columns where board_id = b.id and name = 'New Lead'),
  'Sofia Ramirez', 'sofia@example.com', '555-0101', 'Wedding',
  'instagram', 'Los Angeles', 'CA', current_date + 90, 120, array['wedding', 'premium']
from public.crm_boards b where b.slug = 'numa-acai';

insert into public.crm_leads
  (board_id, pipeline_column_id, full_name, email, phone, service_type,
   source, city, state, event_date, guest_count, tags)
select
  b.id,
  (select id from public.crm_pipeline_columns where board_id = b.id and name = 'Contacted'),
  'Priya Mehta', 'priya@company.com', '555-0202', 'Corporate Event',
  'website', 'Santa Monica', 'CA', current_date + 45, 80, array['corporate']
from public.crm_boards b where b.slug = 'numa-acai';
*/
