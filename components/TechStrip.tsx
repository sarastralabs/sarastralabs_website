const items = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "React Native",
  "Flutter",
  "OpenAI",
  "LangChain",
  "RAG Pipelines",
  "SEO",
  "Google Ads",
  "Social Media",
  "Email Automation",
];

/** Scrolling strip of the technologies and channels the team works with. */
export default function TechStrip() {
  return (
    <section aria-label="Technologies we work with" className="border-y border-line/80 bg-white/60 py-6 backdrop-blur">
      <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Technologies &amp; channels we work with</p>
        <div className="marquee relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max gap-10">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-ink/70">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-orange/60" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
