"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTABanner() {
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
    <section ref={sectionRef} className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`relative glass-effect rounded-3xl overflow-hidden transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] animate-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Floating Orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 px-6 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                Ready to Transform Your <span className="text-black">Vision</span> into Reality?
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 50+ businesses that have already accelerated their growth with our cutting-edge solutions.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                {[
                  "Free Consultation",
                  "24/7 Support",
                  "Money-Back Guarantee",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-[family-name:var(--font-jetbrains-mono)]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="group w-full sm:w-auto px-8 py-4 bg-white text-[#FF5C00] font-[family-name:var(--font-syne)] font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>

              {/* Trust Badge */}
              <p className="mt-8 text-sm text-white/70 font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
                Trusted by startups to enterprises · 99% client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
