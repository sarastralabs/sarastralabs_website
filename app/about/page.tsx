import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import StatsBand from "@/components/StatsBand";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
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
      <main className="relative">
        <PageHeader
          crumb="About"
          eyebrow="About us"
          title="India’s innovation engine for the next generation."
          lead="Sarastra Labs delivers smart, affordable, end-to-end technology to businesses and students alike — without gatekeeping knowledge or inflating costs."
        />
        <About />
        <StatsBand />
        <Process />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
