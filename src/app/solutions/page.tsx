"use client";

import { SOLUTIONS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Solutions
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Purpose-Built Solutions for{" "}
              <span className="gradient-text">Enterprise Scale</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Each solution addresses a specific supply chain challenge with
              proven methodologies and cutting-edge technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-12">
          {SOLUTIONS.map((sol, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={i} delay={0.1}>
                <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-10 rounded-2xl border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300">
                  <div className={isEven ? "" : "lg:order-2"}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-3 block">
                      {sol.category}
                    </span>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                      {sol.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {sol.description}
                    </p>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 mb-6">
                      <p className="text-sm font-semibold text-emerald">
                        ↗ {sol.impact}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent font-semibold cursor-pointer hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div
                    className={`${
                      isEven ? "" : "lg:order-1"
                    } aspect-video rounded-xl bg-bg-light border border-border flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <p className="text-5xl font-bold text-accent/20">{String(i + 1).padStart(2, "0")}</p>
                      <p className="text-xs text-text-tertiary mt-2 uppercase tracking-widest font-medium">{sol.category}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
