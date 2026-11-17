import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { getInstagramPosts } from "@/lib/instagram";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import SoftBackground from "@/components/SoftBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Tech Insights, AI Trends & Development Tips - Sarastra Labs",
  description: "Read our latest articles on software development, AI technology, digital marketing strategies, and tech trends for startups and businesses in India.",
  keywords: [
    "tech blog India",
    "software development blog",
    "AI technology articles",
    "startup tech tips",
    "digital marketing blog",
    "web development tutorials"
  ],
  openGraph: {
    title: "Sarastra Labs Blog | Latest Tech Insights & Industry Trends",
    description: "Stay updated with expert articles on software development, AI, and digital transformation.",
    url: "https://sarastralabs.com/blog",
  },
};

export default async function BlogPage() {
  const instagramPosts = await getInstagramPosts(9);

  return (
    <>
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
