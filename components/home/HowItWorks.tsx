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
    <section className="py-24 bg-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
            Simple Process
          </p>
          <h2 className="text-4xl lg:text-5xl font-extralight text-aubergine tracking-tight leading-tight">
            How it{" "}
            <span className="font-script text-coral text-5xl lg:text-6xl">works</span>
          </h2>
          <p className="mt-6 text-warm-gray text-base max-w-xl mx-auto leading-relaxed font-light">
            Getting nüma at your event is effortless. Here&apos;s what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-sky/40" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number bubble */}
              <div className="w-16 h-16 rounded-full bg-aubergine flex items-center justify-center mb-6 shrink-0 relative z-10 ring-4 ring-sky/15">
                <span className="text-shell text-xs font-medium tracking-[0.2em]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-light text-aubergine mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed max-w-xs font-light">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href={INQUIRY_URL}
            className="inline-flex items-center px-9 py-4 bg-aubergine text-shell text-[11px] font-medium uppercase rounded-full hover:bg-olive transition-all duration-300 tracking-[0.2em] shadow-md hover:shadow-lg"
          >
            Start Your Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
