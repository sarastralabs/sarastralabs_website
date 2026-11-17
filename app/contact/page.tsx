import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Sarastra Labs - Software Development Company",
  description: "Contact Sarastra Labs for software development, AI solutions, and digital marketing services. Based in Mangalore, India. Email: info@sarastralabs.com | Phone: +91 9353622801",
  keywords: ["contact sarastra labs", "software development inquiry", "AI development contact", "Mangalore tech company", "hire developers India"],
  openGraph: {
    title: "Contact Sarastra Labs | Let's Build Your Next Project",
    description: "Get in touch with our team for custom software development, AI agents, and digital solutions.",
    url: "https://sarastralabs.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
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
      </main>
      <Footer />
    </>
  );
}
