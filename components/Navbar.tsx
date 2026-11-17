"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, Mail, Phone, MapPin, Code2, TrendingUp, Palette, Bot, Rocket, GraduationCap } from "lucide-react";
import { socialLinks } from "./SocialIcons";

const serviceMenu = [
  { icon: Code2, name: "Software Services", desc: "Web & mobile apps, APIs, SaaS" },
  { icon: Palette, name: "Website Design", desc: "Landing pages, e-commerce, UI/UX" },
  { icon: TrendingUp, name: "Digital Marketing", desc: "SEO, social media, paid ads" },
  { icon: Bot, name: "AI Agents", desc: "Chatbots, workflows, automation" },
  { icon: Rocket, name: "NexGen Projects", desc: "Student & early-career projects" },
  { icon: GraduationCap, name: "Labs Launchpad", desc: "Internships & open source" },
];

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", menu: true },
  { href: "/#products", label: "Products", soon: true },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
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
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden overflow-hidden bg-ink text-white/80 transition-[max-height] duration-300 md:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6">
            <a href="mailto:info@sarastralabs.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5 text-orange-light" strokeWidth={2} />
              info@sarastralabs.com
            </a>
            <a href="tel:+919353622801" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5 text-orange-light" strokeWidth={2} />
              +91 93536 22801
            </a>
            <span className="hidden items-center gap-2 lg:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-orange-light" strokeWidth={2} />
              Mangalore, India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-white/60 lg:inline">Follow us</span>
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="transition-colors hover:text-orange-light">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          isOpen
            ? "border-line/70 bg-cream shadow-soft"
            : scrolled
              ? "border-line/70 bg-cream/90 shadow-soft backdrop-blur-md"
              : "border-line/50 bg-cream/70 backdrop-blur-md"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between md:h-[72px]" aria-label="Main">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Sarastra Labs home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-signature.png" alt="Sarastra Labs" width={615} height={96} className="h-7 w-auto md:h-8" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) =>
              link.menu ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[15px] xl:px-4 font-medium text-ink-soft transition-colors hover:text-orange"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" strokeWidth={2} />
                  </Link>
                  {/* Services dropdown */}
                  <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="card grid grid-cols-2 gap-1 p-3 shadow-lift">
                      {serviceMenu.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link key={s.name} href="/services" className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-cream">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-pale text-orange">
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink">{s.name}</span>
                              <span className="block text-[13px] text-muted">{s.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-between rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-ink transition-colors hover:text-orange"
                      >
                        View all services
                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:text-orange xl:px-4"
                >
                  {link.label}
                  {link.soon && (
                    <span className="rounded-full bg-orange-pale px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-dark">
                      Soon
                    </span>
                  )}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary whitespace-nowrap px-5 py-2.5">
              <span className="xl:hidden">Free Consultation</span>
              <span className="hidden xl:inline">Get a Free Consultation</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 rounded-full p-2 text-ink transition-colors hover:bg-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-y-auto transition-[max-height,opacity] duration-300 lg:hidden ${
            isOpen ? "max-h-[calc(100vh-64px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="container-page flex flex-col gap-1 pb-6 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-white"
              >
                <span className="inline-flex items-center gap-2">
                  {link.label}
                  {link.soon && (
                    <span className="rounded-full bg-orange-pale px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-orange-dark">
                      Soon
                    </span>
                  )}
                </span>
                <ArrowRight className="h-4 w-4 text-muted" strokeWidth={1.75} />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary mt-3 py-3.5 text-base">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-muted">
              <a href="mailto:info@sarastralabs.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange" strokeWidth={1.75} /> info@sarastralabs.com
              </a>
              <a href="tel:+919353622801" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange" strokeWidth={1.75} /> +91 93536 22801
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
