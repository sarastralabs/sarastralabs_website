import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      <main className="relative pt-16 sm:pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
