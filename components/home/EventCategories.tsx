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
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
            We Cater To
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest">
            For Every Kind of Gathering
          </h2>
          <p className="mt-5 text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            Whether intimate or grand, Nüma is designed to complement the
            beauty of your occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-cream-dark bg-cream hover:bg-forest hover:border-forest transition-all duration-300 cursor-default"
            >
              <span className="text-tan group-hover:text-tan-light text-xs mb-3 transition-colors">
                {cat.icon}
              </span>
              <p className="font-serif text-base font-medium text-forest group-hover:text-cream transition-colors leading-snug">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
