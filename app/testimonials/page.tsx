import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from hosts and guests who have experienced Nüma Açaí at their weddings, showers, corporate events, and private celebrations.",
};

const INQUIRY_URL = "/inquiry";

const testimonials = [
  {
    quote:
      "I tried Nüma Açaí for the very first time last week, and honestly, it was one of the most refreshing things I've ever tasted. Having never had açaí before, I really didn't know what to expect, but my daughter loves it, so I thought, \"Why not give it a try?\" It ended up being one of the best treats I've had in a long time — so much so that while they were serving at the conference, I wanted it for every meal of the day. The ingredients were incredibly fresh, and you could immediately tell they were high quality. The care and attention that goes into each bowl truly makes Nüma Açaí one of my favorite summer treats. Fresh, flavorful, light, and incredibly satisfying. Highly recommend!",
    author: "Jen H.",
    event: "PLC Conference",
    location: "Dallas, TX",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Kind Words
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-5">
            Stories from Our Guests
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-xl mx-auto">
            The moments that matter most are the ones your guests carry with them.
            Here&apos;s what some of them have shared.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-8 flex flex-col gap-6 border border-cream-dark hover:border-tan-light hover:shadow-md transition-all duration-300"
              >
                <div className="text-tan text-3xl font-serif leading-none">&ldquo;</div>
                <p className="text-charcoal/70 text-sm leading-relaxed italic flex-1">
                  {t.quote}
                </p>
                <div className="border-t border-cream-dark pt-5">
                  <p className="font-serif text-base font-semibold text-forest">
                    {t.author}
                  </p>
                  <p className="text-xs text-warm-gray tracking-wide mt-1">
                    {t.event}
                  </p>
                  <p className="text-xs text-warm-gray-light mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            ))}

            {/* Wedding placeholder — quote pending */}
            <div className="bg-cream rounded-2xl p-8 flex flex-col gap-6 border border-cream-dark hover:border-tan-light hover:shadow-md transition-all duration-300">
              <div className="text-tan text-3xl font-serif leading-none">&ldquo;</div>
              <p className="text-warm-gray text-sm leading-relaxed italic flex-1">
                A beautiful day, a beautiful bowl. Full review coming soon — we
                were honored to be part of N. &amp; M.&apos;s wedding day.
              </p>
              <div className="border-t border-cream-dark pt-5">
                <p className="font-serif text-base font-semibold text-forest">
                  N. &amp; M.
                </p>
                <p className="text-xs text-warm-gray tracking-wide mt-1">
                  Wedding
                </p>
                <p className="text-xs text-warm-gray-light mt-0.5">
                  Dallas, TX
                </p>
              </div>
            </div>
          </div>

          {/* Soft note */}
          <p className="text-center text-sm text-warm-gray-light mt-12 max-w-md mx-auto leading-relaxed">
            More stories on the way as we collect kind words from recent
            weddings, conferences, and private events.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1B302A 0%, #2C4A3E 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream mb-5">
            Your Event Could Be Next
          </h2>
          <p className="text-cream/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Join the growing list of gatherings where Nüma turned a great event
            into an unforgettable one.
          </p>
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-8 py-4 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-tan-light transition-all duration-300 tracking-wide"
          >
            Inquire to Book
          </Link>
        </div>
      </section>
    </>
  );
}
