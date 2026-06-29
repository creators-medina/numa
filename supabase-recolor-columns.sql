-- ============================================================
-- NÜMA Açaí — Recolor existing CRM pipeline columns to 2026 brand kit
-- Run once in Supabase → SQL Editor (the schema seed only colors
-- columns on a fresh install; existing rows need this UPDATE).
-- ============================================================

update public.crm_pipeline_columns c
set color = v.color
from public.crm_boards b,
lateral (values
  ('New Lead',    '#FE5D5B'),  -- coral (newest — pops)
  ('Contacted',   '#9AB1C8'),  -- dusty blue
  ('Qualified',   '#485A47'),  -- olive green
  ('Quote Sent',  '#745A67'),  -- plum
  ('Follow Up',   '#7B4E4D'),  -- mauve-brown
  ('Scheduled',   '#361D29')   -- aubergine (deepest — final)
) as v(name, color)
where c.board_id = b.id
  and b.slug = 'numa-acai'
  and c.name = v.name;
