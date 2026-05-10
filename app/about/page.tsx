import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Nüma Açaí — a boutique event catering brand built on a love for beautiful food, warm hospitality, and memorable gatherings.",
};

const INQUIRY_URL = "/inquiry";

const values = [
  {
    title: "Authentic Flavor",
    body: "Our açaí base is crafted to taste the way açaí is meant to taste — fresh, vibrant, and true to its Brazilian roots. You won't find a better one out there.",
  },
  {
    title: "Quality Ingredients",
    body: "Every bowl is made with premium açaí and the freshest toppings. No shortcuts, no fillers — just real ingredients you can taste.",
  },
  {
    title: "Genuine Connection",
    body: "Born from a love of bringing people together, Nüma is about the moments shared over a beautiful bowl, not just the food itself.",
  },
  {
    title: "Made with Love",
    body: "Every event is treated with the same care and intention as the very first one. We pour heart into every detail.",
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
            From California Roots,{" "}
            <span className="italic font-normal text-berry">Brought to Texas</span>
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
                Nüma Açaí was born from a simple longing — for the rich,
                authentic Brazilian-style açaí our founder grew up loving in
                California.
              </p>
              <p className="text-warm-gray leading-relaxed">
                After moving to Texas, Juli Prieto searched for an açaí bowl
                that felt the way it was supposed to: fresh, full-flavored, and
                genuinely Brazilian. She couldn&apos;t find one. So in 2025, she
                started Nüma to bring that same love and taste to the
                Dallas–Fort Worth community.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Every bowl is made with quality ingredients, and our base is
                something you truly won&apos;t find anywhere else. Açaí, when
                it&apos;s done right, is more than a snack — it&apos;s vibrant,
                nourishing, and a moment of joy.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Today, Nüma brings that experience directly to weddings,
                showers, corporate events, and gatherings across DFW —
                styled beautifully, served warmly, and crafted to give your
                guests a taste of something genuinely special.
              </p>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/9R5A0251.jpg"
                  alt="Garnishing a Nüma açaí bowl"
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

      {/* Founder */}
      <section className="py-20 bg-cream border-t border-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
              Meet the Founder
            </p>
            <h2 className="font-serif text-4xl font-semibold text-forest">
              Juli Prieto
            </h2>
          </div>
          <p className="text-warm-gray leading-relaxed text-center max-w-2xl mx-auto">
            Born in Argentina and inspired by cultures around the world, Juli
            is passionate about languages, connection, and bringing people
            together. She founded Nüma to share her love for fresh, nourishing
            foods and her deep appreciation for açaí. One of her favorite
            things is introducing people to their first truly great açaí bowl
            — and watching them enjoy it.
          </p>
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
