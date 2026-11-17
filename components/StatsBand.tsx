const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "7", label: "Service lines" },
  { value: "99%", label: "Success rate" },
];

export default function StatsBand() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,0,0.45),transparent)] blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.25),transparent)] blur-2xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-light">Sarastra Labs in numbers</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Trusted by startups to enterprises.
              </h2>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-5">
                  <dd className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{s.value}</dd>
                  <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
