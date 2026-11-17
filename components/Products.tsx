"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Lock, Wallet, Store } from "lucide-react";
import { useReveal } from "./useReveal";

/**
 * Upcoming products. While a product is still under wraps, leave `name` and
 * `desc` empty and the card shows a "launching soon" teaser. Fill them in at
 * launch (and set `href`) and the card switches to the real details.
 */
const products: { name?: string; desc?: string; href?: string }[] = [{}, {}, {}];

export default function Products() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-gradient-to-br from-white via-white to-orange-pale px-6 py-12 shadow-soft sm:px-10 sm:py-14 lg:px-14">
          <div aria-hidden="true" className="orb absolute -right-14 -top-14 h-44 w-44 opacity-80 sm:h-56 sm:w-56" />

          <div className={`relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between reveal ${visible ? "is-visible" : ""}`}>
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                Launching soon
              </p>
              <h2 className="section-title mt-5">
                Products for small businesses.
                <br />
                <span className="text-muted">Affordable by design.</span>
              </h2>
              <p className="section-lead">
                Alongside our services, we&apos;re building three products that solve everyday small-business
                problems, at a price small businesses can afford.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 self-start lg:self-auto">
              Get notified at launch
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {products.map((product, i) => {
              const revealed = Boolean(product.name);
              return (
                <article
                  key={i}
                  className={`card group relative flex flex-col p-7 reveal ${visible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${120 + i * 90}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                      {revealed ? <Sparkles className="h-5 w-5" strokeWidth={1.75} /> : <Lock className="h-5 w-5" strokeWidth={1.75} />}
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-muted">Product 0{i + 1}</span>
                  </div>

                  {revealed ? (
                    <>
                      <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-ink">{product.name}</h3>
                      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{product.desc}</p>
                    </>
                  ) : (
                    <div className="mt-7 flex-1" aria-label="Details coming soon">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">Coming soon</h3>
                      <div className="mt-4 space-y-2.5" aria-hidden="true">
                        <div className="h-2.5 w-full rounded-full bg-cream-deep" />
                        <div className="h-2.5 w-11/12 rounded-full bg-cream-deep" />
                        <div className="h-2.5 w-2/3 rounded-full bg-cream-deep" />
                      </div>
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-pale px-2.5 py-1 text-xs font-semibold text-orange-dark">
                      <Store className="h-3.5 w-3.5" strokeWidth={2} />
                      For small businesses
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-2.5 py-1 text-xs font-semibold text-ink-soft">
                      <Wallet className="h-3.5 w-3.5" strokeWidth={2} />
                      Affordable
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
