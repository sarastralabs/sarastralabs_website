import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  crumb: string;
};

/** Title banner with breadcrumb used at the top of every inner page. */
export default function PageHeader({ eyebrow, title, lead, crumb }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line/80 pb-14 pt-32 sm:pb-16 sm:pt-36 md:pt-48">
      <div aria-hidden="true" className="orb absolute -right-12 top-28 hidden h-40 w-40 opacity-80 md:block" />
      <div aria-hidden="true" className="orb-glass absolute right-48 top-56 hidden h-16 w-16 lg:block" />
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-orange">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          <span className="text-ink">{crumb}</span>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
      </div>
    </section>
  );
}
