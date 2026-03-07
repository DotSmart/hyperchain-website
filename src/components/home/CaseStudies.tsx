"use client";

import { CASE_STUDIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CaseStudies() {
  const featured = CASE_STUDIES[0];
  const others = CASE_STUDIES.slice(1);

  return (
    <section className="section-padding bg-bg-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Client Work"
          title="Real outcomes for global enterprises"
          subtitle="We measure success by the impact we deliver — from millions in savings to transformational operational improvements."
          dark
        />

        {/* Featured */}
        <FadeIn className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
                  {featured.industry}
                </span>
                <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {featured.client}
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {featured.challenge}
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {featured.solution}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-medium text-white/50 bg-white/[0.06] rounded-full border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {featured.impact.map((imp, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <p className="text-sm font-semibold text-white">{imp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Others */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {others.map((cs, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-400">
                  {cs.industry}
                </span>
                <h3 className="mt-2.5 text-lg font-bold text-white leading-snug">
                  {cs.client}
                </h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed flex-1">
                  {cs.challenge}
                </p>
                <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-2">
                  {cs.impact.slice(0, 2).map((imp, j) => (
                    <p key={j} className="text-xs font-semibold text-emerald-400">
                      ✓ {imp}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/case-studies" variant="outline-light" icon>
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
