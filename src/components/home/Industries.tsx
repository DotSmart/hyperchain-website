"use client";

import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Industries"
          title="Deep domain expertise where it matters"
          subtitle={
            <>
              We bring to you our expertise from diverse industries to solve unique
              supply chain challenges bespoke to your data and processes,
              regulations, and competitive dynamics.
              <br /><br></br>
              <strong className="text-black">Discover our industry-specific solutions and expertise.</strong>
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.08} className="h-full">
              <Link
                href="/industries"
                className="group flex flex-col h-full p-7 rounded-2xl border border-border bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] hover:border-transparent transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                  {ind.title}
                </h3>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                  {ind.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent">
                    {ind.stats}
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
