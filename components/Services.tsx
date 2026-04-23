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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
                  className={`group relative glass-effect p-6 sm:p-8 rounded-2xl transition-all duration-700 hover:scale-[1.08] hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                  } ${hoveredIndex === index ? 'z-50 ring-2 ring-[#FF5C00]/50' : 'z-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(index)}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Animated Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-t-2xl`} />
                  
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

          {/* Modal Backdrop */}
          {selectedIndex !== null && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] animate-fade-in"
              onClick={() => setSelectedIndex(null)}
            />
          )}

          {/* Centered Popup Modal */}
          <div 
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
              selectedIndex !== null 
                ? 'opacity-100 pointer-events-auto scale-100' 
                : 'opacity-0 pointer-events-none scale-90'
            }`}
            style={{ zIndex: 100 }}
          >
            <div className="relative backdrop-blur-3xl bg-gradient-to-br from-[#0A0A0A]/95 via-[#1A1A1A]/90 to-[#0A0A0A]/95 border-2 border-[#FF5C00]/60 rounded-3xl p-8 shadow-[0_40px_120px_rgba(255,92,0,0.8),0_0_80px_rgba(255,92,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.15)] w-[90vw] max-w-[520px] animate-popup-in">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/15 via-transparent to-[#FF7A2B]/15 opacity-60 animate-gradient rounded-3xl" />
              
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF5C00]/40 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF7A2B]/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
              
              {selectedIndex !== null && (
                <div className="relative z-10">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#FF7A2B] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-[#FF5C00]/50 z-20 text-sm font-bold"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                  
                  {/* Service Icon & Name */}
                  <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[#FF5C00]/40">
                    <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${services[selectedIndex].gradient} shadow-[0_8px_30px_rgba(255,92,0,0.5)] animate-float`}>
                      {(() => {
                        const IconComponent = services[selectedIndex].icon;
                        return <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />;
                      })()}
                      <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm animate-pulse-glow" />
                    </div>
                    <div className="flex-1">
                      <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#FF5C00] mb-1 tracking-widest">
                        {services[selectedIndex].num} — SERVICE
                      </div>
                      <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-1">
                        {services[selectedIndex].name}
                      </h4>
                      <p className="text-xs text-[#AAAAAA] leading-relaxed">
                        {services[selectedIndex].desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* What We Offer Header */}
                  <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-white/5 rounded-xl border border-[#FF5C00]/20">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[selectedIndex].gradient} animate-pulse-glow shadow-lg shadow-[#FF5C00]/50`} />
                    <span className="font-[family-name:var(--font-syne)] text-sm font-bold text-white tracking-wide">
                      What We Offer
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FF5C00]/30 to-transparent ml-2" />
                  </div>
                  
                  {/* Sub-Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[selectedIndex].subServices.map((subService, subIndex) => (
                      <div 
                        key={subIndex}
                        className="group/item flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF5C00]/50 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${subIndex * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-gradient-to-br from-[#FF5C00]/20 to-[#FF7A2B]/20 flex items-center justify-center border border-[#FF5C00]/30 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                          <span className="text-[#FF5C00] text-xs font-bold">✓</span>
                        </div>
                        <span className="flex-1 text-xs text-[#CCCCCC] group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                          {subService}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-5 flex items-center justify-center gap-2 py-2 px-5 bg-gradient-to-r from-[#FF5C00]/20 to-[#FF7A2B]/20 rounded-full border border-[#FF5C00]/40">
                    <span className={`w-1.5 h-1.5 rounded-full ${services[selectedIndex].active ? 'bg-[#FF5C00] animate-pulse-glow' : 'bg-[#888888]'}`} />
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-white tracking-widest uppercase">
                      {services[selectedIndex].status}
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
