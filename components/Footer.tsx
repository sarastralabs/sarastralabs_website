import { Link, MessageCircle, Code2, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#FF5C00] to-[#FF7A2B] px-4 sm:px-6 md:px-12 py-8 sm:py-12 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center md:text-left">
            <div className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              SarastraLabs
            </div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs text-white/70 tracking-[0.15em] uppercase">
              Building Tomorrow's Technology Today
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Link, href: "#" },
              { icon: MessageCircle, href: "#" },
              { icon: Code2, href: "#" },
              { icon: Camera, href: "#" },
            ].map((social, i) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2">
              {["Software Dev", "AI Agents", "Digital Marketing", "Web Design"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Case Studies", "Portfolio", "FAQ"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>info@sarastralabs.com</li>
              <li>9353622801</li>
              <li>9741447767</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>© 2025 Sarastra Labs. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
