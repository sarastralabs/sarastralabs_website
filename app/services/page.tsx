import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services: Websites, Custom Software, AI Agents & Digital Marketing",
  description: "Website design, custom business software (billing, inventory, CRM, booking), AI chatbots and agents, SEO and social media marketing, and student projects, from Sarastra Labs in Mangaluru.",
  keywords: ["website design Mangalore", "custom business software", "billing software development", "AI chatbot development", "digital marketing services Mangaluru", "SEO services Mangalore"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services: Websites, Custom Software, AI Agents & Digital Marketing | Sarastra Labs",
    description: "Website design, custom business software (billing, inventory, CRM, booking), AI chatbots and agents, SEO and social media marketing, and student projects, from Sarastra Labs in Mangaluru.",
    url: "/services",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Services", "/services")} />
      <JsonLd data={servicesSchema} />
      <SoftBackground />
      <Navbar />
      <main className="relative">
        <PageHeader
          crumb="Services"
          eyebrow="Our services"
          title="End-to-end software, AI and digital solutions."
          lead="From concept to deployment, we deliver cutting-edge solutions that drive real results."
        />
        <Services />
        <Process />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
