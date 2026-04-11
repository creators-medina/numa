import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leadId = searchParams.get("lead_id");
  if (!leadId) return NextResponse.json({ error: "lead_id required" }, { status: 400 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("crm_notes")
    .select("*")
    .eq("lead_id", leadId)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("crm_notes")
    .insert(body)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Log activity
  await supabase.from("crm_activity_log").insert({
    lead_id: body.lead_id,
    type: "note_added",
    body: `Note added: "${body.body.substring(0, 80)}${body.body.length > 80 ? "…" : ""}"`,
    meta: { note_id: data.id },
  });

  return NextResponse.json(data, { status: 201 });
}
