import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import About from "@/components/About";
import StatsBand from "@/components/StatsBand";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Blog from "@/components/Blog";
import Industries from "@/components/Industries";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { getInstagramPosts } from "@/lib/instagram";
import SoftBackground from "@/components/SoftBackground";

export default async function Home() {
  const instagramPosts = await getInstagramPosts(3);

  return (
    <>
      <JsonLd data={faqSchema} />
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
        <section id="products" aria-label="Upcoming Products">
          <Products />
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
        <FAQ />
        <section id="blog" aria-label="Latest Blog Posts">
          <Blog instagramPosts={instagramPosts} />
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
