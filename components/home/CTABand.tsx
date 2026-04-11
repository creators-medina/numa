const INQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNXK88vFLqYU_TMDPOfF6nPZ1ruoseO1c25lojfa3JG-V-Bg/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export default function CTABand() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B302A 0%, #2C4A3E 60%, #3D6355 100%)" }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF7F2' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-6">
          Let&apos;s Make It Happen
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-6">
          Ready to Bring NÜMA{" "}
          <span className="italic font-normal text-tan">to Your Event?</span>
        </h2>
        <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Every event is unique — and so is every NÜMA experience. Reach out and
          let us create something beautiful together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-tan-light transition-all duration-300 tracking-wide shadow-lg"
          >
            Inquire to Book
          </a>
          <a
            href="https://www.instagram.com/numa.acai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-cream/30 text-cream text-sm font-medium rounded-full hover:bg-cream/10 transition-all duration-300 tracking-wide"
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
