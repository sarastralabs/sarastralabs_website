"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useReveal } from "./useReveal";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We learn about your business, goals and customers, then agree on scope, timeline and budget.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Wireframes, visual design and a clear plan you can review before any code is written.",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Development in short iterations with regular demos, so you always know where things stand.",
  },
  {
    icon: Rocket,
    title: "Launch & grow",
    desc: "Deployment, handover and ongoing support, marketing and improvements after go-live.",
  },
];

export default function Process() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`max-w-2xl reveal ${visible ? "is-visible" : ""}`}>
          <p className="eyebrow">How we work</p>
          <h2 className="section-title mt-4">
            A clear process,
            <br />
            <span className="text-muted">from idea to impact.</span>
          </h2>
          <p className="section-lead">
            We don&apos;t hand off half-built things. From idea to deployment, we see every project through.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent lg:block" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`card relative p-7 reveal ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-white shadow-glow">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-4xl font-semibold text-line">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
