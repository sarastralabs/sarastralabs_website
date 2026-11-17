import Link from "next/link";
import { ArrowRight, Check, Clock, Code2, Palette, TrendingUp, Bot, MapPin } from "lucide-react";

const deliverables = [
  { icon: Code2, name: "Software Services", desc: "Web & mobile apps, APIs, SaaS" },
  { icon: Palette, name: "Website Design", desc: "Landing pages & e-commerce" },
  { icon: TrendingUp, name: "Digital Marketing", desc: "SEO, social media, paid ads" },
  { icon: Bot, name: "AI Agents", desc: "Chatbots & workflow automation" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 md:pt-44 lg:pb-24 lg:pt-48">
      <div aria-hidden="true" className="orb absolute -right-10 top-24 h-28 w-28 opacity-80 sm:h-36 sm:w-36 lg:hidden" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-orange-dark shadow-soft backdrop-blur animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Software · AI · Digital Marketing · Education
          </p>

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

        {/* Company capability panel */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.30),rgba(255,190,150,0.12)_60%,transparent)] blur-2xl" />
          <div className="orb absolute -right-6 -top-8 hidden h-24 w-24 animate-float-soft lg:block" style={{ animationDelay: "1.5s" }} />
          <div className="orb-glass absolute -bottom-8 -left-8 hidden h-20 w-20 animate-float-soft lg:block" style={{ animationDelay: "3s" }} />

          <div className="relative rounded-[1.75rem] border border-white bg-white/85 p-5 shadow-lift backdrop-blur-md sm:p-6 sm:pb-10">
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/mark.png" alt="" width={720} height={673} className="h-10 w-auto" />
                <div>
                  <p className="text-sm font-semibold text-ink">Sarastra Labs</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">Ideas into impact</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-pale px-2.5 py-1 text-[11px] font-semibold text-orange-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Accepting projects
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">What we deliver</p>
            <ul className="mt-3 space-y-2">
              {deliverables.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.name} className="flex items-center gap-3 rounded-2xl border border-line/70 bg-cream/60 px-3.5 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-orange shadow-soft">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink">{d.name}</span>
                      <span className="block truncate text-xs text-muted">{d.desc}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-orange-dark">Live</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-ink p-4 text-white">
                <p className="font-display text-2xl font-semibold">50+</p>
                <p className="mt-0.5 text-xs text-white/60">Projects delivered</p>
              </div>
              <div className="rounded-2xl bg-orange p-4 text-white">
                <p className="font-display text-2xl font-semibold">99%</p>
                <p className="mt-0.5 text-xs text-white/80">Success rate</p>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 whitespace-nowrap rounded-full border border-white bg-white px-5 py-3 shadow-lift sm:flex">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink">
              <Clock className="h-4 w-4 text-orange" strokeWidth={2} />
              Reply within 24 hours
            </span>
            <span className="h-4 w-px bg-line" />
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink">
              <MapPin className="h-4 w-4 text-orange" strokeWidth={2} />
              Mangalore, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
