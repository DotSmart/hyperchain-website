"use client";

import Link from "next/link";
import { SOLUTIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function Solutions() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Solutions"
          title="Purpose-built solutions for modern supply chains"
          subtitle="Each solution combines our technology expertise with deep supply chain domain knowledge to deliver measurable business outcomes."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link
                href="/solutions"
                className="group flex flex-col h-full p-7 rounded-2xl bg-white border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] hover:border-transparent transition-all duration-300"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                  {s.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald">
                    {s.impact}
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
