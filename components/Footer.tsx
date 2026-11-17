import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "./SocialIcons";

const columns = [
  {
    title: "Services",
    items: [
      { label: "Software Dev", href: "/services" },
      { label: "Custom Software", href: "/services" },
      { label: "AI Agents", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
      { label: "Web Design", href: "/services" },
      { label: "NexGen Projects", href: "/services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Careers", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-block" aria-label="Sarastra Labs home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-on-dark.png" alt="Sarastra Labs — Ideas into Impact" width={1365} height={160} className="h-10 w-auto sm:h-11" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Building Tomorrow&apos;s Technology Today. End-to-end software, AI, and digital solutions for businesses
              and students.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:info@sarastralabs.com" className="inline-flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-orange-light" strokeWidth={1.75} /> info@sarastralabs.com
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <Phone className="h-4 w-4 text-orange-light" strokeWidth={1.75} />
                <a href="tel:+919353622801" className="transition-colors hover:text-white">9353622801</a>
                <span className="text-white/30">/</span>
                <a href="tel:+919741447767" className="transition-colors hover:text-white">9741447767</a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-light" strokeWidth={1.75} /> Mangalore, India
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-orange-light">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:gap-8">
            <p>© 2025 Sarastra Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
              <a href="#" className="transition-colors hover:text-white">Terms</a>
              <a href="#" className="transition-colors hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
