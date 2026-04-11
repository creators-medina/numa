import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const boardId = searchParams.get("board_id");
  if (!boardId) return NextResponse.json({ error: "board_id required" }, { status: 400 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("crm_leads")
    .select("*")
    .eq("board_id", boardId)
    .order("position");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("crm_leads")
    .insert(body)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Log creation
  await supabase.from("crm_activity_log").insert({
    lead_id: data.id,
    type: "lead_created",
    body: `Lead created: ${data.full_name}`,
    meta: {},
  });

  return NextResponse.json(data, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("crm_leads")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
