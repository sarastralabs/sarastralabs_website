"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Rocket, Lightbulb, Users, Zap, Award, TrendingUp } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#0A0A0A] to-[#111111] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF5C00]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF7A2B]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-3 sm:mb-4">
            01 — Brand Story
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 tracking-tight">
            Who We <span className="text-[#FF5C00]">Are</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Story & Core Values */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-4 sm:mb-6 group-hover:text-white transition-colors">
                <strong className="text-white font-[family-name:var(--font-syne)] text-xl sm:text-2xl block mb-3 sm:mb-4 text-[#FF5C00]">
                  Sarastra Labs
                </strong>
                Drawn from <em className="text-[#FF7A2B]">Saraswathi</em> — goddess of knowledge — and <em className="text-[#FF7A2B]">Astra</em> — a weapon of precision. End-to-end software, AI, and digital solutions for businesses and students. Affordable. Fast. Future-ready.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                Sarastra is not just a name — it is a direction. सरस्वती gives us the depth of knowledge; Astra gives us the sharpness to act on it. Together, we build with wisdom and precision.
              </p>
            </div>

            {/* Core Values Card */}
            <div className="glass-effect p-6 sm:p-8 rounded-2xl overflow-hidden">
              <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF5C00]" strokeWidth={1.5} />
                Core Values
              </h3>
              <div className="relative h-[280px] overflow-hidden scroll-fade-top scroll-fade-bottom">
                <div className="flex flex-col gap-3 sm:gap-4 animate-scroll-up hover:pause-animation">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex flex-col gap-3 sm:gap-4">
                      {[
                        { icon: Lightbulb, text: "Knowledge first", desc: "Rooted in Saraswathi — we prioritise learning, clarity, and depth in everything we ship." },
                        { icon: Zap, text: "Precision & purpose", desc: "Rooted in Astra — we act with intent. Fast, deliberate, focused on what actually matters." },
                        { icon: Award, text: "Affordable access", desc: "Great technology shouldn't be expensive. We price for builders and students, not just corporations." },
                        { icon: Award, text: "End-to-end ownership", desc: "We don't hand off half-built things. From idea to deployment, we see every project through." },
                        { icon: Users, text: "Student-centred growth", desc: "We invest in the next generation — mentoring, building, and launching with them, not just for them." },
                        { icon: TrendingUp, text: "Always evolving", desc: "We stay current so our clients and students don't have to. Adaptive, curious, always moving forward." },
                      ].map((value, i) => {
                        const IconComponent = value.icon;
                        return (
                          <div
                            key={i}
                            className="group p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default border border-white/10 hover:border-[#FF5C00]/30 flex-shrink-0"
                          >
                            <div className="flex items-start gap-3 sm:gap-4">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5C00] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                              <div>
                                <span className="text-sm sm:text-base font-semibold text-white block mb-1">{value.text}</span>
                                <span className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">{value.desc}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Mission Card */}
            <div className="group relative glass-effect p-6 sm:p-8 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF5C00]" strokeWidth={1.5} />
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#FF5C00]">
                    Mission
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-[family-name:var(--font-syne)] font-bold text-white mb-3">
                  Technology that works for everyone
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Deliver smart, affordable, end-to-end tech solutions to businesses and students alike — without gatekeeping knowledge or inflating costs. We build real things, solve real problems, and leave no one behind on the journey.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative glass-effect p-6 sm:p-8 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7A2B] to-[#FF5C00]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF7A2B]" strokeWidth={1.5} />
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#FF7A2B]">
                    Vision
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-[family-name:var(--font-syne)] font-bold text-white mb-3">
                  India's innovation engine for the next generation
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  To become the most trusted technology partner for emerging Indian ventures and student builders — the studio that turns raw ideas into polished products and students into confident engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
