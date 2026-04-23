import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Blog from "@/components/Blog";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import MeshGradient from "@/components/MeshGradient";
import DynamicGrid from "@/components/DynamicGrid";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Choose one of these background effects: */}
        
        {/* Option 1: Animated Particles with Connections */}
        <AnimatedBackground />
        
        {/* Option 2: Mesh Gradient (uncomment to use) */}
        {/* <MeshGradient /> */}
        
        {/* Option 3: Dynamic Grid (uncomment to use) */}
        {/* <DynamicGrid /> */}

        {/* You can also combine multiple effects by uncommenting them */}

        <div className="relative z-10">
          <Navbar />
          <ScrollIndicator />
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
          {/* <Partners /> */}
          <section id="contact" aria-label="Contact Us">
            <Contact />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
