"use client";

import { INSIGHTS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { Clock, ArrowUpRight } from "lucide-react";

const typeColors: Record<string, string> = {
  Research: "#4f46e5",
  Whitepaper: "#0891b2",
  Blog: "#059669",
  "Case Study": "#d97706",
};

export default function InsightsPage() {
  const featured = INSIGHTS.filter((i) => i.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Insights & Research
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Thought Leadership for{" "}
              <span className="gradient-text">Supply Chain Leaders</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Expert research, analysis, and perspectives on the future of
              supply chain technology, AI, and digital transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featured.map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-8 md:p-10 rounded-2xl bg-bg-light border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 h-full cursor-pointer overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: typeColors[post.type] || "#4f46e5" }}
                  />
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: (typeColors[post.type] || "#4f46e5") + "15",
                        color: typeColors[post.type] || "#4f46e5",
                      }}
                    >
                      {post.type}
                    </span>
                    <span className="text-xs text-text-tertiary">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-4">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-text-tertiary group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* All */}
          <FadeIn delay={0.2}>
            <h3 className="text-xl font-bold text-text-primary mb-8">All Articles</h3>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((post, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.05}>
                <div className="group p-6 rounded-xl border border-border hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: typeColors[post.type] || "#4f46e5" }}
                    />
                    <span className="text-xs text-text-tertiary">
                      {post.type} · {post.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-text-tertiary leading-relaxed flex-1 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
