import Link from "next/link";
import { ArrowRight, Check, Briefcase, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 md:pt-44 lg:pb-24 lg:pt-48">
      <div aria-hidden="true" className="orb absolute -right-10 top-24 h-28 w-28 opacity-80 sm:h-36 sm:w-36 lg:hidden" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="min-w-0">
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
            Sarastra Labs designs websites, builds custom software and AI automation, and runs social media and
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

          <ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {["Free consultation", "End-to-end delivery", "24/7 support"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-pale">
                  <Check className="h-3 w-3 text-orange" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Team photo collage */}
        <div className="relative mx-auto w-full max-w-md pb-10 sm:max-w-lg lg:max-w-none lg:pb-0">
          <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.28),rgba(255,190,150,0.10)_60%,transparent)] blur-2xl" />

          <div className="relative ml-auto w-[88%] overflow-hidden rounded-[2rem] shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1100&h=1300&fit=crop&q=80"
              alt="A team planning a client project"
              width={1100}
              height={1300}
              className="aspect-[11/13] w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          {/* Inset photo */}
          <div className="absolute bottom-0 left-0 w-[46%] overflow-hidden rounded-3xl border-[6px] border-cream shadow-lift lg:-bottom-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=460&fit=crop&q=80"
              alt="Developers building software"
              width={600}
              height={460}
              className="aspect-[30/23] w-full object-cover"
            />
          </div>

          {/* Projects stat */}
          <div className="absolute left-0 top-8 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3.5 pr-5 shadow-lift backdrop-blur sm:top-12">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange text-white">
              <Briefcase className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none text-ink">50+</span>
              <span className="mt-1 block text-xs text-muted">Projects delivered</span>
            </span>
          </div>

          {/* Success stat */}
          <div className="absolute bottom-24 right-4 rounded-2xl bg-ink p-4 text-white shadow-lift sm:bottom-28 sm:right-6 sm:p-5">
            <p className="font-display text-3xl font-semibold leading-none">
              99<span className="text-orange-light">%</span>
            </p>
            <p className="mt-1.5 text-xs text-white/65">Client success rate</p>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/80">
              <Users className="h-3.5 w-3.5 text-orange-light" strokeWidth={2} />
              30+ clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
