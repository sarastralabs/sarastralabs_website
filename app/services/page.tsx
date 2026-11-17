import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Software Development, AI Agents & Digital Marketing - Sarastra Labs",
  description: "Explore our services: Custom software development, AI agents, digital marketing, web design, and student project support. Affordable tech solutions for startups and enterprises.",
  keywords: [
    "software development services India",
    "AI development company",
    "digital marketing services",
    "web development India",
    "mobile app development",
    "AI chatbot development",
    "startup tech solutions",
    "affordable software development"
  ],
  openGraph: {
    title: "Our Services | Sarastra Labs - Complete Tech Solutions",
    description: "From software development to AI automation and digital marketing - we deliver end-to-end solutions.",
    url: "https://sarastralabs.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SoftBackground />
      <Navbar />
      <main className="relative pt-16 sm:pt-20">
        <Services />
      </main>
      <Footer />
    </>
  );
}
