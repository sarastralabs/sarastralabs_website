/** Single source of truth for company facts used in metadata and structured data. */
export const site = {
  name: "Sarastra Labs",
  url: "https://sarastralabs.com",
  tagline: "Ideas into Impact",
  description:
    "Sarastra Labs is a software and digital agency in Mangaluru (Mangalore), Karnataka, India. We build websites, custom business software and AI agents, and run social media and digital marketing for local and growing businesses.",
  email: "info@sarastralabs.com",
  phones: ["+91-9353622801", "+91-9741447767"],
  city: "Mangaluru",
  cityAlt: "Mangalore",
  region: "Karnataka",
  country: "IN",
  // City-level coordinates for Mangaluru (no street address published).
  geo: { latitude: 12.9141, longitude: 74.856 },
  socials: [
    "https://www.linkedin.com/in/sarastra-labs-bb3595405/",
    "https://x.com/LabsSarastra",
    "https://www.instagram.com/sarastra.labs/",
    "https://www.youtube.com/@sarastralabs",
  ],
  services: [
    { name: "Software Development", desc: "Custom web and mobile apps, APIs, SaaS products and end-to-end development." },
    { name: "Custom Business Software", desc: "Billing and POS, inventory, CRM, booking systems, ERP dashboards and HR/payroll software." },
    { name: "Website Design", desc: "Landing pages, business and portfolio websites, e-commerce stores and UI/UX design." },
    { name: "Digital Marketing", desc: "SEO, social media marketing, Google Ads, content and email marketing, analytics." },
    { name: "AI Agents", desc: "Custom AI chatbots, RAG knowledge bases, workflow automation and LLM solutions." },
    { name: "NexGen Projects", desc: "Industry-grade final-year and capstone projects with mentorship and deployment support." },
  ],
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
