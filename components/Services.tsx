"use client";

import Link from "next/link";
import { useState } from "react";
import { Code2, LayoutDashboard, TrendingUp, Palette, Bot, Rocket, GraduationCap, ArrowRight, Check } from "lucide-react";
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
    name: "Custom Business Software",
    desc: "Software built around how your business runs — billing, inventory, CRM, bookings and dashboards.",
    status: "Live",
    active: true,
    icon: LayoutDashboard,
    subServices: [
      "Billing, Invoicing & POS",
      "Inventory & Stock Management",
      "CRM & Customer Management",
      "Appointment & Booking Systems",
      "ERP & Business Dashboards",
      "HR, Payroll & Attendance"
    ]
  },
  {
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
    num: "07",
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

type Service = (typeof services)[number];

function ServiceDetail({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = service.icon;
  return (
    <div className={compact ? "" : "flex h-full flex-col"}>
      {!compact && (
        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white">
          <div aria-hidden="true" className="orb absolute -right-10 -top-10 h-40 w-40 opacity-90" />
          <div className="relative flex items-start justify-between gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-light backdrop-blur">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </span>
          </div>
          <p className="relative mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-orange-light">
            {service.num} — Service
          </p>
          <h3 className="relative mt-2 font-display text-3xl font-semibold tracking-tight">{service.name}</h3>
          <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-white/70">{service.desc}</p>
          <span
            className={`relative mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
              service.active ? "bg-orange text-white" : "bg-white/10 text-white/70"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${service.active ? "bg-white" : "bg-white/50"}`} />
            {service.status}
          </span>
        </div>
      )}

      <div className={compact ? "pt-1" : "flex flex-1 flex-col p-8"}>
        <p className="text-sm font-semibold text-ink">What we offer</p>
        <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.subServices.map((sub) => (
            <li key={sub} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-pale">
                <Check className="h-3 w-3 text-orange" strokeWidth={3} />
              </span>
              {sub}
            </li>
          ))}
        </ul>
        <div className={`flex flex-wrap items-center gap-4 ${compact ? "mt-6" : "mt-auto pt-8"}`}>
          <Link href="/contact" className="btn-primary">
            {service.active ? "Start a Project" : "Get notified"}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Free consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLElement>(0.05);
  const current = services[active];

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
          <Link href="/contact" className="btn-ghost group shrink-0 self-start whitespace-nowrap md:self-auto">
            Let&apos;s Build Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>

        <div
          className={`mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 reveal ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          {/* Service list (accordion on phones) */}
          <ul className="card divide-y divide-line overflow-hidden p-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === active;
              return (
                <li key={service.num}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => window.matchMedia("(min-width: 1024px)").matches && setActive(index)}
                    aria-expanded={isActive}
                    className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-colors sm:px-5 sm:py-5 ${
                      isActive ? "bg-cream" : "hover:bg-cream/60"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive ? "bg-orange text-white shadow-glow" : "bg-orange-pale text-orange"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="font-display text-lg font-semibold tracking-tight text-ink">{service.name}</span>
                        {!service.active && (
                          <span className="rounded-full bg-cream-deep px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted">
                            Soon
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-muted">{service.desc}</span>
                    </span>
                    <span className={`hidden font-display text-sm font-semibold tabular-nums sm:block ${isActive ? "text-orange" : "text-muted/60"}`}>
                      {service.num}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all ${
                        isActive ? "rotate-90 text-orange lg:rotate-0" : "text-muted lg:opacity-0 lg:group-hover:opacity-100"
                      }`}
                      strokeWidth={2}
                    />
                  </button>

                  {/* Inline details on phones/tablets */}
                  {isActive && (
                    <div className="px-4 pb-6 pt-2 animate-popup-in sm:px-5 lg:hidden">
                      <p className="mb-5 text-[15px] leading-relaxed text-muted">{service.desc}</p>
                      <ServiceDetail service={service} compact />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Detail panel (desktop) */}
          <div className="card hidden overflow-hidden p-2 lg:block">
            <div key={current.num} className="h-full animate-popup-in">
              <ServiceDetail service={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
