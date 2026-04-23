"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, TrendingUp, Palette, Bot, Rocket, GraduationCap } from "lucide-react";

const services = [
  {
    num: "01",
    name: "Software Services",
    desc: "Custom web & mobile apps, APIs, SaaS products, and end-to-end development.",
    status: "Live",
    active: true,
    icon: Code2,
    gradient: "from-[#FF5C00] to-[#FF7A2B]",
    subServices: [
      "Web Applications (React, Next.js, Vue)",
      "Mobile Apps (React Native, Flutter)",
      "Backend APIs (Node.js, Python, FastAPI)",
      "SaaS Product Development",
      "Custom Software Solutions",
      "Legacy System Modernization"
    ]
  },
  {
    num: "02",
    name: "Digital Marketing",
    desc: "SEO, social, paid ads, brand strategy — data-driven growth for every business.",
    status: "Live",
    active: true,
    icon: TrendingUp,
    gradient: "from-[#FF7A2B] to-[#FF5C00]",
    subServices: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Google Ads & PPC Campaigns",
      "Content Marketing Strategy",
      "Email Marketing Automation",
      "Analytics & Performance Tracking"
    ]
  },
  {
    num: "03",
    name: "Website Design",
    desc: "High-converting landing pages, portfolio sites, and e-commerce storefronts.",
    status: "Live",
    active: true,
    icon: Palette,
    gradient: "from-[#FF5C00] to-[#CC4900]",
    subServices: [
      "Landing Page Design",
      "Portfolio Websites",
      "E-commerce Stores",
      "Corporate Websites",
      "UI/UX Design",
      "Responsive Web Design"
    ]
  },
  {
    num: "04",
    name: "AI Agents",
    desc: "Custom AI automation — chatbots, workflows, and intelligent systems for your business.",
    status: "Live",
    active: true,
    icon: Bot,
    gradient: "from-[#FF7A2B] to-[#FF5C00]",
    subServices: [
      "Custom AI Chatbots",
      "RAG Pipelines & Knowledge Bases",
      "Workflow Automation",
      "AI-Powered Analytics",
      "LangChain Integration",
      "OpenAI & LLM Solutions"
    ]
  },
  {
    num: "05",
    name: "NexGen Projects",
    desc: "Industry-grade student & early-career projects — real problems, real solutions, real portfolio.",
    status: "Live",
    active: true,
    icon: Rocket,
    gradient: "from-[#FF5C00] to-[#FF7A2B]",
    subServices: [
      "Final Year Projects",
      "Capstone Projects",
      "Portfolio Development",
      "Project Mentorship",
      "Documentation Support",
      "Live Deployment Assistance"
    ]
  },
  {
    num: "06",
    name: "Labs Launchpad",
    desc: "Internships & open-source programs — the bridge from classroom to the real tech world.",
    status: "Coming Soon",
    active: false,
    icon: GraduationCap,
    gradient: "from-[#888888] to-[#3D3D3D]",
    subServices: [
      "Internship Programs",
      "Open Source Contributions",
      "Tech Workshops",
      "Career Guidance",
      "Industry Mentorship",
      "Skill Development"
    ]
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="relative bg-[#0A0A0A] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF5C00]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-3 sm:mb-4">
            02 — Services
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-[#FF5C00] bg-clip-text text-transparent">What We</span>{" "}
            <span className="bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-[#888888] text-base sm:text-lg md:text-xl max-w-3xl mb-12 sm:mb-16 leading-relaxed">
            From concept to deployment, we deliver cutting-edge solutions that drive real results.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 gap-y-8 sm:gap-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.num}
                  className={`group relative perspective-card glass-effect p-6 sm:p-8 rounded-2xl transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                  } ${hoveredIndex === index ? 'z-50' : 'z-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Animated Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
                  
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className={`transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                      <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF5C00]" strokeWidth={1.5} />
                    </div>
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 blur-2xl bg-[#FF5C00]/30 animate-pulse-glow" />
                    )}
                  </div>

                  {/* Service Number */}
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm text-[#FF5C00] tracking-wider mb-3 sm:mb-4">
                    {service.num}
                  </div>

                  {/* Service Name */}
                  <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#FF5C00] transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#888888] leading-relaxed mb-4 sm:mb-6 group-hover:text-white/80 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-[9px] sm:text-[10px] px-3 py-1.5 rounded-full tracking-wider uppercase transition-all duration-300 ${
                        service.active
                          ? "bg-[#FF5C00]/20 text-[#FF5C00] border border-[#FF5C00]/30"
                          : "bg-white/5 text-[#888888] border border-white/10"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${service.active ? 'bg-[#FF5C00] animate-pulse-glow' : 'bg-[#888888]'}`} />
                      {service.status}
                    </span>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute bottom-6 right-6 text-[#FF5C00] text-2xl transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    →
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Popup - Outside the grid */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
              hoveredIndex !== null 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            }`}
            style={{ zIndex: 100 }}
            onMouseEnter={() => hoveredIndex !== null && setHoveredIndex(hoveredIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 border-[#FF5C00]/50 rounded-[32px] p-12 shadow-[0_30px_90px_rgba(255,92,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] w-[650px] overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/10 via-transparent to-[#FF7A2B]/10 opacity-50 animate-gradient" />
              
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF5C00]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF7A2B]/20 rounded-full blur-3xl" />
              
              {hoveredIndex !== null && (
                <div className="relative z-10">
                  {/* Close hint */}
                  <div className="absolute -top-6 right-0 text-[#888888] text-xs font-[family-name:var(--font-jetbrains-mono)] tracking-wider">
                    ESC or hover out to close
                  </div>
                  
                  {/* Service Icon & Name */}
                  <div className="flex items-center gap-6 mb-8 pb-6 border-b border-[#FF5C00]/30">
                    <div className={`relative p-5 rounded-3xl bg-gradient-to-br ${services[hoveredIndex].gradient} shadow-lg`}>
                      {(() => {
                        const IconComponent = services[hoveredIndex].icon;
                        return <IconComponent className="w-12 h-12 text-white" strokeWidth={2} />;
                      })()}
                      <div className="absolute inset-0 rounded-3xl bg-white/20 blur-sm" />
                    </div>
                    <div className="flex-1">
                      <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#FF5C00] mb-2 tracking-widest">
                        {services[hoveredIndex].num} — SERVICE
                      </div>
                      <h4 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-2">
                        {services[hoveredIndex].name}
                      </h4>
                      <p className="text-sm text-[#AAAAAA] leading-relaxed">
                        {services[hoveredIndex].desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* What We Offer Header */}
                  <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-white/5 rounded-2xl border border-[#FF5C00]/20">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${services[hoveredIndex].gradient} animate-pulse-glow shadow-lg shadow-[#FF5C00]/50`} />
                    <span className="font-[family-name:var(--font-syne)] text-lg font-bold text-white tracking-wide">
                      What We Offer
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FF5C00]/30 to-transparent ml-4" />
                  </div>
                  
                  {/* Sub-Services Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {services[hoveredIndex].subServices.map((subService, subIndex) => (
                      <div 
                        key={subIndex}
                        className="group/item flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5C00]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-[#FF5C00]/20 to-[#FF7A2B]/20 flex items-center justify-center border border-[#FF5C00]/30 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                          <span className="text-[#FF5C00] text-sm font-bold">✓</span>
                        </div>
                        <span className="flex-1 text-sm text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                          {subService}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-6 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-[#FF5C00]/20 to-[#FF7A2B]/20 rounded-full border border-[#FF5C00]/40">
                    <span className={`w-2 h-2 rounded-full ${services[hoveredIndex].active ? 'bg-[#FF5C00] animate-pulse-glow' : 'bg-[#888888]'}`} />
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white tracking-widest uppercase">
                      {services[hoveredIndex].status}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#888888] text-base sm:text-lg mb-6 sm:mb-8">
            Ready to transform your vision into reality?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:scale-105 transition-all duration-300 glow-orange text-sm sm:text-base"
          >
            Let's Build Together
            <span className="text-xl sm:text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
