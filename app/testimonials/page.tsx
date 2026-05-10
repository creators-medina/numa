import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from hosts and guests who have experienced NÜMA Açaí at their weddings, showers, corporate events, and private celebrations.",
};

const INQUIRY_URL = "/inquiry";

const testimonials = [
  {
    quote:
      "NÜMA was the highlight of our bridal shower. The setup was absolutely stunning — it looked like something straight out of a magazine. Every single guest kept talking about the bowls. It felt so elevated and intentional, and made our whole event feel even more special.",
    author: "Sofia R.",
    event: "Bridal Shower",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "We hired NÜMA for our corporate wellness day and they completely exceeded our expectations. The setup was professional and beautiful, the team was warm and efficient, and the açaí was genuinely the best I've ever had. Our team is still talking about it weeks later.",
    author: "Priya M.",
    event: "Corporate Wellness Event",
    location: "Santa Monica, CA",
  },
  {
    quote:
      "From the very first message to the final bowl, working with NÜMA was effortless. They made our wedding feel even more special. Our guests lined up again and again. We can't recommend them enough.",
    author: "Camille & Jordan T.",
    event: "Wedding Reception",
    location: "Malibu, CA",
  },
  {
    quote:
      "We wanted something different for our daughter's baby shower — something that would feel fresh, beautiful, and memorable. NÜMA delivered all of that and more. The table looked gorgeous and the açaí was absolutely delicious.",
    author: "Diane L.",
    event: "Baby Shower",
    location: "Beverly Hills, CA",
  },
  {
    quote:
      "I booked NÜMA for a private birthday dinner party and I am so glad I did. The setup was beautiful, completely in line with our aesthetic, and the team was lovely. My guests were obsessed. I'm already planning to book them again.",
    author: "Natalie V.",
    event: "Private Birthday Celebration",
    location: "West Hollywood, CA",
  },
  {
    quote:
      "NÜMA was a perfect addition to our brand activation event. The station was visually stunning — it became the most photographed corner of the entire event. Premium, professional, and genuinely delicious.",
    author: "Marcus A.",
    event: "Brand Activation",
    location: "Culver City, CA",
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
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
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
            Join the growing list of gatherings where NÜMA turned a great event
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
