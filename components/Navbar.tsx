"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar Container with Enhanced Glass Effect */}
        <div
          className={`relative overflow-hidden rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[#0A0A0A]/60 backdrop-blur-xl"
          }`}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Gradient Border Top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00]/50 to-transparent" />
          
          {/* Ambient Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/5 via-transparent to-[#FF7A2B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo with Icon */}
              <a
                href="#"
                className="group flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300"
              >
                {/* Logo Icon */}
                <div className="relative">
                  <img src="/logo.svg" alt="Sarastra Labs Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                </div>
                
                {/* Logo Text */}
                <span className="font-[family-name:var(--font-syne)] text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight">
                  Sarastra<span className="text-[#FF5C00]">Labs</span>
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 lg:gap-3">
                {/* Navigation Links */}
                <div className="flex items-center gap-1 lg:gap-2 mr-4">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#services", label: "Services" },
                    { href: "#blog", label: "Blog" },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="relative px-4 lg:px-5 py-2 text-sm lg:text-base text-white/70 hover:text-white transition-all duration-300 group/link rounded-full"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Hover Background */}
                      <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      {/* Active Indicator */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] rounded-full group-hover/link:w-3/4 transition-all duration-300" />
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="group/cta relative px-6 lg:px-8 py-2.5 lg:py-3 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-semibold text-sm lg:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF5C00]/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact
                    <span className="inline-block transition-transform group-hover/cta:translate-x-1">→</span>
                  </span>
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A2B] to-[#FF5C00] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative p-2 text-white hover:bg-white/10 rounded-full transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  {isOpen ? (
                    <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" strokeWidth={2} />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" strokeWidth={2} />
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden pb-4 animate-slide-up">
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-col gap-2">
                    {[
                      { href: "#about", label: "About" },
                      { href: "#services", label: "Services" },
                      { href: "#blog", label: "Blog" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group/mobile px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center justify-between">
                          {link.label}
                          <span className="opacity-0 group-hover/mobile:opacity-100 transition-opacity">→</span>
                        </span>
                      </a>
                    ))}
                    <a
                      href="#contact"
                      className="mt-2 px-6 py-3 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-semibold text-sm text-center rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FF5C00]/30"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
