"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCorners,
  useDroppable,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { createClient } from "@/lib/supabase/client";
import type { CrmBoard, CrmPipelineColumn, CrmLead } from "@/types/crm";
import LeadCard from "@/components/admin/LeadCard";
import LeadDetailModal from "@/components/admin/LeadDetailModal";
import AddLeadModal from "@/components/admin/AddLeadModal";

const BOARD_SLUG = "numa-acai";

/* ─── Droppable column container ──────────────────────────────── */
function DroppableColumnBody({
  colId,
  children,
  isEmpty,
}: {
  colId: string;
  children: React.ReactNode;
  isEmpty: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: colId });
  return (
    <div
      ref={setNodeRef}
      className="flex-1 p-3 min-h-[80px] transition-colors"
      style={isOver ? { backgroundColor: "rgba(44,74,62,0.04)" } : undefined}
    >
      <div className="space-y-2">{children}</div>
      {isEmpty && (
        <div
          className={`mt-2 h-16 rounded-lg border-2 border-dashed flex items-center justify-center transition-colors ${
            isOver ? "border-[#2C4A3E] bg-[#2C4A3E]/5" : "border-gray-100"
          }`}
        >
          <p className="text-xs text-gray-300">Drop here</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main board ──────────────────────────────────────────────── */
export default function AdminBoard() {
  const supabase = createClient();
  const [board, setBoard] = useState<CrmBoard | null>(null);
  const [columns, setColumns] = useState<CrmPipelineColumn[]>([]);
  const [leads, setLeads] = useState<CrmLead[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedLead, setSelectedLead] = useState<CrmLead | null>(null);
  const [addLeadColumnId, setAddLeadColumnId] = useState<string | null>(null);
  const [showAddLead, setShowAddLead] = useState(false);

  const [search, setSearch] = useState("");
  const [filterAssigned, setFilterAssigned] = useState("");

  const [activeDragLead, setActiveDragLead] = useState<CrmLead | null>(null);

  // Column rename
  const [renamingColId, setRenamingColId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const renameRef = useRef<HTMLInputElement>(null);

  // Add column
  const [addingColumn, setAddingColumn] = useState(false);
  const [newColName, setNewColName] = useState("");
  const newColRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  /* ── Data fetch ── */
  const load = useCallback(async () => {
    setLoading(true);
    const { data: b } = await supabase
      .from("crm_boards")
      .select("*")
      .eq("slug", BOARD_SLUG)
      .single();
    if (!b) {
      setLoading(false);
      return;
    }
    setBoard(b as CrmBoard);

    const [{ data: cols }, { data: lds }] = await Promise.all([
      supabase
        .from("crm_pipeline_columns")
        .select("*")
        .eq("board_id", b.id)
        .eq("is_archived", false)
        .order("position"),
      supabase
        .from("crm_leads")
        .select("*")
        .eq("board_id", b.id)
        .order("position"),
    ]);
    setColumns((cols as CrmPipelineColumn[]) ?? []);
    setLeads((lds as CrmLead[]) ?? []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    load();
  }, [load]);

  // Focus rename input
  useEffect(() => {
    if (renamingColId && renameRef.current) {
      renameRef.current.focus();
      renameRef.current.select();
    }
  }, [renamingColId]);

  // Focus add-column input
  useEffect(() => {
    if (addingColumn && newColRef.current) {
      newColRef.current.focus();
    }
  }, [addingColumn]);

  /* ── Filtering ── */
  const filteredLeads = leads.filter((l) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      l.full_name.toLowerCase().includes(q) ||
      (l.email ?? "").toLowerCase().includes(q) ||
      (l.service_type ?? "").toLowerCase().includes(q) ||
      (l.city ?? "").toLowerCase().includes(q);
    const matchAssigned =
      !filterAssigned || l.assigned_to === filterAssigned;
    return matchSearch && matchAssigned;
  });

  const assignees = [
    ...new Set(leads.map((l) => l.assigned_to).filter(Boolean)),
  ] as string[];

  /* ── Leads per column (sorted) ── */
  function colLeads(colId: string) {
    return filteredLeads
      .filter((l) => l.pipeline_column_id === colId)
      .sort((a, b) => a.position - b.position);
  }

  /* ── DnD ── */
  function onDragStart({ active }: DragStartEvent) {
    const lead = leads.find((l) => l.id === active.id);
    setActiveDragLead(lead ?? null);
  }

  function onDragOver({ active, over }: DragOverEvent) {
    if (!over || active.id === over.id) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const sourceLead = leads.find((l) => l.id === activeId);
    if (!sourceLead) return;

    // Determine the column we're hovering over
    const overLead = leads.find((l) => l.id === overId);
    const targetColId = overLead
      ? overLead.pipeline_column_id
      : columns.find((c) => c.id === overId)?.id;

    if (!targetColId || sourceLead.pipeline_column_id === targetColId) return;

    // Cross-column: optimistically move card to new column at the end
    setLeads((prev) =>
      prev.map((l) =>
        l.id === activeId ? { ...l, pipeline_column_id: targetColId } : l
      )
    );
  }

  async function onDragEnd({ active, over }: DragEndEvent) {
    setActiveDragLead(null);
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const sourceLead = leads.find((l) => l.id === activeId);
    if (!sourceLead) return;

    // Determine target column
    const overLead = leads.find((l) => l.id === overId);
    const targetColId = overLead
      ? overLead.pipeline_column_id
      : columns.find((c) => c.id === overId)?.id ?? sourceLead.pipeline_column_id;

    const originalColId = sourceLead.pipeline_column_id;

    // Build the new ordered list for the target column
    const currentColLeads = leads
      .filter((l) => l.pipeline_column_id === targetColId)
      .sort((a, b) => a.position - b.position);

    let newColLeads: CrmLead[];
    if (originalColId === targetColId) {
      // Same-column reorder
      if (activeId === overId) return;
      const oldIdx = currentColLeads.findIndex((l) => l.id === activeId);
      const newIdx = currentColLeads.findIndex((l) => l.id === overId);
      if (oldIdx === -1 || newIdx === -1) return;
      newColLeads = arrayMove(currentColLeads, oldIdx, newIdx).map(
        (l, i) => ({ ...l, position: i })
      );
    } else {
      // Cross-column: card was already moved by onDragOver, now set position
      const withoutActive = currentColLeads.filter((l) => l.id !== activeId);
      const overIdx = overLead
        ? withoutActive.findIndex((l) => l.id === overId)
        : withoutActive.length;
      const insertIdx = overIdx >= 0 ? overIdx : withoutActive.length;
      const movedLead: CrmLead = { ...sourceLead, pipeline_column_id: targetColId };
      newColLeads = [
        ...withoutActive.slice(0, insertIdx),
        movedLead,
        ...withoutActive.slice(insertIdx),
      ].map((l, i) => ({ ...l, position: i }));
    }

    // Optimistic state update
    setLeads((prev) => {
      const other = prev.filter((l) => l.pipeline_column_id !== targetColId);
      return [...other, ...newColLeads];
    });

    // Persist positions
    await Promise.all(
      newColLeads.map((l) =>
        supabase
          .from("crm_leads")
          .update({
            pipeline_column_id: l.pipeline_column_id,
            position: l.position,
          })
          .eq("id", l.id)
      )
    );

    // Log stage change
    if (originalColId !== targetColId) {
      const fromCol = columns.find((c) => c.id === originalColId);
      const toCol = columns.find((c) => c.id === targetColId);
      await supabase.from("crm_activity_log").insert({
        lead_id: activeId,
        type: "stage_changed",
        body: `Moved from "${fromCol?.name ?? "?"}" to "${toCol?.name ?? "?"}"`,
        meta: { from: originalColId, to: targetColId },
      });
    }
  }

  /* ── Column rename ── */
  function startRename(col: CrmPipelineColumn) {
    setRenamingColId(col.id);
    setRenameValue(col.name);
  }

  async function commitRename(col: CrmPipelineColumn) {
    const name = renameValue.trim();
    setRenamingColId(null);
    if (!name || name === col.name) return;
    setColumns((prev) =>
      prev.map((c) => (c.id === col.id ? { ...c, name } : c))
    );
    await supabase
      .from("crm_pipeline_columns")
      .update({ name })
      .eq("id", col.id);
  }

  /* ── Add column ── */
  async function submitNewColumn() {
    const name = newColName.trim();
    setAddingColumn(false);
    setNewColName("");
    if (!name || !board) return;
    const position = columns.length;
    const { data } = await supabase
      .from("crm_pipeline_columns")
      .insert({ board_id: board.id, name, position, color: null })
      .select()
      .single();
    if (data) setColumns((prev) => [...prev, data as CrmPipelineColumn]);
  }

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F4F1] flex flex-col">
        {/* Header skeleton */}
        <div className="h-[57px] bg-white border-b border-gray-200 shadow-sm" />
        {/* Board skeleton */}
        <div className="flex gap-4 px-6 py-6 overflow-x-auto animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2"
            >
              <div className="h-4 bg-gray-100 rounded w-1/2 mb-3" />
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="h-24 bg-gray-50 rounded-xl border border-gray-100"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!board) {
    return (
      <div className="min-h-screen bg-[#F5F4F1] flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Supabase not connected
          </p>
          <p className="text-sm text-gray-500">
            Add your{" "}
            <code className="bg-gray-100 px-1 rounded">
              NEXT_PUBLIC_SUPABASE_URL
            </code>{" "}
            and{" "}
            <code className="bg-gray-100 px-1 rounded">
              NEXT_PUBLIC_SUPABASE_ANON_KEY
            </code>{" "}
            to{" "}
            <code className="bg-gray-100 px-1 rounded">.env.local</code> and
            run the SQL schema.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4F1] flex flex-col">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-3 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#2C4A3E] flex items-center justify-center">
              <span
                className="text-white text-xs font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                N
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-none">
                NÜMA Admin
              </p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">
                CRM Pipeline
              </p>
            </div>
          </div>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          {/* Search */}
          <div className="flex-1 max-w-xs relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads..."
              className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2C4A3E] focus:bg-white transition-colors"
            />
          </div>

          {/* Filter by assigned */}
          {assignees.length > 0 && (
            <select
              value={filterAssigned}
              onChange={(e) => setFilterAssigned(e.target.value)}
              className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#2C4A3E] text-gray-600"
            >
              <option value="">All reps</option>
              {assignees.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          )}

          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {filteredLeads.length} lead
              {filteredLeads.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setShowAddLead(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#2C4A3E] text-white text-sm font-medium rounded-full hover:bg-[#3D6355] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Lead
            </button>
            <a
              href="/"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Site
            </a>
          </div>
        </div>
      </header>

      {/* ── Kanban Board ── */}
      <div className="flex-1 overflow-x-auto px-6 py-6">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          <div className="flex gap-4 items-start min-w-max pb-4">
            {columns.map((col) => {
              const leads = colLeads(col.id);
              const leadIds: UniqueIdentifier[] = leads.map((l) => l.id);

              return (
                <div
                  key={col.id}
                  className="w-72 shrink-0 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  {/* Column header */}
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between gap-2">
                    {renamingColId === col.id ? (
                      <input
                        ref={renameRef}
                        value={renameValue}
                        onChange={(e) => setRenameValue(e.target.value)}
                        onBlur={() => commitRename(col)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") commitRename(col);
                          if (e.key === "Escape") setRenamingColId(null);
                        }}
                        className="flex-1 text-sm font-semibold text-gray-800 bg-gray-50 rounded px-2 py-0.5 border border-[#2C4A3E] outline-none"
                      />
                    ) : (
                      <button
                        onDoubleClick={() => startRename(col)}
                        className="flex-1 text-left text-sm font-semibold text-gray-800 hover:text-[#2C4A3E] transition-colors truncate"
                        title="Double-click to rename"
                      >
                        {col.name}
                      </button>
                    )}
                    <span className="shrink-0 text-xs font-medium text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                      {leads.length}
                    </span>
                  </div>

                  {/* Cards */}
                  <SortableContext
                    items={leadIds}
                    strategy={verticalListSortingStrategy}
                  >
                    <DroppableColumnBody
                      colId={col.id}
                      isEmpty={leads.length === 0}
                    >
                      {leads.map((lead) => (
                        <LeadCard
                          key={lead.id}
                          lead={lead}
                          onClick={() => setSelectedLead(lead)}
                        />
                      ))}
                    </DroppableColumnBody>
                  </SortableContext>

                  {/* Add to column */}
                  <div className="px-3 pb-3 pt-1">
                    <button
                      onClick={() => {
                        setAddLeadColumnId(col.id);
                        setShowAddLead(true);
                      }}
                      className="w-full flex items-center gap-1.5 px-3 py-2 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Add lead
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Add column */}
            <div className="w-72 shrink-0">
              {addingColumn ? (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <input
                    ref={newColRef}
                    value={newColName}
                    onChange={(e) => setNewColName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submitNewColumn();
                      if (e.key === "Escape") {
                        setAddingColumn(false);
                        setNewColName("");
                      }
                    }}
                    onBlur={submitNewColumn}
                    placeholder="Column name..."
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-[#2C4A3E]"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={submitNewColumn}
                      className="flex-1 py-1.5 bg-[#2C4A3E] text-white text-xs rounded-lg hover:bg-[#3D6355] transition-colors"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setAddingColumn(false);
                        setNewColName("");
                      }}
                      className="flex-1 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAddingColumn(true)}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-400 hover:text-gray-600 bg-white/50 hover:bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add Column
                </button>
              )}
            </div>
          </div>

          {/* Drag overlay */}
          <DragOverlay>
            {activeDragLead ? (
              <div className="opacity-90 rotate-1 scale-[1.02] w-72">
                <LeadCard lead={activeDragLead} onClick={() => {}} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {/* ── Modals ── */}
      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          columns={columns}
          onClose={() => setSelectedLead(null)}
          onUpdate={(updated) => {
            setLeads((prev) =>
              prev.map((l) => (l.id === updated.id ? updated : l))
            );
            setSelectedLead(updated);
          }}
        />
      )}

      {showAddLead && board && (
        <AddLeadModal
          boardId={board.id}
          columns={columns}
          defaultColumnId={addLeadColumnId ?? columns[0]?.id}
          onSuccess={(lead) => {
            setLeads((prev) => [...prev, lead]);
            setShowAddLead(false);
            setAddLeadColumnId(null);
          }}
          onClose={() => {
            setShowAddLead(false);
            setAddLeadColumnId(null);
          }}
        />
      )}
    </div>
  );
}
