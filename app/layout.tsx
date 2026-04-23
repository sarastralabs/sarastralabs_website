import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sarastra Labs | Software Development, AI Agents & Digital Marketing Services",
  description: "Sarastra Labs - India's innovation engine for next-gen technology. We deliver custom software development, AI automation, digital marketing, web design, and student project support. Affordable, end-to-end solutions for startups and enterprises.",
  keywords: [
    "software development India",
    "AI agents",
    "digital marketing services",
    "web development",
    "mobile app development",
    "custom software solutions",
    "AI automation",
    "chatbot development",
    "SEO services",
    "student projects",
    "internship programs",
    "SaaS development",
    "React development",
    "Next.js development",
    "API development",
    "e-commerce development"
  ],
  authors: [{ name: "Sarastra Labs" }],
  creator: "Sarastra Labs",
  publisher: "Sarastra Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarastralabs.com",
    siteName: "Sarastra Labs",
    title: "Sarastra Labs | Software Development, AI Agents & Digital Marketing",
    description: "India's innovation engine for next-gen technology. Custom software, AI automation, digital marketing, and student project support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarastra Labs - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarastra Labs | Software Development & AI Solutions",
    description: "Custom software development, AI agents, digital marketing, and project support for the next generation.",
    images: ["/og-image.jpg"],
    creator: "@LabsSarastra",
  },
  alternates: {
    canonical: "https://sarastralabs.com",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sarastra Labs",
    "description": "Technology-first venture delivering software services, AI agents, digital marketing, and project support",
    "url": "https://sarastralabs.com",
    "logo": "https://sarastralabs.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9353622801",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/sarastra-labs-bb3595405/",
      "https://x.com/LabsSarastra",
      "https://www.instagram.com/sarastralabs",
      "https://www.youtube.com/@sarastralabs"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "6",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development Services",
            "description": "Custom web & mobile apps, APIs, SaaS products, and end-to-end development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Services",
            "description": "SEO, social media marketing, paid ads, brand strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design Services",
            "description": "Landing pages, portfolio sites, and e-commerce storefronts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Agents Development",
            "description": "Custom AI automation, chatbots, workflows, and intelligent systems"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://sarastralabs.com" />
        <meta name="theme-color" content="#FF5C00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
