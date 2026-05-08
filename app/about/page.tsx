import Link from "next/link";
import Image from "next/image";
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
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #DDE5EE 0%, #F1F0EB 60%, #EFE5D4 100%)" }}
      >
        <div
          className="absolute -top-1/4 right-0 w-2/3 h-[140%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 30%, #9AB1C840 0%, transparent 60%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-6">
            Our Story
          </p>
          <h1 className="text-5xl lg:text-6xl font-extralight text-aubergine leading-[1.05] mb-6 tracking-tight">
            Made with love,{" "}
            <span className="font-script text-coral text-6xl lg:text-7xl">served with intention</span>
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

            {/* Photo */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/9R5A0251.jpg"
                  alt="Garnishing a NÜMA açaí bowl"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-cream">
                <Image
                  src="/9R5A0184.jpg"
                  alt="Dragon fruit in ceramic bowl"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #EFE5D4 0%, #F1F0EB 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
              What Guides Us
            </p>
            <h2 className="text-4xl font-extralight text-aubergine tracking-tight">
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-shell border border-sand hover:border-sky transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-sky mb-5" />
                <h3 className="text-xl font-light text-aubergine mb-3 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed font-light">{v.body}</p>
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
            Let&apos;s create something{" "}
            <span className="font-script text-coral text-5xl lg:text-6xl">together</span>
          </h2>
          <p className="text-shell/65 leading-relaxed mb-10 font-light">
            We&apos;d love to learn about your event and build something beautiful
            around it.
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
