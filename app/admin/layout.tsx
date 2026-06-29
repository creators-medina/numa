import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nüma Admin — CRM Pipeline",
  description: "Internal CRM pipeline for Nüma Açaí",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F1F0EB] text-charcoal antialiased">
      {children}
    </div>
  );
}
