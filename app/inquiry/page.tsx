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
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Let&apos;s Talk
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-5">
            Inquire to Book
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
            Every NÜMA event is custom. Tell us about your gathering and
            we&apos;ll craft a proposal designed just for you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left info column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tan mb-4">
                  Custom Pricing
                </p>
                <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
                  Every Event Is Unique
                </h2>
                <p className="text-warm-gray leading-relaxed text-sm mb-5">
                  Your quote is shaped by:
                </p>
                <ul className="space-y-2">
                  {pricingFactors.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                      <span className="text-tan mt-0.5 shrink-0">◦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-tan-light/40 bg-tan-light/10">
                <p className="font-serif text-base font-semibold text-forest mb-2">
                  When to Inquire
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
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
                  className="flex items-center gap-2 text-sm text-forest hover:text-forest-light transition-colors"
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
              <div className="bg-cream rounded-3xl border border-cream-dark p-8 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-semibold text-forest mb-2">
                    Tell us about your event
                  </h2>
                  <p className="text-warm-gray text-sm">
                    Fields marked <span className="text-berry">*</span> are required.
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
