import { site, absoluteUrl } from "./site";
import { faqs } from "./faqs";

const orgId = `${site.url}/#organization`;

/** Organization + local business + website graph, rendered on every page. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: site.name,
      alternateName: "SarastraLabs",
      slogan: site.tagline,
      description: site.description,
      url: site.url,
      logo: absoluteUrl("/brand/mark.png"),
      image: absoluteUrl("/opengraph-image"),
      email: site.email,
      telephone: site.phones[0],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      geo: { "@type": "GeoCoordinates", ...site.geo },
      areaServed: [
        { "@type": "City", name: `${site.city} (${site.cityAlt})` },
        { "@type": "State", name: site.region },
        { "@type": "Country", name: "India" },
      ],
      contactPoint: site.phones.map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        email: site.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      })),
      sameAs: site.socials,
      knowsAbout: [
        "Website design",
        "Custom software development",
        "Business software",
        "AI agents",
        "Chatbots",
        "Digital marketing",
        "Search engine optimisation",
        "Social media marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sarastra Labs services",
        itemListElement: site.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.desc, provider: { "@id": orgId } },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services by Sarastra Labs",
  itemListElement: site.services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.desc,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "India" },
      url: absoluteUrl("/services"),
    },
  })),
};

export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
  ],
});
