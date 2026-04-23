import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
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
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Industries />
        <Footer />
      </div>
    </>
  );
}
