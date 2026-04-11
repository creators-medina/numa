import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind NÜMA Açaí — a boutique event catering brand built on a love for beautiful food, warm hospitality, and memorable gatherings.",
};

const INQUIRY_URL = "/inquiry";

const values = [
  {
    title: "Quality First",
    body: "We use only premium açaí and the finest, freshest toppings. Every ingredient is chosen with intention, because your guests deserve the real thing.",
  },
  {
    title: "Beauty in Every Detail",
    body: "From the stall setup to the final garnish, every element is considered. We believe food can be as beautiful as it is delicious.",
  },
  {
    title: "Your Event, Your Story",
    body: "We listen deeply to each client. Every NÜMA experience is shaped around what makes your gathering unique — no templates, no shortcuts.",
  },
  {
    title: "Warmth & Care",
    body: "Our team shows up not just to serve food, but to be a positive, gracious presence at your event. Hospitality matters to us.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Our Story
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-6">
            Made with Love,{" "}
            <span className="italic font-normal text-berry">Served with Intention</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-warm-gray leading-relaxed text-lg">
                NÜMA Açaí was born from a simple belief: that the food at a
                special event should feel as special as the occasion itself.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Too often, catering is an afterthought — a checkbox, not an
                experience. We wanted to change that. We wanted to bring
                something beautiful, nourishing, and genuinely delightful to
                the people gathered around you on your most meaningful days.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Açaí was the obvious choice. It&apos;s vibrant, fresh, endlessly
                customizable, and it photographs beautifully. More than that —
                it creates a moment. A NÜMA station naturally draws people in,
                sparks conversation, and becomes one of those little joys guests
                remember long after the event is over.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Every event we do is built from scratch — no rigid packages, no
                one-size-fits-all menus. We sit with each client, understand
                what they&apos;re building, and create a NÜMA experience that feels
                like it was made just for them. Because it was.
              </p>
            </div>

            {/* Founder visual placeholder */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #C9A87C30 0%, #2C4A3E25 50%, #7C3D4E20 100%)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C4A3E' fill-opacity='0.2'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl border-4 border-cream"
                style={{
                  background:
                    "linear-gradient(135deg, #2C4A3E30 0%, #C9A87C30 100%)",
                }}
              />
              <p className="absolute bottom-4 right-4 text-xs text-warm-gray-light italic">
                Founder photo coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
              What Guides Us
            </p>
            <h2 className="font-serif text-4xl font-semibold text-forest">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-cream border border-cream-dark hover:border-tan-light transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-tan mb-5" />
                <h3 className="font-serif text-xl font-semibold text-forest mb-3">
                  {v.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{v.body}</p>
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
            Let&apos;s Create Something Together
          </h2>
          <p className="text-cream/60 leading-relaxed mb-10">
            We&apos;d love to learn about your event and build something beautiful
            around it.
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
