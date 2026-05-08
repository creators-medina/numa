import Link from "next/link";
const INQUIRY_URL = "/inquiry";

export default function CTABand() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1F1018 0%, #361D29 55%, #745A67 100%)" }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F1F0EB' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Dusty blue glow */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[60%] h-[120%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #9AB1C840 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky mb-6">
          Let&apos;s Make It Happen
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-shell leading-[1.05] mb-7 tracking-tight">
          Ready to bring nüma{" "}
          <span className="font-script text-coral text-5xl sm:text-6xl lg:text-7xl">to your event?</span>
        </h2>
        <p className="text-shell/65 text-base leading-relaxed max-w-xl mx-auto mb-12 font-light">
          Every event is unique — and so is every nüma experience. Reach out and
          let&apos;s create something beautiful together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-9 py-4 bg-shell text-aubergine text-[11px] font-medium uppercase rounded-full hover:bg-sky-light transition-all duration-300 tracking-[0.2em] shadow-lg"
          >
            Inquire to Book
          </Link>
          <a
            href="https://www.instagram.com/numa.acai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 border border-shell/30 text-shell text-[11px] font-medium uppercase rounded-full hover:bg-shell/10 transition-all duration-300 tracking-[0.2em]"
          >
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
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
