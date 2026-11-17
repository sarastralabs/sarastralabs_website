"use client";

import Link from "next/link";
import { ArrowRight, MessagesSquare, Layers, Wallet, Clock, LifeBuoy, ShieldCheck } from "lucide-react";
import { useReveal } from "./useReveal";

const reasons = [
  { icon: MessagesSquare, title: "Free consultation", desc: "Talk through your idea and requirements with us before you commit to anything." },
  { icon: Layers, title: "End-to-end ownership", desc: "Design, development, launch and marketing under one roof, with one accountable team." },
  { icon: Wallet, title: "Affordable access", desc: "Great technology shouldn't be expensive. We price for growing businesses, not just corporations." },
  { icon: Clock, title: "Fast response", desc: "We typically respond within 24 hours on business days." },
  { icon: LifeBuoy, title: "24/7 support", desc: "Reliable support after launch, so your website, app or campaign keeps running smoothly." },
  { icon: ShieldCheck, title: "Money-back guarantee", desc: "We stand behind our work. Ask us about the guarantee during your consultation." },
];

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className={`lg:sticky lg:top-36 lg:self-start reveal ${visible ? "is-visible" : ""}`}>
          <p className="eyebrow">Why Sarastra Labs</p>
          <h2 className="section-title mt-4">
            Built on knowledge.
            <br />
            <span className="text-muted">Delivered with precision.</span>
          </h2>
          <p className="section-lead">
            Join 50+ businesses that have already accelerated their growth with our cutting-edge solutions.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`card p-6 sm:p-7 reveal ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
