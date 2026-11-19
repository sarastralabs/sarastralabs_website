import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import StatsBand from "@/components/StatsBand";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Serve: E-commerce, Healthcare, Education & More",
  description: "Software, websites and digital marketing for e-commerce, healthcare, education, real estate, fintech and logistics businesses, built by Sarastra Labs in Mangaluru.",
  keywords: ["e-commerce website development", "healthcare software", "education software", "real estate website", "logistics software India"],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve: E-commerce, Healthcare, Education & More | Sarastra Labs",
    description: "Software, websites and digital marketing for e-commerce, healthcare, education, real estate, fintech and logistics businesses, built by Sarastra Labs in Mangaluru.",
    url: "/industries",
    images: ["/opengraph-image"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Industries", "/industries")} />
      <SoftBackground />
      <Navbar />
      <main className="relative">
        <PageHeader
          crumb="Industries"
          eyebrow="Industries"
          title="Solutions shaped for your sector."
          lead="Delivering specialized solutions across diverse sectors with deep domain expertise."
        />
        <Industries />
        <StatsBand />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
