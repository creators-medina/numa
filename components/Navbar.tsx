"use client";

import { useState, useEffect } from "react";
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
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-widest text-forest hover:text-forest-light transition-colors uppercase"
          >
            NÜMA Açaí
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-forest transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-colors tracking-wide"
            >
              Inquire to Book
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-cream border-t border-cream-dark`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-charcoal/80 hover:text-forest transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-colors tracking-wide mt-2"
          >
            Inquire to Book
          </a>
        </div>
      </div>
    </header>
  );
}
