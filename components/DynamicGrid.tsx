"use client";

import { useEffect, useState } from "react";

export default function DynamicGrid() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid Pattern - larger grid on mobile */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 92, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 92, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "80px 80px" : "60px 60px", // Larger grid on mobile
          transform: `translateY(${scrollY * 0.1}px)`,
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        }}
      />

      {/* Glowing Grid Intersections - fewer on mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#FF5C00] blur-sm animate-pulse-glow"
            style={{
              left: isMobile ? `${20 + i * 20}%` : `${15 + i * 12}%`,
              top: isMobile ? `${30 + (i % 2) * 40}%` : `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Scanning Line Effect - disabled on mobile for performance */}
      {!isMobile && (
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent opacity-30"
          style={{
            top: `${(scrollY % window.innerHeight) / window.innerHeight * 100}%`,
            boxShadow: "0 0 20px rgba(255, 92, 0, 0.5)",
          }}
        />
      )}

      {/* Corner Accents - smaller on mobile */}
      <div className={`absolute top-0 left-0 ${isMobile ? 'w-20 h-20' : 'w-32 h-32'} border-t-2 border-l-2 border-[#FF5C00]/20 rounded-tl-3xl`} />
      <div className={`absolute top-0 right-0 ${isMobile ? 'w-20 h-20' : 'w-32 h-32'} border-t-2 border-r-2 border-[#FF5C00]/20 rounded-tr-3xl`} />
      <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-20 h-20' : 'w-32 h-32'} border-b-2 border-l-2 border-[#FF5C00]/20 rounded-bl-3xl`} />
      <div className={`absolute bottom-0 right-0 ${isMobile ? 'w-20 h-20' : 'w-32 h-32'} border-b-2 border-r-2 border-[#FF5C00]/20 rounded-br-3xl`} />
    </div>
  );
}
