"use client";

import { CASE_STUDIES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { TrendingUp } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Case Studies
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Real Impact,{" "}
              <span className="gradient-text">Measured Results</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Explore how we&apos;ve partnered with global enterprises to
              transform their supply chains and deliver measurable business
              outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-10">
          {CASE_STUDIES.map((cs, i) => (
            <FadeIn key={i}>
              <div className="relative p-8 md:p-10 rounded-2xl border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] transition-all overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: cs.color }}
                />

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                  <div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold mb-4"
                      style={{
                        backgroundColor: cs.color + "15",
                        color: cs.color,
                      }}
                    >
                      {cs.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">{cs.client}</h3>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-2">
                        The Challenge
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-2">
                      Our Solution
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {cs.solution}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-lg bg-bg-light border border-border font-medium text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-4">
                      Measurable Impact
                    </p>
                    <div className="space-y-3">
                      {cs.impact.map((imp, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-3 rounded-xl bg-bg-light"
                        >
                          <TrendingUp
                            className="w-4 h-4 shrink-0"
                            style={{ color: cs.color }}
                          />
                          <span className="text-sm font-semibold text-text-primary">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
