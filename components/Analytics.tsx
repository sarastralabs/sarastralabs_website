import Script from "next/script";

const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
// Only accept a real GA4 ID (G-XXXXXXX) so nothing else can be injected.
const GA_ID = raw && /^G-[A-Z0-9]+$/.test(raw) ? raw : undefined;

/**
 * Google Analytics 4. Loads only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set
 * (e.g. G-XXXXXXXXXX in Vercel environment variables), after the page is
 * interactive so it doesn't slow the first paint. Page changes inside the
 * site are tracked by GA4's enhanced measurement (browser history events).
 */
export default function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
