import Link from "next/link";
import Image from "next/image";

const INQUIRY_URL = "/inquiry";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 40%, #E8EDE9 100%)",
        }}
      />

      {/* Decorative botanical accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, #2C4A3E18 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, #7C3D4E12 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-28 pb-20">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-6">
          Premium Açaí Event Catering
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-forest leading-tight mb-6">
          Elevate{" "}
          <span className="italic font-normal text-berry">Every</span>{" "}
          Gathering
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto mb-12">
          Nüma brings a beautifully curated açaí pop-up directly to your event —
          weddings, showers, private parties, brand activations, and beyond.
          Fresh, premium, and designed around your moment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-8 py-4 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-all duration-300 tracking-wide shadow-lg hover:shadow-xl"
          >
            Inquire to Book
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-4 border border-forest/30 text-forest text-sm font-medium rounded-full hover:bg-forest/5 transition-all duration-300 tracking-wide"
          >
            View Gallery
          </Link>
        </div>

        {/* Photo strip */}
        <div className="flex items-end justify-center gap-3 max-w-2xl mx-auto">
          <div className="relative w-[30%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/9R5A0280.jpg"
              alt="Açaí bowl in tropical leaves"
              fill
              sizes="200px"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-[38%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl -translate-y-4">
            <Image
              src="/main.jpg"
              alt="Açaí bowl with fresh fruit"
              fill
              sizes="260px"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-[28%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/9R5A0141.jpg"
              alt="Fresh topping ingredients"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="mt-14 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <div className="w-px h-10 bg-forest/40" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-forest"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
