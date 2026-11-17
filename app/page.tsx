import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import About from "@/components/About";
import StatsBand from "@/components/StatsBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
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
        <TechStrip />
        <section id="about" aria-label="About Sarastra Labs">
          <About />
        </section>
        <StatsBand />
        <section id="services" aria-label="Our Services">
          <Services />
        </section>
        <section id="process" aria-label="How We Work">
          <Process />
        </section>
        <section id="industries" aria-label="Industries We Serve">
          <Industries />
        </section>
        <section id="why-us" aria-label="Why Sarastra Labs">
          <WhyUs />
        </section>
        <section id="blog" aria-label="Latest Blog Posts">
          <Blog />
        </section>
        <section id="contact" aria-label="Contact Us">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
