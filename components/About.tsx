"use client";

import { Target, Rocket, Lightbulb, Users, Zap, Award, TrendingUp, Sparkles } from "lucide-react";
import { useReveal } from "./useReveal";

const values = [
  { icon: Lightbulb, text: "Knowledge first", desc: "Rooted in Saraswathi — we prioritise learning, clarity, and depth in everything we ship." },
  { icon: Zap, text: "Precision & purpose", desc: "Rooted in Astra — we act with intent. Fast, deliberate, focused on what actually matters." },
  { icon: Award, text: "Affordable access", desc: "Great technology shouldn't be expensive. We price for builders and students, not just corporations." },
  { icon: Sparkles, text: "End-to-end ownership", desc: "We don't hand off half-built things. From idea to deployment, we see every project through." },
  { icon: Users, text: "Student-centred growth", desc: "We invest in the next generation — mentoring, building, and launching with them, not just for them." },
  { icon: TrendingUp, text: "Always evolving", desc: "We stay current so our clients and students don't have to. Adaptive, curious, always moving forward." },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 reveal ${visible ? "is-visible" : ""}`}>
          <div>
            <p className="eyebrow">Brand Story</p>
            <h2 className="section-title mt-4">
              Who we are.
              <br />
              <span className="text-muted">Wisdom with precision.</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:pt-10">
            <p>
              <strong className="font-semibold text-ink">Sarastra Labs</strong> is drawn from{" "}
              <em className="not-italic text-orange">Saraswathi</em> — goddess of knowledge — and{" "}
              <em className="not-italic text-orange">Astra</em> — a weapon of precision. End-to-end software, AI, and
              digital solutions for businesses and students. Affordable. Fast. Future-ready.
            </p>
            <p>
              Sarastra is not just a name — it is a direction. सरस्वती gives us the depth of knowledge; Astra gives us
              the sharpness to act on it. Together, we build with wisdom and precision.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              title: "Technology that works for everyone",
              body: "Deliver smart, affordable, end-to-end tech solutions to businesses and students alike — without gatekeeping knowledge or inflating costs. We build real things, solve real problems, and leave no one behind on the journey.",
              highlight: true,
            },
            {
              icon: Rocket,
              label: "Vision",
              title: "India's innovation engine for the next generation",
              body: "To become the most trusted technology partner for emerging Indian ventures and student builders — the studio that turns raw ideas into polished products and students into confident engineers.",
              highlight: false,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className={`card relative overflow-hidden p-7 sm:p-9 reveal ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${120 + i * 100}ms` }}
              >
                {item.highlight && <div className="absolute inset-x-0 top-0 h-1 bg-orange" />}
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-pale text-orange">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">{item.label}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>

        {/* Core values */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">Core values</h3>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.text}
                  className={`flex gap-4 border-t border-line pt-6 reveal ${visible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${200 + i * 60}ms` }}
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={1.75} />
                  <div>
                    <p className="font-semibold text-ink">{value.text}</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
