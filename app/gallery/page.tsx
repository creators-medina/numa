import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the NÜMA Açaí experience — bowl presentations, event setups, signage, and guest moments from real events.",
};

const galleryItems = [
  { label: "Bowl Presentation", size: "large", bg: "9R5A0279-2.jpg" },
  { label: "Event Setup", size: "medium", bg: "from-[#2C4A3E]/25 to-[#8FAF97]/25" },
  { label: "Stall Signage", size: "medium", bg: "from-[#7C3D4E]/25 to-[#E2CBA8]/30" },
  { label: "Guest Moment", size: "small", bg: "from-[#E2CBA8]/40 to-[#C9A87C]/30" },
  { label: "Topping Bar", size: "small", bg: "from-[#8FAF97]/25 to-[#2C4A3E]/20" },
  { label: "Wedding Setup", size: "large", bg: "from-[#7C3D4E]/30 to-[#C9A87C]/25" },
  { label: "Bowl Close-Up", size: "medium", bg: "from-[#2C4A3E]/30 to-[#7C3D4E]/20" },
  { label: "Brand Activation", size: "small", bg: "from-[#C9A87C]/30 to-[#8FAF97]/20" },
  { label: "Corporate Event", size: "small", bg: "from-[#8FAF97]/30 to-[#E2CBA8]/30" },
  { label: "Bridal Shower", size: "medium", bg: "from-[#E2CBA8]/35 to-[#7C3D4E]/20" },
  { label: "Detail Shot", size: "small", bg: "from-[#2C4A3E]/20 to-[#C9A87C]/30" },
  { label: "Atmosphere", size: "small", bg: "from-[#7C3D4E]/20 to-[#2C4A3E]/25" },
];

const sizeMap: Record<string, string> = {
  large: "col-span-2 row-span-2 min-h-[280px]",
  medium: "col-span-1 row-span-2 min-h-[200px]",
  small: "col-span-1 row-span-1 min-h-[140px]",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Visual Story
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-5">
            A Feast for the Eyes
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-xl mx-auto">
            Every NÜMA setup is styled as intentionally as the bowls themselves.
            Explore the experience through imagery.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 auto-rows-[160px] gap-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`${sizeMap[item.size]} rounded-2xl bg-gradient-to-br ${item.bg} flex items-end p-4 relative overflow-hidden group cursor-pointer`}
              >
                {/* Subtle texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232C4A3E' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                {/* Hover label */}
                <span className="relative text-xs font-medium text-charcoal/40 group-hover:text-charcoal/70 tracking-wide transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-cream-dark/50 border border-cream-dark text-center">
            <p className="text-sm text-warm-gray">
              <span className="font-medium text-forest">Real photography coming soon.</span>{" "}
              These placeholders represent the types of shots you&apos;ll find here —
              bowl close-ups, stall setups, event atmospheres, and guest moments.
              Follow{" "}
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline underline-offset-2 hover:text-forest-light transition-colors"
              >
                @numa.acai
              </a>{" "}
              on Instagram to see the real thing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
