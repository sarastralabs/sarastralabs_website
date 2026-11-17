"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "./useReveal";

const benefits = ["Free Consultation", "24/7 Support", "Money-Back Guarantee"];

export default function CTABanner() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-12 sm:py-16">
      <div className="container-page">
        <div
          className={`relative overflow-hidden rounded-[2rem] border border-line/80 bg-gradient-to-br from-white via-white to-orange-pale px-6 py-12 shadow-soft sm:px-12 sm:py-16 lg:px-16 reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <div aria-hidden="true" className="orb absolute -right-12 -top-12 h-40 w-40 opacity-70 sm:h-52 sm:w-52" />
          <div aria-hidden="true" className="orb-glass absolute bottom-8 right-[38%] hidden h-16 w-16 lg:block" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Let&apos;s work together</p>
              <h2 className="section-title mt-4">
                Ready to transform your vision into reality?
              </h2>
              <p className="section-lead">
                Join 50+ businesses that have already accelerated their growth with our cutting-edge solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <Link href="/#contact" className="btn-primary px-7 py-3.5">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link href="/#services" className="btn-ghost group">
                  View Our Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
              </div>
            </div>

            <div className="relative rounded-3xl border border-line/80 bg-white/90 p-7 shadow-lift backdrop-blur sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-orange" />
              <p className="text-sm font-semibold text-ink">Every engagement includes</p>
              <ul className="mt-5 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-[15px] text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-pale">
                      <Check className="h-3.5 w-3.5 text-orange" strokeWidth={2.5} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-5 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                Trusted by startups to enterprises · 99% client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
