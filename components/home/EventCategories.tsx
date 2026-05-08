const categories = [
  { label: "Weddings", icon: "✦" },
  { label: "Bridal Showers", icon: "✦" },
  { label: "Baby Showers", icon: "✦" },
  { label: "Private Parties", icon: "✦" },
  { label: "Corporate Events", icon: "✦" },
  { label: "Wellness Gatherings", icon: "✦" },
  { label: "Community Pop-Ups", icon: "✦" },
  { label: "Brand Activations", icon: "✦" },
];

export default function EventCategories() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
            We Cater To
          </p>
          <h2 className="text-4xl lg:text-5xl font-extralight text-aubergine tracking-tight leading-tight">
            For every kind of{" "}
            <span className="font-script text-coral text-5xl lg:text-6xl">gathering</span>
          </h2>
          <p className="mt-6 text-warm-gray text-base max-w-xl mx-auto leading-relaxed font-light">
            Whether intimate or grand, nüma is designed to complement the
            beauty of your occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-sand bg-shell hover:bg-aubergine hover:border-aubergine transition-all duration-300 cursor-default"
            >
              <span className="text-coral group-hover:text-coral text-xs mb-3 transition-colors">
                {cat.icon}
              </span>
              <p className="text-sm font-light text-aubergine group-hover:text-shell transition-colors leading-snug tracking-tight">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
