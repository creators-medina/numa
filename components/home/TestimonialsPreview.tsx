import Link from "next/link";

export default function TestimonialsPreview() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #EEE8E0 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
          Kind Words
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest mb-12">
          What Guests Are Saying
        </h2>

        {/* Featured testimonial */}
        <div className="bg-cream rounded-3xl p-10 sm:p-14 border border-cream-dark shadow-sm">
          <div className="text-tan text-5xl font-serif leading-none mb-4">&ldquo;</div>
          <p className="text-charcoal/80 text-lg sm:text-xl leading-relaxed italic font-serif mb-8">
            One of the most refreshing things I&apos;ve ever tasted. The
            ingredients were incredibly fresh, and you could immediately tell
            they were high quality. The care and attention that goes into each
            bowl truly makes Nüma Açaí one of my favorite summer treats.
            Fresh, flavorful, light, and incredibly satisfying. Highly
            recommend!
          </p>
          <div className="border-t border-cream-dark pt-6">
            <p className="font-serif text-base font-semibold text-forest">
              Jen H.
            </p>
            <p className="text-xs text-warm-gray tracking-wide mt-1">
              PLC Conference · Dallas, TX
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-light transition-colors tracking-wide"
          >
            Read More Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
