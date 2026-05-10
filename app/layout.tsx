import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: {
    default: "Nüma Açaí — Premium Event Catering",
    template: "%s | Nüma Açaí",
  },
  description:
    "Nüma Açaí brings a beautiful, premium açaí pop-up experience to weddings, bridal showers, private parties, corporate events, and more. Custom quoted for every gathering.",
  keywords: [
    "açaí catering",
    "event catering",
    "wedding catering",
    "açaí pop-up",
    "bridal shower catering",
    "Nüma Açaí",
    "boutique catering",
  ],
  openGraph: {
    title: "Nüma Açaí — Premium Event Catering",
    description:
      "A beautiful, premium açaí pop-up experience tailored for your special event.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
