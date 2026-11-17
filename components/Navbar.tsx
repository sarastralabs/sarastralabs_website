"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isOpen
          ? "border-b border-line/70 bg-cream shadow-soft"
          : scrolled
            ? "border-b border-line/70 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Main">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Sarastra Labs home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-signature.png"
            alt="Sarastra Labs"
            width={615}
            height={96}
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/#contact" className="btn-primary px-5 py-2.5">
            Contact
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="-mr-2 rounded-full p-2 text-ink transition-colors hover:bg-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-3 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-white"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 text-muted" strokeWidth={1.75} />
            </a>
          ))}
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-3 py-3.5 text-base">
            Contact Us
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  );
}
