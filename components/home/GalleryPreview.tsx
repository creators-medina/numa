import Link from "next/link";
import Image from "next/image";

const photos = [
  { src: "/9R5A0262-2.jpg", alt: "Açaí bowl nestled in tropical leaves",   span: "col-span-2 row-span-2" },
  { src: "/9R5A0251.jpg",   alt: "Hand garnishing a fresh açaí bowl",       span: "" },
  { src: "/9R5A0280.jpg",   alt: "Açaí bowl with dragon fruit on stone",    span: "" },
  { src: "/main.jpg",       alt: "Açaí bowl with strawberries",             span: "" },
  { src: "/9R5A0141.jpg",   alt: "Fresh premium toppings spread",           span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky-dark mb-4">
              Gallery
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-aubergine tracking-tight leading-tight">
              See the{" "}
              <span className="font-script text-coral text-5xl lg:text-6xl">difference</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase text-aubergine hover:text-coral transition-colors tracking-[0.2em] shrink-0"
          >
            View Full Gallery
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] sm:h-[560px]">
          {photos.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
