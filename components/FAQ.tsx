"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { faqs } from "@/lib/faqs";
import { useReveal } from "./useReveal";

/**
 * Frequently asked questions. All answers stay in the HTML (only visually
 * collapsed) so search engines and AI assistants can read them; the same list
 * feeds the FAQPage structured data.
 */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useReveal<HTMLElement>(0.05);

  return (
    <section ref={ref} id="faq" aria-labelledby="faq-title" className="section-pad relative">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className={`lg:sticky lg:top-36 lg:self-start reveal ${visible ? "is-visible" : ""}`}>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="section-title mt-4">
            Questions,
            <br />
            <span className="text-muted">answered.</span>
          </h2>
          <p className="section-lead">
            Everything businesses usually ask before working with us. Can&apos;t find your answer?
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Ask us directly
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div className={`card divide-y divide-line p-2 reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: "120ms" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-4 sm:px-6">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-semibold tracking-tight text-ink transition-colors hover:text-orange sm:text-lg"
                  >
                    {f.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-orange text-white" : "bg-orange-pale text-orange"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
