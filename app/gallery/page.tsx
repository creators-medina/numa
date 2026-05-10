import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the NÜMA Açaí experience — bowl presentations, event setups, signage, and guest moments from real events.",
};

const galleryItems = [
  { src: "/9R5A0262-2.jpg",  alt: "Açaí bowl nestled in tropical leaves",            size: "large"  },
  { src: "/9R5A0251.jpg",    alt: "Hand garnishing a fresh açaí bowl",               size: "medium" },
  { src: "/9R5A0141.jpg",    alt: "Premium topping ingredients spread",              size: "medium" },
  { src: "/9R5A0061.jpg",    alt: "Overhead açaí cup with blueberries and banana",   size: "small"  },
  { src: "/9R5A0100-2.jpg",  alt: "Açaí base close-up",                             size: "small"  },
  { src: "/main.jpg",        alt: "Açaí bowl with strawberries and blueberries",     size: "large"  },
  { src: "/9R5A0269.jpg",    alt: "Açaí bowl styled on grass",                      size: "medium" },
  { src: "/9R5A0184.jpg",    alt: "Dragon fruit slices in a ceramic bowl",           size: "small"  },
  { src: "/9R5A0166.jpg",    alt: "Fresh blueberries close-up",                     size: "small"  },
  { src: "/9R5A0280.jpg",    alt: "Açaí bowl with dragon fruit on stone",            size: "medium" },
  { src: "/9R5A0072.jpg",    alt: "Premium toppings in ceramic bowls",               size: "small"  },
  { src: "/9R5A9970.jpg",    alt: "Toppings arranged on a wooden serving board",     size: "small"  },
];

const sizeMap: Record<string, string> = {
  large:  "col-span-2 row-span-2",
  medium: "col-span-1 row-span-2",
  small:  "col-span-1 row-span-1",
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
                className={`${sizeMap[item.size]} relative rounded-2xl overflow-hidden group cursor-pointer`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
