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
            "linear-gradient(165deg, #DDE5EE 0%, #F1F0EB 45%, #EFE5D4 100%)",
        }}
      />

      {/* Decorative dusty-blue bloom */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 15%, #9AB1C855 0%, transparent 55%)",
        }}
      />
      {/* Soft coral whisper */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 85%, #FE5D5B14 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-28 pb-20">
        {/* Eyebrow */}
        <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-7">
          Premium Açaí Event Catering
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-aubergine leading-[1.05] mb-7 tracking-tight">
          Elevate{" "}
          <span className="font-script text-coral text-6xl sm:text-7xl lg:text-8xl">every</span>{" "}
          gathering
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-warm-gray leading-relaxed max-w-xl mx-auto mb-12 font-light">
          A beautifully curated açaí pop-up, brought directly to your event —
          weddings, showers, private parties, brand activations, and beyond.
          Fresh, premium, and designed around your moment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-9 py-4 bg-aubergine text-shell text-[11px] font-medium uppercase rounded-full hover:bg-olive transition-all duration-300 tracking-[0.2em] shadow-lg hover:shadow-xl"
          >
            Inquire to Book
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center px-9 py-4 border border-aubergine/25 text-aubergine text-[11px] font-medium uppercase rounded-full hover:bg-aubergine/5 transition-all duration-300 tracking-[0.2em]"
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
        <div className="mt-14 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-px h-10 bg-sky-dark/50" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-dark"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-shell to-transparent pointer-events-none" />
    </section>
  );
}
