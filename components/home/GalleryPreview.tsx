import Link from "next/link";

const placeholders = [
  { label: "Bowl Close-Up", bg: "from-[#C9A87C]/30 to-[#2C4A3E]/20", span: "col-span-2 row-span-2" },
  { label: "Stall Setup", bg: "from-[#7C3D4E]/20 to-[#C9A87C]/20", span: "" },
  { label: "Signage Detail", bg: "from-[#2C4A3E]/20 to-[#8FAF97]/20", span: "" },
  { label: "Event Atmosphere", bg: "from-[#E2CBA8]/40 to-[#2C4A3E]/20", span: "" },
  { label: "Guest Moment", bg: "from-[#8FAF97]/20 to-[#7C3D4E]/20", span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest">
              See the Difference
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-light transition-colors tracking-wide shrink-0"
          >
            View Full Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] sm:h-[560px]">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`${item.span} rounded-2xl bg-gradient-to-br ${item.bg} flex items-end p-5 overflow-hidden relative group`}
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C4A3E' fill-opacity='0.08'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              <span className="relative text-xs font-medium text-charcoal/50 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-warm-gray-light italic">
          Real photography coming soon — placeholder tiles shown above
        </p>
      </div>
    </section>
  );
}
