"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useReveal } from "./useReveal";

/** Dark closing call-to-action with the animated Sarastra mascot. */
export default function CTABanner() {
  const { ref, visible } = useReveal<HTMLElement>(0.25);

  return (
    <section ref={ref} className="pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-12">
      <div className="container-page">
        <div className="relative rounded-[2rem] bg-ink text-white">
          {/* Glows (clipped to the card) */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.35),transparent)] blur-2xl" />
            <div className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.28),transparent)] blur-2xl" />
          </div>

          <div className="relative grid items-end gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Text */}
            <div className="order-2 px-6 pb-14 sm:px-12 sm:pb-16 lg:order-1 lg:px-16 lg:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-light">Let&apos;s work together</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl md:text-5xl">
                Ready to transform your vision into reality?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Tell us about your project. We typically respond within 24 hours on business days.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/contact" className="btn-primary px-7 py-3.5 focus-visible:ring-offset-ink">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <a
                  href="tel:+919353622801"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 sm:text-[15px]"
                >
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  +91 93536 22801
                </a>
              </div>
            </div>

            {/* Mascot — pops out above the card */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:self-stretch">
              <div
                className={`mascot-wrap relative -mt-24 w-[200px] sm:-mt-28 sm:w-[240px] lg:absolute lg:bottom-6 lg:right-6 lg:mt-0 lg:w-[310px] xl:right-12 xl:w-[340px] ${
                  visible ? "is-in" : ""
                }`}
              >
                {/* Pulsing halo */}
                <div aria-hidden="true" className="mascot-halo absolute left-1/2 top-[38%] h-[70%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                {/* Orbiting sparks */}
                <span aria-hidden="true" className="mascot-spark absolute left-[6%] top-[22%] h-3 w-3 rounded-full bg-orange-light" />
                <span aria-hidden="true" className="mascot-spark absolute right-[4%] top-[48%] h-2 w-2 rounded-full bg-white/80" style={{ animationDelay: "1.2s" }} />
                <span aria-hidden="true" className="mascot-spark absolute left-[14%] top-[62%] h-2.5 w-2.5 rounded-full bg-orange" style={{ animationDelay: "2.1s" }} />

                {/* Speech bubble */}
                <div className="mascot-bubble absolute -right-16 top-[2%] z-10 whitespace-nowrap rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-lift sm:-right-28 sm:text-sm max-[380px]:-right-6 max-[380px]:-top-8 lg:-left-36 lg:right-auto lg:top-[8%] lg:rounded-bl-2xl lg:rounded-br-md lg:px-4 lg:py-2.5">
                  Let&apos;s build it together!
                </div>

                <div className="mascot-float relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/mascot.webp"
                    alt="Sarastra Labs mascot giving a thumbs up"
                    width={626}
                    height={700}
                    loading="lazy"
                    className="mascot-img relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
                  />
                </div>
                {/* Ground shadow */}
                <div aria-hidden="true" className="mascot-shadow mx-auto -mt-3 h-4 w-1/2 rounded-[50%] bg-black/50 blur-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
