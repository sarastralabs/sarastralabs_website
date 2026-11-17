import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | E-commerce, Healthcare, FinTech & More - Sarastra Labs",
  description: "Specialized software solutions for E-commerce, Healthcare, Education, Real Estate, FinTech, and Logistics. Industry-specific development expertise.",
  keywords: [
    "e-commerce development India",
    "healthcare software solutions",
    "fintech development",
    "education platform development",
    "real estate software",
    "logistics management system"
  ],
  openGraph: {
    title: "Industries We Serve | Sarastra Labs - Sector-Specific Solutions",
    description: "Delivering specialized tech solutions across diverse sectors with deep domain expertise.",
    url: "https://sarastralabs.com/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <SoftBackground />
      <Navbar />
      <main className="relative pt-16 sm:pt-20">
        <Industries />
      </main>
      <Footer />
    </>
  );
}
