import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Projects", value: "50+" },
  { label: "Clients", value: "30+" },
  { label: "Services", value: "6" },
  { label: "Success Rate", value: "99%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
      {/* Small decorative orb for phones/tablets */}
      <div aria-hidden="true" className="orb absolute -right-10 top-24 h-28 w-28 opacity-80 sm:h-36 sm:w-36 lg:hidden" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <p className="eyebrow animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Software · AI · Digital · Education
          </p>

          <h1
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink animate-fade-up sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Websites, software
            {" "}
            <br className="hidden sm:block" />
            &amp; AI agents.
            <br />
            <span className="text-orange">Built for growth.</span>
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
            className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center sm:gap-6"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/#contact" className="btn-primary px-7 py-3.5">
              Start a Project
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link href="/#services" className="btn-ghost group">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>

          <dl
            className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 animate-fade-up sm:grid-cols-4"
            style={{ animationDelay: "320ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{stat.value}</dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Decorative 3D composition */}
        <div aria-hidden="true" className="relative hidden h-[520px] lg:block">
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.35),rgba(255,190,150,0.15)_60%,transparent)] blur-2xl" />
          <div className="orb absolute right-2 top-6 h-28 w-28 animate-float-soft" style={{ animationDelay: "1.5s" }} />
          <div className="orb-glass absolute bottom-16 left-0 h-24 w-24 animate-float-soft" style={{ animationDelay: "3s" }} />
          <div className="orb absolute bottom-6 right-16 h-14 w-14 opacity-90 animate-float-soft" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/mark.png"
            alt=""
            width={720}
            height={673}
            className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_40px_60px_rgba(204,73,0,0.25)]"
          />
          <div className="absolute left-6 top-14 flex items-center gap-3 rounded-2xl border border-white bg-white/75 px-4 py-3 shadow-soft backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-orange" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Ideas into impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
