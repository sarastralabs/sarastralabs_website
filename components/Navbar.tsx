"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Briefcase, FileText, Rocket, ArrowRight } from "lucide-react";

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
    <>
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
                className="md:hidden relative p-3 text-white rounded-full transition-all duration-300 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF5C00]/50"
                aria-label="Toggle menu"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-[#FF5C00]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {isOpen ? (
                    <X className="w-6 h-6 transition-all duration-300 group-hover:rotate-90 text-[#FF5C00]" strokeWidth={2.5} />
                  ) : (
                    <Menu className="w-6 h-6 transition-all duration-300 group-hover:scale-110 text-white group-hover:text-[#FF5C00]" strokeWidth={2.5} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Menu - Outside navbar container */}
    <div
      className={`md:hidden fixed left-4 right-4 transition-all duration-500 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
      }`}
      style={{
        top: '100px',
        maxHeight: 'calc(100vh - 120px)',
        zIndex: 9999,
      }}
    >
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/98 via-[#0A0A0A]/95 to-[#0A0A0A]/98 backdrop-blur-3xl rounded-3xl border-2 border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF5C00]/20 via-[#FF7A2B]/20 to-[#FF5C00]/20 opacity-50 blur-xl" />
      
      <div className="relative p-8 flex flex-col gap-4">
        {/* Menu items */}
        {[
          { href: "#about", label: "About", icon: User },
          { href: "#services", label: "Services", icon: Briefcase },
          { href: "#blog", label: "Blog", icon: FileText },
        ].map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              className="group/mobile relative px-6 py-5 text-lg text-white bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-[#FF5C00]/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF5C00]/20"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slide-in-left 0.4s ease-out forwards' : 'none',
              }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/0 via-[#FF5C00]/5 to-[#FF5C00]/0 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <span className="relative flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-[#FF5C00]" strokeWidth={2} />
                  <span className="font-[family-name:var(--font-syne)] font-bold">{link.label}</span>
                </span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover/mobile:opacity-100 group-hover/mobile:translate-x-2 transition-all duration-300 text-[#FF5C00]" strokeWidth={2} />
              </span>
            </a>
          );
        })}
        
        {/* Divider */}
        <div className="relative h-px my-2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5C00]/30 to-transparent blur-sm" />
        </div>
        
        {/* Contact button */}
        <a
          href="#contact"
          className="relative group/cta px-8 py-6 bg-gradient-to-r from-[#FF5C00] via-[#FF6A15] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold text-xl text-center rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-[0_10px_40px_rgba(255,92,0,0.5),0_0_80px_rgba(255,92,0,0.3)] hover:shadow-[0_20px_60px_rgba(255,92,0,0.7),0_0_100px_rgba(255,92,0,0.5)] overflow-hidden"
          onClick={() => setIsOpen(false)}
          style={{
            animationDelay: '300ms',
            animation: isOpen ? 'slide-in-left 0.4s ease-out forwards' : 'none',
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A2B] via-[#FF6A15] to-[#FF5C00] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-1000 skew-x-12" />
          
          <span className="relative flex items-center justify-center gap-3">
            <span className="text-shadow-lg">Contact Us</span>
            <Rocket className="w-6 h-6 inline-block transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 group-hover/cta:rotate-12" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </div>
  </>
  );
}
