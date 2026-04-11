"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CrmLead, CrmPipelineColumn, CrmNote, CrmActivity } from "@/types/crm";

const SERVICE_TYPES = [
  "Wedding", "Bridal Shower", "Baby Shower", "Private Party",
  "Corporate Event", "Wellness / Retreat", "Brand Activation",
  "Community Pop-Up", "Other",
];

const SOURCES = ["instagram", "referral", "website", "google", "other"];

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatTs(d: string) {
  return new Date(d).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

type TimelineItem = { id: string; created_at: string; type: "note" | "activity"; body: string; label?: string };

interface Props {
  lead: CrmLead | null;
  columns: CrmPipelineColumn[];
  onClose: () => void;
  onUpdate: (lead: CrmLead) => void;
}

export default function LeadDetailModal({ lead, columns, onClose, onUpdate }: Props) {
  const [localLead, setLocalLead] = useState<CrmLead | null>(lead);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [noteText, setNoteText] = useState("");
  const [addingNote, setAddingNote] = useState(false);
  const [newTag, setNewTag] = useState("");
  const supabase = createClient();

  useEffect(() => { setLocalLead(lead); }, [lead]);

  const fetchTimeline = useCallback(async () => {
    if (!lead) return;
    const [{ data: notes }, { data: activities }] = await Promise.all([
      supabase.from("crm_notes").select("*").eq("lead_id", lead.id).order("created_at", { ascending: false }),
      supabase.from("crm_activity_log").select("*").eq("lead_id", lead.id).order("created_at", { ascending: false }),
    ]);
    const items: TimelineItem[] = [
      ...(notes || []).map((n: CrmNote) => ({ id: n.id, created_at: n.created_at, type: "note" as const, body: n.body })),
      ...(activities || []).map((a: CrmActivity) => ({ id: a.id, created_at: a.created_at, type: "activity" as const, body: a.body, label: a.type })),
    ];
    items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    setTimeline(items);
  }, [lead, supabase]);

  useEffect(() => { fetchTimeline(); }, [fetchTimeline]);

  async function save(updates: Partial<CrmLead>) {
    if (!localLead) return;
    const merged = { ...localLead, ...updates };
    setLocalLead(merged);
    const { data } = await supabase.from("crm_leads").update(updates).eq("id", localLead.id).select().single();
    if (data) onUpdate(data);
  }

  async function changeStage(columnId: string) {
    if (!localLead) return;
    const col = columns.find(c => c.id === columnId);
    const prev = columns.find(c => c.id === localLead.pipeline_column_id);
    await save({ pipeline_column_id: columnId });
    await supabase.from("crm_activity_log").insert({
      lead_id: localLead.id,
      type: "stage_changed",
      body: `Moved from "${prev?.name ?? "?"}" to "${col?.name ?? "?"}"`,
      meta: { from: localLead.pipeline_column_id, to: columnId },
    });
    fetchTimeline();
  }

  async function addNote() {
    if (!noteText.trim() || !localLead) return;
    setAddingNote(true);
    await supabase.from("crm_notes").insert({ lead_id: localLead.id, body: noteText.trim(), created_by: "Admin" });
    await supabase.from("crm_activity_log").insert({
      lead_id: localLead.id, type: "note_added",
      body: `Note added: "${noteText.trim().substring(0, 80)}"`, meta: {},
    });
    setNoteText("");
    setAddingNote(false);
    fetchTimeline();
  }

  async function addTag() {
    if (!newTag.trim() || !localLead) return;
    const tags = [...(localLead.tags || []), newTag.trim().toLowerCase()];
    await save({ tags });
    setNewTag("");
  }

  async function removeTag(tag: string) {
    if (!localLead) return;
    await save({ tags: localLead.tags.filter(t => t !== tag) });
  }

  if (!localLead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 shrink-0">
          <div className="flex-1 min-w-0">
            <input
              className="font-serif text-2xl font-bold text-gray-900 w-full bg-transparent border-none outline-none focus:ring-0 p-0"
              value={localLead.full_name}
              onChange={e => setLocalLead({ ...localLead, full_name: e.target.value })}
              onBlur={e => save({ full_name: e.target.value })}
            />
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <select
                value={localLead.pipeline_column_id}
                onChange={e => changeStage(e.target.value)}
                className="text-xs font-semibold px-2 py-1 rounded-full bg-[#2C4A3E] text-white border-none outline-none cursor-pointer"
              >
                {columns.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              {localLead.service_type && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{localLead.service_type}</span>
              )}
            </div>
          </div>
          <button onClick={onClose} className="ml-4 p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Lead info grid */}
          <div className="p-6 grid grid-cols-2 gap-4 border-b border-gray-100">
            {[
              { label: "Email", field: "email", type: "email" },
              { label: "Phone", field: "phone", type: "tel" },
              { label: "City", field: "city", type: "text" },
              { label: "State", field: "state", type: "text" },
              { label: "Venue", field: "venue", type: "text" },
              { label: "Guest Count", field: "guest_count", type: "number" },
              { label: "Event Date", field: "event_date", type: "date" },
              { label: "Quote ($)", field: "quote_amount", type: "number" },
              { label: "Budget", field: "budget", type: "text" },
              { label: "Assigned To", field: "assigned_to", type: "text" },
            ].map(({ label, field, type }) => (
              <div key={field}>
                <p className="text-xs text-gray-400 font-medium tracking-wide mb-1">{label}</p>
                <input
                  type={type}
                  value={((localLead as unknown) as Record<string, unknown>)[field] as string ?? ""}
                  onChange={e => setLocalLead({ ...localLead, [field]: e.target.value || null } as CrmLead)}
                  onBlur={e => save({ [field]: e.target.value || null } as Partial<CrmLead>)}
                  placeholder="—"
                  className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-1.5 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none transition-colors"
                />
              </div>
            ))}

            <div>
              <p className="text-xs text-gray-400 font-medium tracking-wide mb-1">Service Type</p>
              <select
                value={localLead.service_type ?? ""}
                onChange={e => save({ service_type: e.target.value || null })}
                className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-1.5 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none"
              >
                <option value="">—</option>
                {SERVICE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <p className="text-xs text-gray-400 font-medium tracking-wide mb-1">Source</p>
              <select
                value={localLead.source ?? ""}
                onChange={e => save({ source: (e.target.value as CrmLead["source"]) || null })}
                className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-1.5 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none capitalize"
              >
                <option value="">—</option>
                {SOURCES.map(s => <option key={s} value={s} className="capitalize">{s}</option>)}
              </select>
            </div>
          </div>

          {/* Next Action */}
          <div className="p-6 border-b border-gray-100">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">Next Action</p>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={localLead.next_action ?? ""}
                onChange={e => setLocalLead({ ...localLead, next_action: e.target.value || null })}
                onBlur={e => save({ next_action: e.target.value || null })}
                placeholder="e.g. Send quote"
                className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none"
              />
              <input
                type="date"
                value={localLead.next_action_due ?? ""}
                onChange={e => setLocalLead({ ...localLead, next_action_due: e.target.value || null })}
                onBlur={e => save({ next_action_due: e.target.value || null })}
                className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 border-b border-gray-100">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">Tags</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {(localLead.tags || []).map(tag => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E2CBA8] text-xs text-[#2C4A3E] font-medium">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="text-gray-400 hover:text-red-400 leading-none">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addTag()}
                placeholder="Add tag..."
                className="flex-1 text-sm bg-gray-50 rounded-lg px-3 py-1.5 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none"
              />
              <button onClick={addTag} className="px-3 py-1.5 bg-[#2C4A3E] text-white text-xs rounded-lg hover:bg-[#3D6355] transition-colors">Add</button>
            </div>
          </div>

          {/* Internal Notes */}
          <div className="p-6 border-b border-gray-100">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">Quick Notes</p>
            <textarea
              value={localLead.notes_text ?? ""}
              onChange={e => setLocalLead({ ...localLead, notes_text: e.target.value })}
              onBlur={e => save({ notes_text: e.target.value || null })}
              rows={3}
              placeholder="Internal notes visible only to your team..."
              className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 border border-transparent focus:border-[#2C4A3E] focus:bg-white outline-none resize-none"
            />
          </div>

          {/* Add Note */}
          <div className="p-6 border-b border-gray-100">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">Add Note to Timeline</p>
            <textarea
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              rows={2}
              placeholder="Add a note, update, or action taken..."
              className="w-full text-sm text-gray-700 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus:border-[#2C4A3E] focus:bg-white outline-none resize-none mb-2"
            />
            <button
              onClick={addNote}
              disabled={addingNote || !noteText.trim()}
              className="px-5 py-2 bg-[#2C4A3E] text-white text-sm rounded-full hover:bg-[#3D6355] transition-colors disabled:opacity-50"
            >
              {addingNote ? "Saving..." : "Add Note"}
            </button>
          </div>

          {/* Activity Timeline */}
          <div className="p-6">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-4">Activity Timeline</p>
            {timeline.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No activity yet.</p>
            ) : (
              <div className="space-y-4">
                {timeline.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.type === "note" ? "bg-[#C9A87C]" : "bg-[#8FAF97]"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700">{item.body}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{formatTs(item.created_at)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-400 shrink-0">
          <span>Created {formatDate(localLead.created_at)}</span>
          <span>Updated {formatDate(localLead.updated_at)}</span>
        </div>
      </div>
    </div>
  );
}
