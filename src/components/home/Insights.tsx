"use client";

import Link from "next/link";
import { INSIGHTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function Insights() {
  const featured = INSIGHTS.filter((i) => i.featured);
  const articles = INSIGHTS.filter((i) => !i.featured);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Insights"
          title="Thinking that shapes the industry"
          subtitle="Research, analysis, and perspectives from our team of supply chain and technology experts."
        />

        {/* Featured */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {featured.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                href="/insights"
                className="group flex flex-col h-full rounded-2xl border border-border bg-bg-light p-8 lg:p-10 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] hover:border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-accent bg-accent-light rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs text-text-tertiary">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                  {item.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link
                href="/insights"
                className="group flex flex-col h-full rounded-xl border border-border p-6 hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-text-tertiary">·</span>
                  <span className="text-[10px] text-text-tertiary">
                    {item.readTime}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-text-tertiary leading-relaxed flex-1 line-clamp-3">
                  {item.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
