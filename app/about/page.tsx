import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sarastra Labs - AI & Software Development Company India",
  description: "Learn about Sarastra Labs, India's innovation engine for next-gen technology. Our mission, vision, and values driving affordable software development and AI solutions.",
  keywords: ["about sarastra labs", "software development company India", "AI company India", "tech startup India", "Mangalore software company"],
  openGraph: {
    title: "About Sarastra Labs | Leading Software & AI Development Company",
    description: "Discover how Sarastra Labs delivers affordable, end-to-end tech solutions for businesses and students across India.",
    url: "https://sarastralabs.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SoftBackground />
      <Navbar />
      <main className="relative pt-16 sm:pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
