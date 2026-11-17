/**
 * Hero visual: soft 3D orange render (Unsplash, free licence; saved locally in
 * public/brand/hero-3d.webp) blended into the cream page with soft masks and a
 * multiply blend, so it reads as part of the background rather than a framed
 * picture.
 */

const desktopMask =
  "radial-gradient(ellipse 80% 72% at 72% 48%, #000 38%, rgba(0,0,0,0.6) 58%, transparent 78%)";
const mobileMask =
  "radial-gradient(ellipse 70% 62% at 50% 50%, #000 35%, rgba(0,0,0,0.55) 58%, transparent 80%)";

/** Large blended image bleeding off the right edge (desktop). */
export default function HeroArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[980px] opacity-90 lg:block xl:w-[60vw]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/hero-3d.webp"
        alt=""
        width={1200}
        height={1400}
        fetchPriority="high"
        className="h-full w-full object-cover mix-blend-multiply"
        style={{ WebkitMaskImage: desktopMask, maskImage: desktopMask }}
      />
      {/* Light veil on the left so the headline stays crisp */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cream via-cream/40 to-transparent" />
    </div>
  );
}

/** Same image, blended into the flow under the hero text (phones/tablets). */
export function HeroArtMobile() {
  return (
    <div aria-hidden="true" className="pointer-events-none -mx-5 mt-4 h-[300px] sm:-mx-8 sm:h-[400px] lg:hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/hero-3d.webp"
        alt=""
        width={1200}
        height={1400}
        className="h-full w-full object-cover mix-blend-multiply"
        style={{ WebkitMaskImage: mobileMask, maskImage: mobileMask }}
      />
    </div>
  );
}
