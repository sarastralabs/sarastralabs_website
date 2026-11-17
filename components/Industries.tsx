"use client";

import Link from "next/link";
import { ShoppingCart, Heart, GraduationCap, Building2, Wallet, Truck, ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "./useReveal";

const industries = [
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "Scalable online stores with seamless payment integration and inventory management.",
    projects: "25+",
  },
  {
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant solutions for patient management and telemedicine platforms.",
    projects: "15+",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Interactive learning platforms and student management systems.",
    projects: "30+",
  },
  {
    name: "Real Estate",
    icon: Building2,
    description: "Property listing platforms with virtual tours and CRM integration.",
    projects: "12+",
  },
  {
    name: "FinTech",
    icon: Wallet,
    description: "Secure payment gateways and financial management applications.",
    projects: "18+",
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Fleet management and real-time tracking solutions for supply chains.",
    projects: "10+",
  },
];

export default function Industries() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal ${visible ? "is-visible" : ""}`}>
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="section-title mt-4">
              Industries we serve.
              <br />
              <span className="text-muted">Deep domain expertise.</span>
            </h2>
            <p className="section-lead">Delivering specialized solutions across diverse sectors with deep domain expertise.</p>
          </div>
          <div className="md:text-right">
            <p className="text-[15px] text-muted">Don&apos;t see your industry? We adapt to any sector.</p>
            <Link href="/contact" className="btn-primary mt-4">
              Discuss Your Project
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-line/80 bg-line/80 shadow-soft sm:grid-cols-2 lg:grid-cols-3 [&>*]:bg-white gap-px">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.name}
                href="/contact"
                className={`group relative flex min-h-[280px] flex-col overflow-hidden p-7 transition-colors duration-500 hover:!bg-ink sm:p-8 reveal ${
                  visible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.45),transparent)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-orange transition-colors duration-500 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-orange-light">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-light"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="relative pt-10">
                  <p className="font-display text-5xl font-semibold tracking-[-0.03em] text-ink transition-colors duration-500 group-hover:text-orange-light">
                    {industry.projects}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-500 group-hover:text-white/50">
                    Projects
                  </p>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-500 group-hover:text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/65">
                    {industry.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
