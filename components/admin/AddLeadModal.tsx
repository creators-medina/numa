"use client";

import { useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CrmLead, CrmPipelineColumn } from "@/types/crm";

interface AddLeadModalProps {
  boardId: string;
  columns: CrmPipelineColumn[];
  defaultColumnId?: string;
  onSuccess: (lead: CrmLead) => void;
  onClose: () => void;
}

const SERVICE_TYPES = [
  "Wedding",
  "Bridal Shower",
  "Baby Shower",
  "Private Party",
  "Corporate Event",
  "Wellness",
  "Brand Activation",
  "Other",
];

const SOURCES = ["instagram", "referral", "website", "google", "other"] as const;

export default function AddLeadModal({
  boardId,
  columns,
  defaultColumnId,
  onSuccess,
  onClose,
}: AddLeadModalProps) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_type: "",
    event_date: "",
    guest_count: "",
    city: "",
    state: "",
    venue: "",
    pipeline_column_id: defaultColumnId ?? columns[0]?.id ?? "",
    source: "",
    notes_text: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = useCallback(
    (field: string, value: string) =>
      setForm((f) => ({ ...f, [field]: value })),
    []
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.full_name.trim()) {
      setError("Full name is required.");
      return;
    }
    setSubmitting(true);
    setError(null);

    const supabase = createClient();

    // Determine next position in target column
    const { data: existingLeads } = await supabase
      .from("crm_leads")
      .select("position")
      .eq("pipeline_column_id", form.pipeline_column_id)
      .order("position", { ascending: false })
      .limit(1);

    const nextPosition =
      existingLeads && existingLeads.length > 0
        ? (existingLeads[0].position ?? 0) + 1
        : 0;

    const payload = {
      board_id: boardId,
      pipeline_column_id: form.pipeline_column_id,
      full_name: form.full_name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim() || null,
      service_type: form.service_type || null,
      event_date: form.event_date || null,
      guest_count: form.guest_count ? parseInt(form.guest_count, 10) : null,
      city: form.city.trim() || null,
      state: form.state.trim() || null,
      venue: form.venue.trim() || null,
      source: (form.source as CrmLead["source"]) || null,
      notes_text: form.notes_text.trim() || null,
      tags: [] as string[],
      position: nextPosition,
    };

    const { data: newLead, error: insertError } = await supabase
      .from("crm_leads")
      .insert(payload)
      .select()
      .single();

    if (insertError || !newLead) {
      setError(insertError?.message ?? "Failed to create lead.");
      setSubmitting(false);
      return;
    }

    // Log activity
    await supabase.from("crm_activity_log").insert({
      lead_id: newLead.id,
      type: "lead_created",
      body: `Lead created: ${newLead.full_name}`,
      meta: {},
    });

    onSuccess(newLead as CrmLead);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl"
          style={{ backgroundColor: "#361D29" }}
        >
          <h2 className="text-white font-semibold text-lg">Add New Lead</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto flex-1 px-6 py-5 space-y-4"
        >
          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Full name */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) => set("full_name", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
              placeholder="Jane Smith"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          {/* Service type */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Service Type
            </label>
            <select
              value={form.service_type}
              onChange={(e) => set("service_type", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40 bg-white"
            >
              <option value="">Select service…</option>
              {SERVICE_TYPES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Event date + Guest count */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Event Date
              </label>
              <input
                type="date"
                value={form.event_date}
                onChange={(e) => set("event_date", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Guest Count
              </label>
              <input
                type="number"
                min="1"
                value={form.guest_count}
                onChange={(e) => set("guest_count", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
                placeholder="50"
              />
            </div>
          </div>

          {/* City + State */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
                placeholder="Miami"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                value={form.state}
                onChange={(e) => set("state", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
                placeholder="FL"
              />
            </div>
          </div>

          {/* Venue */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Venue
            </label>
            <input
              type="text"
              value={form.venue}
              onChange={(e) => set("venue", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40"
              placeholder="The Grand Ballroom"
            />
          </div>

          {/* Pipeline column */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Stage
            </label>
            <select
              value={form.pipeline_column_id}
              onChange={(e) => set("pipeline_column_id", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40 bg-white"
            >
              {columns.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.name}
                </option>
              ))}
            </select>
          </div>

          {/* Source */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Source
            </label>
            <select
              value={form.source}
              onChange={(e) => set("source", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40 bg-white"
            >
              <option value="">Select source…</option>
              {SOURCES.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Notes
            </label>
            <textarea
              value={form.notes_text}
              onChange={(e) => set("notes_text", e.target.value)}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#361D29]/40 resize-none"
              placeholder="Any initial notes…"
            />
          </div>

          {/* Spacer so footer doesn't overlap last field */}
          <div className="h-2" />
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
            disabled={submitting}
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-colors disabled:opacity-50"
            style={{ backgroundColor: "#361D29" }}
          >
            {submitting ? "Creating…" : "Create Lead"}
          </button>
        </div>
      </div>
    </div>
  );
}
