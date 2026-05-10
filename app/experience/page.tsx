import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "From intimate bridal showers to large corporate gatherings, NÜMA creates a custom açaí pop-up experience tailored to your event.",
};

const INQUIRY_URL = "/inquiry";

const eventTypes = [
  {
    title: "Weddings",
    description:
      "Your wedding day deserves every detail to feel exceptional. NÜMA sets up an elegant açaí station that becomes a beautiful, organic gathering point for your guests — styled to complement your venue and aesthetic. Imagine a gorgeously dressed stall, fresh bowls assembled to order, and a moment of genuine delight woven into your reception.",
    note: "Custom quoted based on guest count, venue, and service duration.",
  },
  {
    title: "Bridal & Baby Showers",
    description:
      "Intimate, beautiful, and utterly memorable — a NÜMA station elevates any shower into something guests talk about long after. We design the setup to match your color palette and theme, creating a centerpiece experience that photographs beautifully and tastes even better.",
    note: "Custom quoted based on guest count, location, and duration.",
  },
  {
    title: "Private Celebrations",
    description:
      "Birthdays, anniversaries, milestone dinners — whatever you're marking, NÜMA brings a refined, fresh energy that sets your gathering apart. Our team handles everything so you can be fully present with the people who matter.",
    note: "Custom quoted based on the scale and style of your event.",
  },
  {
    title: "Corporate Events",
    description:
      "A NÜMA açaí bar is a statement. For team offsites, launch events, client experiences, and wellness days, we deliver a polished, premium food experience that leaves a lasting impression. Professional, seamless, and elevated.",
    note: "Custom quoted based on headcount, venue, and service needs.",
  },
  {
    title: "Wellness & Community Events",
    description:
      "Retreats, yoga events, wellness fairs, and community gatherings — açaí is the perfect fit. Nourishing, fresh, and vibrant, NÜMA brings a station that aligns naturally with a wellness-oriented audience and aesthetic.",
    note: "Custom quoted based on event format and expected attendance.",
  },
  {
    title: "Brand Activations",
    description:
      "Looking for a food experience that becomes content? NÜMA pop-ups are visually stunning by design — your guests will photograph everything. Whether it's a product launch, influencer event, or brand moment, we make it feel premium and on-brand.",
    note: "Custom quoted based on brand requirements and event scope.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative"
        style={{ background: "linear-gradient(160deg, #F0EAE0 0%, #FAF7F2 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-5">
            Tailored to You
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-6">
            The NÜMA Experience
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
            We don&apos;t believe in rigid menus or one-size-fits-all packages.
            Every NÜMA event is designed from the ground up — tailored to your
            gathering, your guests, and your vision.
          </p>
        </div>
      </section>

      {/* Event types */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="space-y-16">
            {eventTypes.map((event, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-16 border-b border-cream-dark last:border-0 last:pb-0"
              >
                <div className="md:col-span-2">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-tan mb-3">
                    0{i + 1}
                  </p>
                  <h2 className="font-serif text-3xl font-semibold text-forest">
                    {event.title}
                  </h2>
                </div>
                <div className="md:col-span-3">
                  <p className="text-warm-gray leading-relaxed mb-5">
                    {event.description}
                  </p>
                  <p className="text-sm text-tan font-medium italic">
                    {event.note}
                  </p>
                </div>
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
            Not Sure Which Fits Your Event?
          </h2>
          <p className="text-cream/60 leading-relaxed mb-10">
            Every inquiry starts a conversation. Tell us about your gathering
            and we&apos;ll build something just right.
          </p>
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-8 py-4 bg-cream text-forest text-sm font-semibold rounded-full hover:bg-tan-light transition-all duration-300 tracking-wide"
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
