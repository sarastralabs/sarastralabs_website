"use client";

import Link from "next/link";
import { ShoppingCart, Heart, GraduationCap, Building2, Wallet, Truck, ArrowRight } from "lucide-react";
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
        <div className={`grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
          <div className={`lg:sticky lg:top-32 lg:self-start reveal ${visible ? "is-visible" : ""}`}>
            <p className="eyebrow">Industries</p>
            <h2 className="section-title mt-4">
              Industries we serve.
              <br />
              <span className="text-muted">Deep domain expertise.</span>
            </h2>
            <p className="section-lead">Delivering specialized solutions across diverse sectors with deep domain expertise.</p>
            <div className="mt-8">
              <p className="text-[15px] text-muted">Don&apos;t see your industry? We adapt to any sector.</p>
              <Link href="/#contact" className="btn-primary mt-5">
                Discuss Your Project
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className={`card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7 reveal ${
                    visible ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold text-muted">{industry.projects} Projects</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink">{industry.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
