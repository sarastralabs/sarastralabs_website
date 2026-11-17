import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/** Dark closing call-to-action shown above the footer. */
export default function CTABanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div aria-hidden="true" className="orb absolute -right-20 -top-20 h-36 w-36 opacity-60 sm:h-48 sm:w-48 lg:-right-16 lg:-top-16 lg:h-72 lg:w-72 lg:opacity-90" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.35),transparent)] blur-2xl" />

          <div className="relative max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}
