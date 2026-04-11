export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

/* ─── Board ─────────────────────────────────────────────────────────── */
export interface CrmBoard {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

/* ─── Pipeline Column ────────────────────────────────────────────────── */
export interface CrmPipelineColumn {
  id: string;
  board_id: string;
  name: string;
  position: number;
  color: string | null;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
}

/* ─── Lead ───────────────────────────────────────────────────────────── */
export type LeadSource =
  | "instagram"
  | "referral"
  | "website"
  | "google"
  | "other";

export interface CrmLead {
  id: string;
  board_id: string;
  pipeline_column_id: string;
  full_name: string;
  business_name: string | null;
  email: string | null;
  phone: string | null;
  service_type: string | null;
  source: LeadSource | null;
  city: string | null;
  state: string | null;
  venue: string | null;
  event_date: string | null;
  guest_count: number | null;
  budget: string | null;
  quote_amount: number | null;
  assigned_to: string | null;
  tags: string[];
  next_action: string | null;
  next_action_due: string | null;
  notes_text: string | null;
  position: number;
  created_at: string;
  updated_at: string;
}

/* ─── Notes ──────────────────────────────────────────────────────────── */
export interface CrmNote {
  id: string;
  lead_id: string;
  body: string;
  created_by: string | null;
  created_at: string;
}

/* ─── Activity Log ───────────────────────────────────────────────────── */
export type ActivityType =
  | "lead_created"
  | "stage_changed"
  | "note_added"
  | "field_updated"
  | "quote_sent"
  | "scheduled";

export interface CrmActivity {
  id: string;
  lead_id: string;
  type: ActivityType;
  body: string;
  meta: Json;
  created_at: string;
}

/* ─── Inquiry (public form submission) ──────────────────────────────── */
export interface InquirySubmission {
  full_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guest_count: string;
  venue: string;
  city: string;
  state: string;
  message: string;
}

/* ─── UI helpers ─────────────────────────────────────────────────────── */
export interface ColumnWithLeads extends CrmPipelineColumn {
  leads: CrmLead[];
}
