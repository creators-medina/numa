import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NÜMA Açaí. Reach us through our inquiry form or find us on Instagram.",
};

const INQUIRY_URL = "/inquiry";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #DDE5EE 0%, #F1F0EB 60%, #EFE5D4 100%)" }}
      >
        <div
          className="absolute -top-1/4 -right-1/4 w-[70%] h-[140%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #9AB1C840 0%, transparent 60%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-6">
            Say Hello
          </p>
          <h1 className="text-5xl lg:text-6xl font-extralight text-aubergine leading-[1.05] mb-5 tracking-tight">
            We&apos;d love to{" "}
            <span className="font-script text-coral text-6xl lg:text-7xl">hear from you</span>
          </h1>
          <p className="text-base text-warm-gray leading-relaxed max-w-xl mx-auto font-light">
            Whether you have a question, want to explore booking, or just want to
            say hi — we&apos;re always happy to connect.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-24 bg-shell">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inquiry CTA */}
            <div
              className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #361D29 0%, #1F1018 100%)",
              }}
            >
              <div
                className="absolute -top-1/2 -right-1/3 w-[80%] h-[160%] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, #9AB1C835 0%, transparent 60%)" }}
              />
              <div className="relative w-12 h-12 rounded-full bg-shell/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-shell"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-xl font-light text-shell mb-2 tracking-tight">
                  Event Inquiries
                </p>
                <p className="text-shell/65 text-sm leading-relaxed font-light">
                  Ready to bring nüma to your event? Fill out our intake form
                  and we&apos;ll reach back out with a custom proposal.
                </p>
              </div>
              <Link href={INQUIRY_URL}
                className="relative inline-flex items-center justify-center px-6 py-3 bg-shell text-aubergine text-[11px] font-medium uppercase rounded-full hover:bg-sky-light transition-all duration-300 tracking-[0.2em]"
              >
                Open Inquiry Form
              </Link>
            </div>

            {/* Instagram */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 bg-shell border border-sand hover:border-sky transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-dark"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-light text-aubergine mb-2 tracking-tight">
                  Instagram
                </p>
                <p className="text-warm-gray text-sm leading-relaxed font-light">
                  Follow along for event snapshots, behind-the-scenes moments,
                  and bowl inspiration. DMs welcome for quick questions.
                </p>
              </div>
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-light text-aubergine hover:text-coral transition-colors tracking-wide"
              >
                @numa.acai
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
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Email note */}
          <div className="mt-8 p-6 rounded-2xl bg-sand/50 border border-sand text-center">
            <p className="text-sm text-warm-gray font-light">
              <span className="font-medium text-aubergine">Prefer email?</span>{" "}
              Reach us at{" "}
              <a
                href="mailto:hello@numaacai.com"
                className="text-coral hover:text-rose transition-colors underline underline-offset-4 decoration-coral/40"
              >
                hello@numaacai.com
              </a>
            </p>
          </div>

          {/* Response time */}
          <div className="mt-16 text-center">
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
              Response Time
            </p>
            <p className="text-2xl lg:text-3xl font-extralight text-aubergine tracking-tight">
              We typically respond within{" "}
              <span className="font-script text-coral text-3xl lg:text-4xl">24–48 hours</span>.
            </p>
            <p className="text-warm-gray text-sm mt-4 max-w-md mx-auto leading-relaxed font-light">
              We review every inquiry personally and will follow up with care.
              For time-sensitive requests, Instagram DMs are often the fastest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
