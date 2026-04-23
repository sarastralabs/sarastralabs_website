"use client";

import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 92, 0, 0.5)";
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 92, 0, ${0.2 - distance / 750})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-[#0A0A0A] min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-12 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#FF7A2B] to-[#FF5C00] rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "3s" }} />

      {/* Rotating Rings */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2">
        <div className="absolute inset-0 rounded-full border border-[#FF5C00]/20 animate-rotate-slow" />
        <div className="absolute inset-8 rounded-full border border-[#FF5C00]/30 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
        <div className="absolute inset-16 rounded-full border border-[#FF5C00]/40 animate-rotate-slow" style={{ animationDuration: "25s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-6 sm:mb-8 animate-slide-up">
          — Innovation Engine · Est. 2025
        </div>

        <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-none tracking-tight mb-6 animate-slide-up text-glow" style={{ animationDelay: "0.1s" }}>
          Sarastra<span className="text-[#FF5C00]">Labs</span>
        </h1>

        <p className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base md:text-lg tracking-wider text-[#888888] uppercase mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Software · AI · Digital · Education
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#services"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] text-white font-[family-name:var(--font-syne)] font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-orange w-full sm:w-auto"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A2B] to-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 glass-effect text-white font-[family-name:var(--font-syne)] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10 w-full sm:w-auto"
          >
            Start a Project
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { label: "Projects", value: "50+" },
            { label: "Clients", value: "30+" },
            { label: "Services", value: "6" },
            { label: "Success Rate", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-4 sm:p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF5C00] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs text-[#888888] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
