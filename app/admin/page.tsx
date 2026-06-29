"use client";

import dynamic from "next/dynamic";

// ssr: false must be used inside a "use client" component in Next.js 16
const AdminBoard = dynamic(() => import("@/components/admin/AdminBoard"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#F1F0EB] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#485A47] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm text-gray-500">Loading pipeline...</p>
      </div>
    </div>
  ),
});

export default function AdminPage() {
  return <AdminBoard />;
}
