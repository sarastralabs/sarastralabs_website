"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

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

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#111111] to-[#0A0A0A] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs tracking-[0.2em] text-[#FF5C00] uppercase mb-3 sm:mb-4">
            04 — Insights
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Latest <span className="text-[#FF5C00]">Insights</span>
              </h2>
              <p className="text-[#888888] text-base sm:text-lg max-w-2xl">
                Stay updated with the latest trends, tips, and insights from our team.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 glass-effect text-white font-[family-name:var(--font-syne)] font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`group glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                
                {/* Trending Badge */}
                {post.trending && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#FF5C00]/90 backdrop-blur-sm rounded-full">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-white uppercase tracking-wider">
                      Trending
                    </span>
                  </div>
                )}

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-3 group-hover:text-[#FF5C00] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[#888888]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#FF5C00] text-sm font-[family-name:var(--font-syne)] font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
