import Link from "next/link";

const INQUIRY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScNXK88vFLqYU_TMDPOfF6nPZ1ruoseO1c25lojfa3JG-V-Bg/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Inquiry", href: "/inquiry" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-semibold tracking-widest text-cream uppercase mb-3">
              NÜMA Açaí
            </p>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Premium açaí pop-up catering for weddings, celebrations, and
              special gatherings. Every event, beautifully served.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cream/40 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cream/40 mb-5">
              Connect
            </p>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @numa.acai
              </a>
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-cream/30 text-cream text-sm font-medium rounded-full hover:bg-cream/10 transition-colors tracking-wide"
              >
                Inquire to Book
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} NÜMA Açaí. All rights reserved.
          </p>
          <p className="text-xs text-cream/30 italic font-serif">
            Crafted with care, served with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
