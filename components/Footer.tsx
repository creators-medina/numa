import Link from "next/link";
import Image from "next/image";

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
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="NÜMA Açaí" width={48} height={27} className="h-10 w-auto brightness-0 invert opacity-80" />
              <p className="font-serif text-xl font-semibold tracking-widest text-cream uppercase">
                NÜMA Açaí
              </p>
            </div>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Premium açaí pop-up catering for weddings, celebrations, and
              special gatherings. Every event, beautifully served.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cream/40 mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cream/40 mb-5">Connect</p>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-cream transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                @numa.acai
              </a>
              <a href="mailto:hello@numaacai.com" className="flex items-center gap-3 text-sm text-cream/70 hover:text-cream transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                hello@numaacai.com
              </a>
              <Link
                href="/inquiry"
                className="inline-flex items-center px-5 py-2.5 border border-cream/30 text-cream text-sm font-medium rounded-full hover:bg-cream/10 transition-colors tracking-wide"
              >
                Inquire to Book
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">© {new Date().getFullYear()} NÜMA Açaí. All rights reserved.</p>
          <p className="text-xs text-cream/30 italic font-serif">Crafted with care, served with love.</p>
        </div>
      </div>
    </footer>
  );
}
