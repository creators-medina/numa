import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NÜMA Açaí — Premium Event Catering",
    template: "%s | NÜMA Açaí",
  },
  description:
    "NÜMA Açaí brings a beautiful, premium açaí pop-up experience to weddings, bridal showers, private parties, corporate events, and more. Custom quoted for every gathering.",
  keywords: [
    "açaí catering",
    "event catering",
    "wedding catering",
    "açaí pop-up",
    "bridal shower catering",
    "NÜMA Açaí",
    "boutique catering",
  ],
  openGraph: {
    title: "NÜMA Açaí — Premium Event Catering",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
