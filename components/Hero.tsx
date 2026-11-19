import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40 lg:min-h-[100svh] lg:pb-16 lg:pt-32">
      <HeroArt />

      <div className="container-page relative">
        <div className="min-w-0 lg:max-w-[640px]">
          <Link
            href="/#products"
            className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-orange/20 bg-white/80 py-1 pl-1 pr-3.5 text-xs font-semibold text-ink-soft shadow-soft backdrop-blur transition-colors hover:border-orange/50 animate-fade-up sm:text-[13px]"
          >
            <span className="shrink-0 rounded-full bg-orange px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">New</span>
            <span className="truncate sm:hidden">3 products launching soon</span>
            <span className="hidden truncate sm:inline">3 products for small businesses, launching soon</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-orange transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </Link>

          <h1
            className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-ink animate-fade-up sm:text-[3.5rem] lg:text-[4rem]"
            style={{ animationDelay: "80ms" }}
          >
            The technology partner for <span className="text-orange">growing businesses.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted animate-fade-up sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Based in Mangaluru, Sarastra Labs designs websites, builds custom software and AI automation, and runs social media and
            digital marketing for growing businesses. End-to-end, from idea to launch. Affordable. Fast.
            Future-ready.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/contact" className="btn-primary px-7 py-3.5">
              Start a Project
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link href="/services" className="btn-outline px-7 py-3.5">
              Explore Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
