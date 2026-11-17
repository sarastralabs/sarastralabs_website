"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Code2, TrendingUp, Palette, Bot, Rocket, GraduationCap, ArrowRight, Check, X } from "lucide-react";
import { useReveal } from "./useReveal";

const services = [
  {
    num: "01",
    name: "Software Services",
    desc: "Custom web & mobile apps, APIs, SaaS products, and end-to-end development.",
    status: "Live",
    active: true,
    icon: Code2,
    subServices: [
      "Web Applications (React, Next.js, Vue)",
      "Mobile Apps (React Native, Flutter)",
      "Backend APIs (Node.js, Python, FastAPI)",
      "SaaS Product Development",
      "Custom Software Solutions",
      "Legacy System Modernization"
    ]
  },
  {
    num: "02",
    name: "Digital Marketing",
    desc: "SEO, social, paid ads, brand strategy — data-driven growth for every business.",
    status: "Live",
    active: true,
    icon: TrendingUp,
    subServices: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Google Ads & PPC Campaigns",
      "Content Marketing Strategy",
      "Email Marketing Automation",
      "Analytics & Performance Tracking"
    ]
  },
  {
    num: "03",
    name: "Website Design",
    desc: "High-converting landing pages, portfolio sites, and e-commerce storefronts.",
    status: "Live",
    active: true,
    icon: Palette,
    subServices: [
      "Landing Page Design",
      "Portfolio Websites",
      "E-commerce Stores",
      "Corporate Websites",
      "UI/UX Design",
      "Responsive Web Design"
    ]
  },
  {
    num: "04",
    name: "AI Agents",
    desc: "Custom AI automation — chatbots, workflows, and intelligent systems for your business.",
    status: "Live",
    active: true,
    icon: Bot,
    subServices: [
      "Custom AI Chatbots",
      "RAG Pipelines & Knowledge Bases",
      "Workflow Automation",
      "AI-Powered Analytics",
      "LangChain Integration",
      "OpenAI & LLM Solutions"
    ]
  },
  {
    num: "05",
    name: "NexGen Projects",
    desc: "Industry-grade student & early-career projects — real problems, real solutions, real portfolio.",
    status: "Live",
    active: true,
    icon: Rocket,
    subServices: [
      "Final Year Projects",
      "Capstone Projects",
      "Portfolio Development",
      "Project Mentorship",
      "Documentation Support",
      "Live Deployment Assistance"
    ]
  },
  {
    num: "06",
    name: "Labs Launchpad",
    desc: "Internships & open-source programs — the bridge from classroom to the real tech world.",
    status: "Coming Soon",
    active: false,
    icon: GraduationCap,
    subServices: [
      "Internship Programs",
      "Open Source Contributions",
      "Tech Workshops",
      "Career Guidance",
      "Industry Mentorship",
      "Skill Development"
    ]
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLElement>(0.05);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const selected = selectedIndex !== null ? services[selectedIndex] : null;

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal ${visible ? "is-visible" : ""}`}>
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-4">
              What we build.
              <br />
              <span className="text-muted">Real results, end to end.</span>
            </h2>
            <p className="section-lead">
              From concept to deployment, we deliver cutting-edge solutions that drive real results.
            </p>
          </div>
          <Link href="/contact" className="btn-ghost group self-start md:self-auto">
            Let&apos;s Build Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                role="button"
                tabIndex={0}
                key={service.num}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIndex(index);
                  }
                }}
                className={`card group relative flex cursor-pointer flex-col p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange reveal ${
                  visible ? "is-visible" : ""
                } ${service.active ? "" : "bg-white/60"}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      service.active ? "bg-orange-pale text-orange" : "bg-cream-deep text-muted"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium tabular-nums text-muted/70">{service.num}</span>
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-ink">{service.name}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{service.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      service.active ? "bg-orange-pale text-orange-dark" : "bg-cream-deep text-muted"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${service.active ? "bg-orange" : "bg-muted/60"}`} />
                    {service.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-orange">
                    Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="card relative max-h-[90vh] w-full max-w-[540px] overflow-y-auto p-7 shadow-lift animate-popup-in sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-orange" />
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-cream-deep hover:text-ink"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <div className="flex items-start gap-4 pr-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                <selected.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">{selected.num} — Service</p>
                <h4 id="service-modal-title" className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
                  {selected.name}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{selected.desc}</p>
              </div>
            </div>

            <p className="mt-7 text-sm font-semibold text-ink">What we offer</p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {selected.subServices.map((sub) => (
                <li key={sub} className="flex items-start gap-2.5 rounded-xl bg-cream px-3 py-2.5 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={2.25} />
                  {sub}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${selected.active ? "bg-orange" : "bg-muted/60"}`} />
                {selected.status}
              </span>
              <Link href="/contact" onClick={() => setSelectedIndex(null)} className="btn-primary">
                Start a Project
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
