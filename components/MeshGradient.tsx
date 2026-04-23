"use client";

import { useEffect, useState } from "react";

export default function MeshGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Only track mouse on desktop
      if (!isMobile) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Mesh Gradient Blobs */}
      {!isMobile && (
        <div
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full blur-[100px] sm:blur-[120px] opacity-20 transition-all duration-[3000ms] ease-out"
          style={{
            background: "radial-gradient(circle, #FF5C00 0%, transparent 70%)",
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      
      <div
        className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[100px] opacity-15 animate-float"
        style={{
          background: "radial-gradient(circle, #FF7A2B 0%, transparent 70%)",
          top: isMobile ? "10%" : "20%",
          left: isMobile ? "5%" : "10%",
          animationDuration: "8s",
        }}
      />
      
      <div
        className="absolute w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] rounded-full blur-[90px] sm:blur-[110px] opacity-15 animate-float"
        style={{
          background: "radial-gradient(circle, #FF5C00 0%, transparent 70%)",
          bottom: isMobile ? "5%" : "10%",
          right: isMobile ? "5%" : "15%",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />

      <div
        className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full blur-[70px] sm:blur-[90px] opacity-10 animate-float"
        style={{
          background: "radial-gradient(circle, #FF7A2B 0%, transparent 70%)",
          top: isMobile ? "50%" : "60%",
          left: isMobile ? "60%" : "70%",
          animationDuration: "12s",
          animationDelay: "4s",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.3) 100%)",
        }}
      />
    </div>
  );
}
