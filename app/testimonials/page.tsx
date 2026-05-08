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
        className="pt-36 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #DDE5EE 0%, #F1F0EB 60%, #EFE5D4 100%)" }}
      >
        <div
          className="absolute -top-1/4 -right-1/4 w-[70%] h-[140%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #9AB1C840 0%, transparent 60%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-6">
            Kind Words
          </p>
          <h1 className="text-5xl lg:text-6xl font-extralight text-aubergine leading-[1.05] mb-5 tracking-tight">
            Stories from{" "}
            <span className="font-script text-coral text-6xl lg:text-7xl">our guests</span>
          </h1>
          <p className="text-base text-warm-gray leading-relaxed max-w-xl mx-auto font-light">
            The moments that matter most are the ones your guests carry with them.
            Here&apos;s what some of them have shared.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-shell">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-xs text-warm-gray-light mt-1 font-light">
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
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1F1018 0%, #361D29 55%, #745A67 100%)" }}
      >
        <div
          className="absolute -top-1/3 -right-1/4 w-[60%] h-[120%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #9AB1C840 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight text-shell mb-5 tracking-tight leading-tight">
            Your event could be{" "}
            <span className="font-script text-coral text-5xl lg:text-6xl">next</span>
          </h2>
          <p className="text-shell/65 leading-relaxed mb-10 max-w-xl mx-auto font-light">
            Join the growing list of gatherings where nüma turned a great event
            into an unforgettable one.
          </p>
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-9 py-4 bg-shell text-aubergine text-[11px] font-medium uppercase rounded-full hover:bg-sky-light transition-all duration-300 tracking-[0.2em] shadow-lg"
          >
            Inquire to Book
          </Link>
        </div>
      </section>
    </>
  );
}
