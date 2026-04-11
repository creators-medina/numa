import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NÜMA Açaí. Reach us through our inquiry form or find us on Instagram.",
};

const INQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNXK88vFLqYU_TMDPOfF6nPZ1ruoseO1c25lojfa3JG-V-Bg/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Say Hello
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-5">
            We&apos;d Love to Hear from You
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-xl mx-auto">
            Whether you have a question, want to explore booking, or just want to
            say hi — we&apos;re always happy to connect.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inquiry CTA */}
            <div
              className="rounded-3xl p-10 flex flex-col gap-6"
              style={{
                background: "linear-gradient(145deg, #2C4A3E 0%, #1B302A 100%)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
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
                  className="text-cream"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-cream mb-2">
                  Event Inquiries
                </p>
                <p className="text-cream/60 text-sm leading-relaxed">
                  Ready to bring NÜMA to your event? Fill out our intake form
                  and we&apos;ll reach back out with a custom proposal.
                </p>
              </div>
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-tan-light transition-all duration-300 tracking-wide"
              >
                Open Inquiry Form
              </a>
            </div>

            {/* Instagram */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 bg-cream border border-cream-dark hover:border-tan-light transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-forest/8 flex items-center justify-center">
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
                  className="text-forest"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-forest mb-2">
                  Instagram
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  Follow along for event snapshots, behind-the-scenes moments,
                  and bowl inspiration. DMs welcome for quick questions.
                </p>
              </div>
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-light transition-colors tracking-wide"
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
          <div className="mt-8 p-6 rounded-2xl bg-cream-dark/40 border border-cream-dark text-center">
            <p className="text-sm text-warm-gray">
              <span className="font-medium text-charcoal">Prefer email?</span>{" "}
              Reach us at{" "}
              <a
                href="mailto:hello@numaacai.com"
                className="text-forest hover:text-forest-light transition-colors underline underline-offset-2"
              >
                hello@numaacai.com
              </a>
            </p>
          </div>

          {/* Response time */}
          <div className="mt-16 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tan mb-3">
              Response Time
            </p>
            <p className="font-serif text-2xl font-medium text-forest">
              We typically respond within 24–48 hours.
            </p>
            <p className="text-warm-gray text-sm mt-3 max-w-md mx-auto leading-relaxed">
              We review every inquiry personally and will follow up with care.
              For time-sensitive requests, Instagram DMs are often the fastest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
