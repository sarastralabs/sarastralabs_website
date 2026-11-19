import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { siteGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF5C00",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sarastra Labs | Website, Software, AI & Digital Marketing Agency in Mangaluru",
    template: "%s | Sarastra Labs",
  },
  description:
    "Sarastra Labs is a software and digital agency in Mangaluru (Mangalore), India. We build websites, custom business software and AI agents, and run social media and digital marketing for local and growing businesses.",
  applicationName: site.name,
  keywords: [
    "software company in Mangaluru",
    "software company in Mangalore",
    "website design Mangalore",
    "web development company Mangaluru",
    "digital marketing agency Mangalore",
    "social media marketing Mangaluru",
    "SEO services Mangalore",
    "custom business software",
    "billing and inventory software",
    "CRM development",
    "AI agents for business",
    "AI chatbot development",
    "mobile app development Karnataka",
    "final year projects Mangalore",
    "software development India",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Sarastra Labs | Websites, Software, AI & Digital Marketing",
    description:
      "Software and digital agency in Mangaluru, India: websites, custom business software, AI agents, social media and digital marketing for growing businesses.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LabsSarastra",
    creator: "@LabsSarastra",
    title: "Sarastra Labs | Websites, Software, AI & Digital Marketing",
    description:
      "Software and digital agency in Mangaluru, India, for local and growing businesses.",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Mangaluru",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <JsonLd data={siteGraph} />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
