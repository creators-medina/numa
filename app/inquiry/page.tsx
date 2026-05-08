import type { Metadata } from "next";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Inquire to Book",
  description:
    "Submit an inquiry for NÜMA Açaí at your event. Every experience is custom quoted based on your guest count, location, event type, and service needs.",
};

const pricingFactors = [
  "Guest count and expected throughput",
  "Event duration and service hours",
  "Location and travel logistics",
  "Setup requirements and venue type",
  "Staffing needs",
  "Custom requests or additions",
];

export default function InquiryPage() {
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
            Let&apos;s Talk
          </p>
          <h1 className="text-5xl lg:text-6xl font-extralight text-aubergine leading-[1.05] mb-5 tracking-tight">
            Inquire to{" "}
            <span className="font-script text-coral text-6xl lg:text-7xl">book</span>
          </h1>
          <p className="text-base text-warm-gray leading-relaxed max-w-xl mx-auto font-light">
            Every nüma event is custom. Tell us about your gathering and
            we&apos;ll craft a proposal designed just for you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-24 bg-shell">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left info column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
                  Custom Pricing
                </p>
                <h2 className="text-2xl font-extralight text-aubergine mb-4 tracking-tight">
                  Every event is unique
                </h2>
                <p className="text-warm-gray leading-relaxed text-sm mb-5 font-light">
                  Your quote is shaped by:
                </p>
                <ul className="space-y-2">
                  {pricingFactors.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warm-gray font-light">
                      <span className="text-coral mt-0.5 shrink-0">◦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-sky/30 bg-sky/8">
                <p className="text-base font-light text-aubergine mb-2 tracking-tight">
                  When to inquire
                </p>
                <p className="text-warm-gray text-sm leading-relaxed font-light">
                  As early as possible — popular dates fill quickly, especially
                  for weddings and large events. We&apos;ll personally review every
                  submission and follow up within 24–48 hours.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/numa.acai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-aubergine hover:text-coral transition-colors font-light"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  @numa.acai
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-3">
              <div className="bg-shell rounded-3xl border border-sand p-8 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extralight text-aubergine mb-2 tracking-tight">
                    Tell us about your event
                  </h2>
                  <p className="text-warm-gray text-sm font-light">
                    Fields marked <span className="text-coral">*</span> are required.
                  </p>
                </div>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
