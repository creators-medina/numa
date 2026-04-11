import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NÜMA Admin — CRM Pipeline",
  description: "Internal CRM pipeline for NÜMA Açaí",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F4F1] text-charcoal antialiased">
      {children}
    </div>
  );
}
