const pillars = [
  {
    title: "Beautiful Presentation",
    body: "Every bowl is assembled with intention — garnished, layered, and styled to match the aesthetic of your event.",
  },
  {
    title: "Fresh, Quality Ingredients",
    body: "We source premium açaí and the finest toppings to ensure every guest experiences something genuinely delicious.",
  },
  {
    title: "Seamless Setup",
    body: "Our team handles everything — setup, service, and breakdown — so you can focus on enjoying your event.",
  },
  {
    title: "Customized to Your Event",
    body: "From signage to setup style, we tailor the Nüma experience to complement your venue, theme, and vision.",
  },
  {
    title: "Memorable Guest Moments",
    body: "A Nüma station becomes a natural gathering point — a beautiful, interactive experience your guests will talk about.",
  },
  {
    title: "Premium, Elevated Feel",
    body: "This isn't a catering afterthought. Nüma is a statement piece — polished, intentional, and unforgettable.",
  },
];

export default function TheExperience() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(180deg, #EFE5D4 0%, #F1F0EB 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
            What Sets Us Apart
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest leading-tight">
            The Nüma Experience
          </h2>
          <p className="mt-5 text-warm-gray text-lg leading-relaxed">
            Every detail — from the first bowl to the final spoonful — is crafted
            to feel as special as the event itself.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-cream border border-cream-dark hover:border-tan-light hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-0.5 bg-tan mb-6" />
              <h3 className="font-serif text-xl font-semibold text-forest mb-3">
                {pillar.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
