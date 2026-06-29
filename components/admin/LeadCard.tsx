"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { CrmLead } from "@/types/crm";

interface LeadCardProps {
  lead: CrmLead;
  onClick: () => void;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return dateStr;
  }
}

function isOverdue(dueDateStr: string): boolean {
  try {
    const due = new Date(dueDateStr + "T00:00:00");
    return due < new Date();
  } catch {
    return false;
  }
}

const SOURCE_LABELS: Record<string, string> = {
  instagram: "IG",
  referral: "Ref",
  website: "Web",
  google: "Google",
  other: "Other",
};

export default function LeadCard({ lead, onClick }: LeadCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: lead.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    touchAction: "none",
  };

  const overdue = lead.next_action_due && isOverdue(lead.next_action_due);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 cursor-pointer select-none"
    >
      {/* Name */}
      <p
        className="font-semibold text-gray-900 text-sm leading-snug mb-1"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {lead.full_name}
      </p>

      {/* Badges row */}
      <div className="flex flex-wrap gap-1 mb-2">
        {lead.service_type && (
          <span
            className="text-white text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#485A47" }}
          >
            {lead.service_type}
          </span>
        )}
        {lead.source && (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {SOURCE_LABELS[lead.source] ?? lead.source}
          </span>
        )}
      </div>

      {/* Event date */}
      {lead.event_date && (
        <p className="text-xs text-gray-500 mb-1">
          📅 {formatDate(lead.event_date)}
        </p>
      )}

      {/* Location */}
      {(lead.city || lead.state) && (
        <p className="text-xs text-gray-500 mb-1">
          📍 {[lead.city, lead.state].filter(Boolean).join(", ")}
        </p>
      )}

      {/* Guest count */}
      {lead.guest_count != null && (
        <p className="text-xs text-gray-500 mb-1">👥 {lead.guest_count} guests</p>
      )}

      {/* Quote amount */}
      {lead.quote_amount != null && (
        <p className="text-xs font-semibold mb-1" style={{ color: "#485A47" }}>
          ${lead.quote_amount.toLocaleString()}
        </p>
      )}

      {/* Tags */}
      {lead.tags && lead.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-1">
          {lead.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#F1F0EB", color: "#8C8F8E" }}
            >
              {tag}
            </span>
          ))}
          {lead.tags.length > 2 && (
            <span className="text-[10px] text-gray-400">
              +{lead.tags.length - 2}
            </span>
          )}
        </div>
      )}

      {/* Next action due */}
      {lead.next_action_due && (
        <p
          className={`text-[11px] mt-1 font-medium ${
            overdue ? "text-red-500" : "text-gray-400"
          }`}
        >
          {overdue ? "⚠ " : ""}Due {formatDate(lead.next_action_due)}
          {lead.next_action ? `: ${lead.next_action}` : ""}
        </p>
      )}
    </div>
  );
}
