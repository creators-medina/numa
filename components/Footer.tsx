import Link from "next/link";
import Brandmark from "./Brandmark";

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
    <footer
      className="text-shell/80 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1F1018 0%, #361D29 70%, #745A67 100%)" }}
    >
      <div
        className="absolute -top-1/3 -right-1/4 w-[60%] h-[120%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #9AB1C825 0%, transparent 65%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Brandmark variant="light" size="lg" />
            </div>
            <p className="text-sm leading-relaxed text-shell/60 max-w-xs font-light">
              Premium açaí pop-up catering for weddings, celebrations, and
              special gatherings. Every event, beautifully served.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-shell/70 hover:text-coral transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-sky mb-5">Connect</p>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/numa.acai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-shell/70 hover:text-coral transition-colors font-light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                @numa.acai
              </a>
              <a href="mailto:hello@numaacai.com" className="flex items-center gap-3 text-sm text-shell/70 hover:text-coral transition-colors font-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                hello@numaacai.com
              </a>
              <Link
                href="/inquiry"
                className="inline-flex items-center px-6 py-2.5 border border-shell/30 text-shell text-[11px] font-medium uppercase rounded-full hover:bg-shell/10 transition-colors tracking-[0.2em]"
              >
                Inquire to Book
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-shell/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-shell/30 font-light">© {new Date().getFullYear()} nüma açaí. All rights reserved.</p>
          <p className="text-base text-shell/40 font-script">Crafted with care, served with love.</p>
        </div>
      </div>
    </footer>
  );
}
