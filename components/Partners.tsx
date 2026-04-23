"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, TrendingUp, Zap } from "lucide-react";

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLabs", logo: "IL" },
  { name: "FutureStack", logo: "FS" },
  { name: "CloudNine", logo: "C9" },
  { name: "DataFlow", logo: "DF" },
  { name: "NextGen", logo: "NG" },
  { name: "SmartSys", logo: "SS" },
  { name: "CodeCraft", logo: "CC" },
];

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    color: "from-[#FF5C00] to-[#FF7A2B]",
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Delivered",
    color: "from-[#FF7A2B] to-[#FF5C00]",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Success Rate",
    color: "from-[#FF5C00] to-[#CC4900]",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    color: "from-[#FF7A2B] to-[#FF5C00]",
  },
];

export default function Partners() {
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
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className={`mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-3 sm:mb-4">
              06 — Our Impact
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Trusted by <span className="text-[#FF5C00]">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`group glass-effect p-6 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm text-[#888888] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Grid */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#888888] text-base sm:text-lg">
              Partnering with innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group glass-effect p-6 sm:p-8 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#FF7A2B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold text-white">
                      {partner.logo}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-syne)] text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className={`mt-16 sm:mt-20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <div className="text-4xl sm:text-5xl text-[#FF5C00] mb-6">"</div>
            <p className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl md:text-3xl text-white mb-6 leading-relaxed">
              Sarastra Labs transformed our vision into a scalable reality. Their expertise and dedication are unmatched.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#FF7A2B]" />
              <div className="text-left">
                <p className="font-[family-name:var(--font-syne)] text-white font-bold">Sarah Johnson</p>
                <p className="text-sm text-[#888888]">CEO, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
