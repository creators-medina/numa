import Link from "next/link";

const testimonials = [
  {
    quote:
      "NÜMA was the highlight of our bridal shower. The setup was absolutely stunning and every single guest kept talking about the bowls. It felt so elevated and intentional.",
    author: "Sofia R.",
    event: "Bridal Shower",
  },
  {
    quote:
      "We hired NÜMA for our corporate wellness event and they knocked it out of the park. Professional, beautiful, and the açaí was genuinely the best I've ever had.",
    author: "Priya M.",
    event: "Corporate Wellness Event",
  },
  {
    quote:
      "From the first email to the last bowl, working with NÜMA was effortless. They made our wedding feel even more special. Our guests are still raving.",
    author: "Camille & Jordan T.",
    event: "Wedding Reception",
  },
];

export default function TestimonialsPreview() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #EEE8E0 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest">
            What Guests Are Saying
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-8 flex flex-col gap-6 border border-cream-dark hover:border-tan-light hover:shadow-md transition-all duration-300"
            >
              <div className="text-tan text-2xl font-serif leading-none">&ldquo;</div>
              <p className="text-charcoal/75 text-sm leading-relaxed italic flex-1">
                {t.quote}
              </p>
              <div className="border-t border-cream-dark pt-5">
                <p className="font-serif text-base font-semibold text-forest">
                  {t.author}
                </p>
                <p className="text-xs text-warm-gray-light tracking-wide mt-1">
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
