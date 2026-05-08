"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Brandmark from "./Brandmark";

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-shell/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Brand wordmark */}
          <Link href="/" className="shrink-0 py-1" aria-label="nüma açaí — home">
            <Brandmark variant="dark" size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-aubergine/70 hover:text-coral transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/inquiry"
              className="inline-flex items-center px-6 py-2.5 bg-aubergine text-shell text-[11px] font-medium uppercase rounded-full hover:bg-olive transition-colors tracking-[0.2em]"
            >
              Inquire to Book
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-aubergine"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-shell border-t border-sand`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium uppercase tracking-[0.22em] text-aubergine/80 hover:text-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inquiry"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 bg-aubergine text-shell text-[11px] font-medium uppercase rounded-full hover:bg-olive transition-colors tracking-[0.2em] mt-2"
          >
            Inquire to Book
          </Link>
        </div>
      </div>
    </header>
  );
}
