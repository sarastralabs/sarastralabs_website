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
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "About Sarastra Labs | Software & Digital Agency in Mangaluru" },
  description: "Sarastra Labs is a Mangaluru (Mangalore) based technology studio delivering affordable websites, custom software, AI agents and digital marketing. Our story, mission, vision and values.",
  keywords: ["about sarastra labs", "software company in Mangaluru", "tech startup Mangalore", "IT company Karnataka"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sarastra Labs | Software & Digital Agency in Mangaluru",
    description: "Sarastra Labs is a Mangaluru (Mangalore) based technology studio delivering affordable websites, custom software, AI agents and digital marketing. Our story, mission, vision and values.",
    url: "/about",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("About Us", "/about")} />
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
