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
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F1F0EB 0%, #DDE5EE 100%)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-2/3 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, #9AB1C835 0%, transparent 65%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
            Kind Words
          </p>
          <h2 className="text-4xl lg:text-5xl font-extralight text-aubergine tracking-tight leading-tight">
            What guests are{" "}
            <span className="font-script text-coral text-5xl lg:text-6xl">saying</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-shell rounded-2xl p-8 flex flex-col gap-6 border border-sand hover:border-sky hover:shadow-md transition-all duration-300"
            >
              <div className="font-script text-coral text-5xl leading-none">&ldquo;</div>
              <p className="text-charcoal/75 text-sm leading-relaxed italic flex-1 font-light">
                {t.quote}
              </p>
              <div className="border-t border-sand pt-5">
                <p className="text-base font-light text-aubergine tracking-tight">
                  {t.author}
                </p>
                <p className="text-[11px] uppercase text-sky-dark tracking-[0.2em] mt-1.5 font-medium">
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase text-aubergine hover:text-coral transition-colors tracking-[0.2em]"
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
