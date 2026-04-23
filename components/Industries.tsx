"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Heart, GraduationCap, Building2, Wallet, Truck } from "lucide-react";

const industries = [
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "Scalable online stores with seamless payment integration and inventory management.",
    projects: "25+",
    color: "from-[#FF5C00] to-[#FF7A2B]",
  },
  {
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant solutions for patient management and telemedicine platforms.",
    projects: "15+",
    color: "from-[#FF7A2B] to-[#FF5C00]",
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Interactive learning platforms and student management systems.",
    projects: "30+",
    color: "from-[#FF5C00] to-[#CC4900]",
  },
  {
    name: "Real Estate",
    icon: Building2,
    description: "Property listing platforms with virtual tours and CRM integration.",
    projects: "12+",
    color: "from-[#FF7A2B] to-[#FF5C00]",
  },
  {
    name: "FinTech",
    icon: Wallet,
    description: "Secure payment gateways and financial management applications.",
    projects: "18+",
    color: "from-[#FF5C00] to-[#FF7A2B]",
  },
  {
    name: "Logistics",
    icon: Truck,
    description: "Fleet management and real-time tracking solutions for supply chains.",
    projects: "10+",
    color: "from-[#CC4900] to-[#FF5C00]",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section ref={sectionRef} className="relative bg-[#0A0A0A] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A2B]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-3 sm:mb-4">
            05 — Industries
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Industries We <span className="text-[#FF5C00]">Serve</span>
          </h2>
          <p className="text-[#888888] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Delivering specialized solutions across diverse sectors with deep domain expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group relative glass-effect p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} suppressHydrationWarning />

                {/* Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-t-2xl`} suppressHydrationWarning />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/30 transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <IconComponent className="w-8 h-8 text-[#FF5C00]" strokeWidth={1.5} />
                  </div>
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 blur-2xl bg-[#FF5C00]/30 animate-pulse-glow" />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white mb-3 group-hover:text-[#FF5C00] transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                  {industry.description}
                </p>

                {/* Projects Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#FF5C00] uppercase tracking-wider">
                    {industry.projects} Projects
                  </span>
                  <div className={`text-[#FF5C00] transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#888888] text-base mb-6">
            Don't see your industry? We adapt to any sector.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:scale-105 transition-all duration-300 glow-orange"
          >
            Discuss Your Project
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
