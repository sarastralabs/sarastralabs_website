import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import PageHeader from "@/components/PageHeader";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Contact Sarastra Labs | Free Consultation in Mangaluru" },
  description: "Book a free consultation with Sarastra Labs, Mangaluru. Email info@sarastralabs.com or call +91 93536 22801. We usually reply within 24 hours on business days.",
  keywords: ["contact sarastra labs", "software company Mangalore contact", "hire web developer Mangaluru", "free consultation website"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Sarastra Labs | Free Consultation in Mangaluru",
    description: "Book a free consultation with Sarastra Labs, Mangaluru. Email info@sarastralabs.com or call +91 93536 22801. We usually reply within 24 hours on business days.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />
      <JsonLd data={faqSchema} />
      <SoftBackground />
      <Navbar />
      <main className="relative">
        <PageHeader
          crumb="Contact"
          eyebrow="Contact us"
          title="Let’s talk about your project."
          lead="Email, call or send us a message. We typically respond within 24 hours on business days."
        />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
