"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Link, MessageCircle, Code2, Camera, Clock } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5C00]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A2B]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-4 sm:mb-6">
            07 — Get Started
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/40 tracking-tight hover:text-white/100 transition-all duration-500 cursor-default">
              Build the future with us
            </h2>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              We don't just build software.
              <br />
              <span className="text-[#FF5C00] text-glow">We build momentum.</span>
            </h2>
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/40 tracking-tight hover:text-white/100 transition-all duration-500 cursor-default">
              Your vision, our execution
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`glass-effect p-6 sm:p-8 md:p-10 rounded-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-white to-[#FF5C00] bg-clip-text text-transparent">Start Your Project</span>
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm mb-2 font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-[#888888] to-[#FF5C00] bg-clip-text text-transparent">Your Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:bg-white/10 transition-all duration-300"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-[#888888] to-[#FF7A2B] bg-clip-text text-transparent">Project Details</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:bg-white/10 transition-all duration-300 resize-none"
                  suppressHydrationWarning
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:scale-105 transition-all duration-300 glow-orange flex items-center justify-center gap-3 text-base sm:text-lg"
                suppressHydrationWarning
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Quick Links */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Quick Contact */}
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <h4 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-white to-[#FF7A2B] bg-clip-text text-transparent">Quick Contact</span>
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@sarastralabs.com"
                  className="flex items-center gap-3 sm:gap-4 text-[#888888] hover:text-[#FF5C00] transition-colors group/item"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base group-hover/item:translate-x-2 transition-transform">info@sarastralabs.com</span>
                </a>
                <a
                  href="tel:+919353622801"
                  className="flex items-center gap-3 sm:gap-4 text-[#888888] hover:text-[#FF5C00] transition-colors group/item"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base group-hover/item:translate-x-2 transition-transform">9353622801</span>
                </a>
                <a
                  href="tel:+919741447767"
                  className="flex items-center gap-3 sm:gap-4 text-[#888888] hover:text-[#FF5C00] transition-colors group/item"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base group-hover/item:translate-x-2 transition-transform">9741447767</span>
                </a>
                <div className="flex items-center gap-3 sm:gap-4 text-[#888888]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base">Mangalore, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h4 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-white to-[#FF5C00] bg-clip-text text-transparent">Follow Us</span>
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "LinkedIn", icon: Link, url: "https://www.linkedin.com/company/sarastralabs" },
                  { name: "X (Twitter)", icon: MessageCircle, url: "https://x.com/LabsSarastra" },
                  { name: "YouTube", icon: Camera, url: "https://www.youtube.com/@sarastralabs" },
                  { name: "Instagram", icon: Camera, url: "https://www.instagram.com/sarastralabs" },
                ].map((social, i) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#FF5C00]/20 hover:border-[#FF5C00] hover:scale-105 transition-all duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm text-white/80 group-hover:text-white">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FF5C00]/10 to-transparent border-[#FF5C00]/30">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF5C00]" strokeWidth={1.5} />
                <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-bold">
                  <span className="bg-gradient-to-r from-white to-[#FF7A2B] bg-clip-text text-transparent">Fast Response</span>
                </h4>
              </div>
              <p className="text-sm sm:text-base text-white/80">
                We typically respond within <span className="text-[#FF5C00] font-bold">24 hours</span> on business days.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#888888] text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Prefer a direct approach?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@sarastralabs.com"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:scale-105 transition-all duration-300 glow-orange flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              Email Us Directly
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#services"
              className="px-6 sm:px-8 py-3 sm:py-4 glass-effect text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
