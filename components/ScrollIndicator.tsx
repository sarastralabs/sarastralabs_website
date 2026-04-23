"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 cursor-pointer hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to next section"
    >
      {/* Mouse Container with continuous bounce */}
      <div className="relative flex flex-col items-center animate-bounce">
        {/* Mouse Icon */}
        <div className="relative w-8 h-12 rounded-full border-2 border-[#FF5C00] flex items-start justify-center p-2 shadow-[0_0_30px_rgba(255,92,0,0.6)]">
          {/* Scroll Wheel - Animated */}
          <div className="w-1.5 h-3 bg-[#FF5C00] rounded-full animate-scroll-wheel shadow-[0_0_10px_rgba(255,92,0,0.8)]" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#FF5C00]/20 blur-xl animate-pulse" />
        </div>
      </div>
    </button>
  );
}
