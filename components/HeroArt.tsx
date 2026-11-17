import { Briefcase, TrendingUp } from "lucide-react";

/**
 * Hero illustration: soft 3D glass / gradient shapes (ring, capsule, spheres)
 * behind a frosted glass panel, drawn entirely in CSS — no photos.
 */
export default function HeroArt() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:h-[540px] lg:max-w-none" aria-hidden="true">
      {/* Warm glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.32),rgba(255,190,150,0.14)_55%,transparent)] blur-2xl" />

      {/* Glossy ring */}
      <div className="absolute right-[2%] top-[2%] h-[62%] w-[62%] animate-float-soft [perspective:900px]">
        <div className="hero-ring h-full w-full" />
      </div>

      {/* Capsule */}
      <div className="absolute bottom-[14%] left-[2%] h-[17%] w-[48%] animate-float-soft" style={{ animationDelay: "1.2s" }}>
        <div className="hero-capsule h-full w-full -rotate-[28deg]" />
      </div>

      {/* Spheres */}
      <div className="orb absolute bottom-[4%] right-[10%] h-[22%] w-[22%] max-h-28 max-w-28 animate-float-soft" style={{ animationDelay: "2.4s" }} />
      <div className="orb absolute left-[8%] top-[6%] h-[11%] w-[11%] max-h-14 max-w-14 opacity-90 animate-float-soft" style={{ animationDelay: "0.6s" }} />
      <div className="orb-glass absolute bottom-[34%] right-[2%] h-[12%] w-[12%] max-h-16 max-w-16" />

      {/* Frosted glass panel */}
      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 sm:w-[64%] -translate-y-1/2 rounded-[1.75rem] border border-white/70 bg-white/30 p-5 shadow-[0_30px_60px_-20px_rgba(204,73,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:p-6">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark.png" alt="" width={720} height={673} className="h-9 w-auto" />
          <div>
            <p className="text-sm font-semibold text-ink">Sarastra Labs</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-dark">Ideas into impact</p>
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-2 w-full rounded-full bg-white/70" />
          <div className="h-2 w-4/5 rounded-full bg-white/60" />
          <div className="h-2 w-3/5 rounded-full bg-white/50" />
        </div>
        <div className="mt-5 flex items-end gap-1.5">
          {[38, 52, 44, 66, 58, 80, 92].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-md bg-gradient-to-t from-orange to-orange-light/70"
              style={{ height: `${h * 0.55}px`, opacity: 0.55 + i * 0.06 }}
            />
          ))}
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="absolute left-0 top-[18%] hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 pr-4 shadow-lift backdrop-blur-md sm:left-[2%] sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-white">
          <Briefcase className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span>
          <span className="block font-display text-lg font-semibold leading-none text-ink">50+</span>
          <span className="mt-1 block text-[11px] text-muted">Projects delivered</span>
        </span>
      </div>
      <div className="absolute bottom-[20%] right-0 hidden items-center gap-3 rounded-2xl bg-ink p-3 pr-4 text-white shadow-lift sm:right-[2%] sm:flex">
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
