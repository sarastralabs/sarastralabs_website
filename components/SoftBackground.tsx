/**
 * Fixed, non-interactive page background: warm cream with soft
 * peach-to-orange glows. Replaces the old particle / mesh / grid effects.
 */
export default function SoftBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-cream">
      <div className="absolute -right-40 -top-48 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(255,122,43,0.28),rgba(255,180,130,0.14)_55%,transparent)] blur-2xl" />
      <div className="absolute -left-56 top-[38%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(255,200,160,0.30),transparent)] blur-2xl" />
      <div className="absolute bottom-[-220px] right-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(255,170,120,0.18),transparent)] blur-2xl" />
    </div>
  );
}
