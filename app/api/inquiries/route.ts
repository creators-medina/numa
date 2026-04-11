import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      phone,
      event_type,
      event_date,
      guest_count,
      venue,
      city,
      state,
      message,
    } = body;

    if (!full_name || !email || !event_type) {
      return NextResponse.json(
        { error: "Name, email, and event type are required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // 1. Store in inquiries table
    const { data: inquiry, error: inquiryError } = await supabase
      .from("inquiries")
      .insert({
        full_name,
        email,
        phone: phone || null,
        event_type,
        event_date: event_date || null,
        guest_count: guest_count || null,
        venue: venue || null,
        city: city || null,
        state: state || null,
        message: message || null,
      })
      .select()
      .single();

    if (inquiryError) {
      console.error("Inquiry insert error:", inquiryError);
      return NextResponse.json({ error: "Failed to save inquiry." }, { status: 500 });
    }

    // 2. Auto-create CRM lead in the "New Lead" column
    const { data: board } = await supabase
      .from("crm_boards")
      .select("id")
      .eq("slug", "numa-acai")
      .single();

    if (board) {
      const { data: column } = await supabase
        .from("crm_pipeline_columns")
        .select("id")
        .eq("board_id", board.id)
        .eq("name", "New Lead")
        .single();

      if (column) {
        const { data: lead, error: leadError } = await supabase
          .from("crm_leads")
          .insert({
            board_id: board.id,
            pipeline_column_id: column.id,
            inquiry_id: inquiry.id,
            full_name,
            email: email || null,
            phone: phone || null,
            service_type: event_type,
            city: city || null,
            state: state || null,
            venue: venue || null,
            event_date: event_date || null,
            guest_count: guest_count ? parseInt(guest_count) : null,
            source: "website",
            tags: [],
          })
          .select()
          .single();

        if (!leadError && lead) {
          // Log creation activity
          await supabase.from("crm_activity_log").insert({
            lead_id: lead.id,
            type: "lead_created",
            body: `Lead created from website inquiry by ${full_name}`,
            meta: { source: "website_form", inquiry_id: inquiry.id },
          });
        }
      }
    }

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (err) {
    console.error("Inquiry API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
