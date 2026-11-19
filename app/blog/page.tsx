import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { getInstagramPosts } from "@/lib/instagram";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights: Tech, AI & Digital Marketing Tips for Businesses",
  description: "Articles and updates from Sarastra Labs on AI agents, software, websites and digital marketing for small and growing businesses.",
  keywords: ["tech blog India", "AI for small business", "digital marketing tips", "website tips for businesses"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights: Tech, AI & Digital Marketing Tips for Businesses | Sarastra Labs",
    description: "Articles and updates from Sarastra Labs on AI agents, software, websites and digital marketing for small and growing businesses.",
    url: "/blog",
    images: ["/opengraph-image"],
  },
};

export default async function BlogPage() {
  const instagramPosts = await getInstagramPosts(9);

  return (
    <>
      <JsonLd data={breadcrumbSchema("Insights", "/blog")} />
      <SoftBackground />
      <Navbar />
      <main className="relative">
        <PageHeader
          crumb="Insights"
          eyebrow="Insights"
          title="Ideas, guides and trends from our team."
          lead="Stay updated with the latest trends, tips, and insights from our team."
        />
        <Blog instagramPosts={instagramPosts} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
