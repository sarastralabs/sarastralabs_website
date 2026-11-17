import { socialLinks } from "./SocialIcons";

const columns = [
  { title: "Services", items: ["Software Dev", "AI Agents", "Digital Marketing", "Web Design"] },
  { title: "Company", items: ["About Us", "Careers", "Blog", "Contact"] },
  { title: "Resources", items: ["Documentation", "Case Studies", "Portfolio", "FAQ"] },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-line bg-white/70 backdrop-blur">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-full.png"
              alt="Sarastra Labs — Ideas into Impact"
              width={1365}
              height={160}
              className="h-10 w-auto sm:h-11"
            />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">Building Tomorrow&apos;s Technology Today</p>
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:text-orange"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_1fr_1fr_1.35fr]">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-muted transition-colors hover:text-orange">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-ink">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li className="[overflow-wrap:anywhere]">info@sarastralabs.com</li>
                <li>9353622801</li>
                <li>9741447767</li>
                <li>India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Sarastra Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-orange">Privacy</a>
            <a href="#" className="transition-colors hover:text-orange">Terms</a>
            <a href="#" className="transition-colors hover:text-orange">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
