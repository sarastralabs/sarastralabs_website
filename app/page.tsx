import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Blog from "@/components/Blog";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SoftBackground from "@/components/SoftBackground";

export default function Home() {
  return (
    <>
      <SoftBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <section id="about" aria-label="About Sarastra Labs">
          <About />
        </section>
        <section id="services" aria-label="Our Services">
          <Services />
        </section>
        <CTABanner />
        <section id="blog" aria-label="Latest Blog Posts">
          <Blog />
        </section>
        <section id="industries" aria-label="Industries We Serve">
          <Industries />
        </section>
        <section id="contact" aria-label="Contact Us">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
