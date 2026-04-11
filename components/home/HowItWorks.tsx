import Link from "next/link";
const steps = [
  {
    number: "01",
    title: "Submit Your Inquiry",
    body: "Share a few details about your event — date, location, guest count, and any special requests. We'll take it from there.",
  },
  {
    number: "02",
    title: "We Design Your Experience",
    body: "We work with you to create a custom proposal tailored to your event's scale, style, and needs. No cookie-cutter packages.",
  },
  {
    number: "03",
    title: "NÜMA Comes to You",
    body: "On the day of your event, our team arrives, sets up beautifully, serves every guest with care, and handles everything — start to finish.",
  },
];

const INQUIRY_URL = "/inquiry";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-tan mb-4">
            Simple Process
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-forest">
            How It Works
          </h2>
          <p className="mt-5 text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            Getting NÜMA at your event is effortless. Here&apos;s what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-tan-light/40" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number bubble */}
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-6 shrink-0 relative z-10">
                <span className="font-serif text-cream text-sm font-semibold tracking-wider">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest mb-3">
                {step.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-8 py-4 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-all duration-300 tracking-wide shadow-md hover:shadow-lg"
          >
            Start Your Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
