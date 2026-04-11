import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquire to Book",
  description:
    "Submit an inquiry for NÜMA Açaí at your event. Every experience is custom quoted based on your guest count, location, event type, and service needs.",
};

const INQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNXK88vFLqYU_TMDPOfF6nPZ1ruoseO1c25lojfa3JG-V-Bg/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const whatWeAsk = [
  { label: "Event Date", icon: "◦" },
  { label: "Event Location / Venue", icon: "◦" },
  { label: "Type of Event", icon: "◦" },
  { label: "Estimated Guest Count", icon: "◦" },
  { label: "Indoor or Outdoor Setting", icon: "◦" },
  { label: "Service Duration", icon: "◦" },
  { label: "Any Special Requests or Notes", icon: "◦" },
];

const pricingFactors = [
  "Guest count and expected throughput",
  "Event duration and service hours",
  "Location and travel logistics",
  "Setup requirements and venue type",
  "Staffing needs",
  "Any custom requests or additions",
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
            Every NÜMA event is custom. We don&apos;t do packages — we do experiences.
            Start by telling us about your gathering and we&apos;ll craft a proposal
            designed just for you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="space-y-12">
              {/* Pricing note */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tan mb-4">
                  Custom Pricing
                </p>
                <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
                  Every Event Is Unique
                </h2>
                <p className="text-warm-gray leading-relaxed text-sm mb-5">
                  Because no two gatherings are the same, NÜMA pricing is fully
                  customized. Your quote is shaped by:
                </p>
                <ul className="space-y-2">
                  {pricingFactors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                      <span className="text-tan mt-0.5">◦</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we ask */}
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tan mb-4">
                  What We&apos;ll Ask
                </p>
                <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
                  Simple Intake
                </h2>
                <p className="text-warm-gray leading-relaxed text-sm mb-5">
                  Our inquiry form is quick and thoughtful. Here&apos;s what you&apos;ll
                  share with us:
                </p>
                <div className="space-y-3">
                  {whatWeAsk.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-cream-dark/40 border border-cream-dark"
                    >
                      <span className="text-forest font-semibold text-lg leading-none">
                        {item.icon}
                      </span>
                      <span className="text-charcoal text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline note */}
              <div className="p-6 rounded-2xl border border-tan-light/40 bg-tan-light/10">
                <p className="font-serif text-base font-semibold text-forest mb-2">
                  When Should I Inquire?
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  We recommend reaching out as early as possible — especially for
                  weddings and larger events. Popular dates book quickly, and the
                  earlier we connect, the more time we have to create something
                  truly special for you.
                </p>
              </div>
            </div>

            {/* Right: CTA card */}
            <div>
              <div
                className="rounded-3xl p-10 flex flex-col items-center text-center gap-8 sticky top-28"
                style={{
                  background: "linear-gradient(145deg, #2C4A3E 0%, #1B302A 100%)",
                }}
              >
                <div>
                  <p className="font-serif text-3xl font-semibold text-cream mb-3 leading-snug">
                    Ready to Get a Quote?
                  </p>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    Click below to open our inquiry form. It takes just a few
                    minutes, and we&apos;ll follow up personally with a custom proposal.
                  </p>
                </div>

                <a
                  href={INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-tan-light transition-all duration-300 tracking-wide shadow-lg"
                >
                  Open the Inquiry Form
                </a>

                <div className="w-full border-t border-cream/10 pt-6 space-y-3 text-left">
                  <p className="text-xs text-cream/40 font-semibold tracking-widest uppercase">
                    After you submit
                  </p>
                  <div className="flex items-start gap-3 text-sm text-cream/60">
                    <span className="text-tan text-lg leading-none">01</span>
                    <span>We review your inquiry and get in touch personally</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-cream/60">
                    <span className="text-tan text-lg leading-none">02</span>
                    <span>We send a custom proposal tailored to your event</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-cream/60">
                    <span className="text-tan text-lg leading-none">03</span>
                    <span>We finalize details and confirm your booking</span>
                  </div>
                </div>

                <p className="text-xs text-cream/30 text-center">
                  Prefer to reach out directly? Find us on Instagram{" "}
                  <a
                    href="https://www.instagram.com/numa.acai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/50 hover:text-cream/80 transition-colors underline"
                  >
                    @numa.acai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
