"use client";

import Link from "next/link";
import { ArrowRight, MessagesSquare, Layers, Wallet, Clock, LifeBuoy, ShieldCheck, Check } from "lucide-react";
import { useReveal } from "./useReveal";

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLElement>();
  const r = (i: number) => ({
    className: `reveal ${visible ? "is-visible" : ""}`,
    style: { transitionDelay: `${i * 70}ms` },
  });

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`max-w-2xl reveal ${visible ? "is-visible" : ""}`}>
          <p className="eyebrow">Why Sarastra Labs</p>
          <h2 className="section-title mt-4">
            Built on knowledge.
            <br />
            <span className="text-muted">Delivered with precision.</span>
          </h2>
          <p className="section-lead">
            Join 50+ businesses that have already accelerated their growth with our cutting-edge solutions.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Free consultation — hero tile */}
          <div
            {...r(0)}
            className={`${r(0).className} relative flex flex-col overflow-hidden rounded-[2rem] bg-orange p-8 text-white shadow-glow md:col-span-6 lg:col-span-5 lg:row-span-2 sm:p-10`}
          >
            <div aria-hidden="true" className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div aria-hidden="true" className="absolute -right-6 top-8 h-24 w-24 rounded-full border border-white/25" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <MessagesSquare className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="relative mt-8 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Free consultation
            </h3>
            <p className="relative mt-3 max-w-sm text-base leading-relaxed text-white/85">
              Talk through your idea and requirements with us before you commit to anything.
            </p>
            <ul className="relative mt-6 space-y-2.5 text-[15px] text-white/90">
              {["Understand your goals", "Recommend the right solution", "Clear scope, timeline and cost"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="relative mt-10 inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-dark transition-transform hover:-translate-y-0.5 lg:mt-auto"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Fast response — big number */}
          <div {...r(1)} className={`${r(1).className} card flex flex-col p-7 md:col-span-3 lg:col-span-4`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Fast response</span>
              <Clock className="h-5 w-5 text-orange" strokeWidth={1.75} />
            </div>
            <p className="mt-6 font-display text-6xl font-semibold tracking-[-0.04em] text-ink">
              24<span className="text-orange">h</span>
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">We typically respond within 24 hours on business days.</p>
          </div>

          {/* 24/7 support — dark */}
          <div {...r(2)} className={`${r(2).className} relative flex flex-col overflow-hidden rounded-3xl bg-ink p-7 text-white md:col-span-3 lg:col-span-3`}>
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.5),transparent)]" />
            <div className="relative flex items-center justify-between">
              <span className="text-sm font-semibold">Support</span>
              <LifeBuoy className="h-5 w-5 text-orange-light" strokeWidth={1.75} />
            </div>
            <p className="relative mt-6 font-display text-6xl font-semibold tracking-[-0.04em]">24/7</p>
            <p className="relative mt-2 text-[15px] leading-relaxed text-white/65">
              Reliable support after launch, so everything keeps running smoothly.
            </p>
          </div>

          {/* End-to-end ownership — wide with flow */}
          <div {...r(3)} className={`${r(3).className} card p-7 md:col-span-6 lg:col-span-7`}>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                <Layers className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">End-to-end ownership</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                  Design, development, launch and marketing under one roof, with one accountable team.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {["Design", "Develop", "Launch", "Market", "Support"].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-sm font-medium text-ink-soft">{step}</span>
                  {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-orange/70" strokeWidth={2} />}
                </span>
              ))}
            </div>
          </div>

          {/* Affordable access */}
          <div {...r(4)} className={`${r(4).className} card flex flex-col p-7 md:col-span-3 lg:col-span-6`}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                <Wallet className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">Affordable access</h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Great technology shouldn&apos;t be expensive. We price for growing businesses, not just corporations.
            </p>
          </div>

          {/* Money-back guarantee */}
          <div
            {...r(5)}
            className={`${r(5).className} flex flex-col rounded-3xl border border-orange/25 bg-orange-pale p-7 md:col-span-3 lg:col-span-6`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-orange shadow-soft">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">Money-back guarantee</h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We stand behind our work. Ask us about the guarantee during your consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
