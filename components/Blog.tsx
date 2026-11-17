"use client";

import { Calendar, Clock, ArrowRight, TrendingUp, Images, Play, ArrowUpRight } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";
import { useReveal } from "./useReveal";
import { InstagramIcon } from "./SocialIcons";

const INSTAGRAM_URL = "https://www.instagram.com/sarastra.labs/";

const blogPosts = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how AI agents are transforming business workflows and driving unprecedented efficiency gains.",
    category: "AI & ML",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    trending: true,
  },
  {
    title: "Building Scalable SaaS Applications",
    excerpt: "Best practices for architecting cloud-native applications that scale with your business growth.",
    category: "Development",
    date: "Apr 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    trending: false,
  },
  {
    title: "Digital Marketing Trends 2025",
    excerpt: "Stay ahead of the curve with the latest strategies in SEO, content marketing, and social media.",
    category: "Marketing",
    date: "Apr 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
    trending: true,
  },
];

export default function Blog({ instagramPosts = [] }: { instagramPosts?: InstagramPost[] }) {
  if (instagramPosts.length > 0) return <InstagramFeed posts={instagramPosts} />;
  return <StaticInsights />;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });
}

/** Latest posts pulled from the Sarastra Labs Instagram account. */
function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal ${visible ? "is-visible" : ""}`}>
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="section-title mt-4">Latest insights.</h2>
            <p className="section-lead">Fresh from our Instagram: tips, launches and behind-the-scenes from the team.</p>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline self-start md:self-auto">
            <InstagramIcon className="h-4 w-4" />
            Follow @sarastra.labs
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className={`card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift reveal ${
                visible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-cream-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={post.caption ? post.caption.slice(0, 120) : "Instagram post by Sarastra Labs"}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {post.mediaType !== "IMAGE" && (
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur">
                    {post.mediaType === "VIDEO" ? (
                      <Play className="h-3.5 w-3.5" strokeWidth={2.25} />
                    ) : (
                      <Images className="h-3.5 w-3.5" strokeWidth={2} />
                    )}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                {post.caption && (
                  <p className="line-clamp-3 flex-1 whitespace-pre-line text-[15px] leading-relaxed text-ink-soft">{post.caption}</p>
                )}
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {formatDate(post.timestamp)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-orange">
                    View on Instagram
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Fallback articles shown until the Instagram feed is connected. */
function StaticInsights() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-page">
        <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal ${visible ? "is-visible" : ""}`}>
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="section-title mt-4">Latest insights.</h2>
            <p className="section-lead">Stay updated with the latest trends, tips, and insights from our team.</p>
          </div>
          <a href="/blog" className="btn-outline self-start md:self-auto">
            View All Posts
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`card group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift reveal ${
                visible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-cream-deep">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                {post.trending && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-dark backdrop-blur">
                    <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} />
                    Trending
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">{post.category}</span>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-orange">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-xs text-muted">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-orange">
                    Read More
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
