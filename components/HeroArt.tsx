import { Briefcase, TrendingUp } from "lucide-react";

/**
 * Hero visual: soft 3D orange render (Unsplash, free licence; saved locally in
 * public/brand/hero-3d.webp) with a frosted glass panel and two stat cards.
 */
export default function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[520px] lg:max-w-none" aria-hidden="true">
      {/* Warm glow behind */}
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.30),rgba(255,190,150,0.12)_60%,transparent)] blur-2xl" />

      {/* 3D render */}
      <div className="relative ml-auto w-full overflow-hidden rounded-[2rem] shadow-lift sm:w-[90%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/hero-3d.webp"
          alt=""
          width={1200}
          height={1400}
          fetchPriority="high"
          className="aspect-[6/7] w-full object-cover lg:aspect-[11/13]"
        />
        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" />

        {/* Frosted glass panel on the image */}
        <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/50 bg-white/20 p-5 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mark.png" alt="" width={720} height={673} className="h-6 w-auto" />
            </span>
            <div>
              <p className="text-sm font-semibold">Sarastra Labs</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">Ideas into impact</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Software", "Websites", "Marketing", "AI Agents"].map((t) => (
              <span key={t} className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="absolute -left-2 top-10 hidden items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 pr-5 shadow-lift backdrop-blur sm:flex lg:-left-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-white">
          <Briefcase className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span>
          <span className="block font-display text-lg font-semibold leading-none text-ink">50+</span>
          <span className="mt-1 block text-[11px] text-muted">Projects delivered</span>
        </span>
      </div>
      <div className="absolute -right-2 top-[42%] hidden items-center gap-3 rounded-2xl bg-ink p-3 pr-5 text-white shadow-lift sm:flex lg:-right-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-light">
          <TrendingUp className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span>
          <span className="block font-display text-lg font-semibold leading-none">99%</span>
          <span className="mt-1 block text-[11px] text-white/60">Success rate</span>
        </span>
      </div>
    </div>
  );
}
