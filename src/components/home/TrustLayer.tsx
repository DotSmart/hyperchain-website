"use client";

import { PARTNERS, TESTIMONIALS, METRICS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustLayer() {
  return (
    <section className="py-20 bg-bg-light border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pb-20 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((m, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-black tracking-tight">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-1.5 text-sm text-black/60 font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-tertiary mb-8">
            Trusted Technology Partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {PARTNERS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <span className="text-sm font-semibold text-text-tertiary hover:text-text-secondary transition-colors cursor-default">
                  {p}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <blockquote className="h-full flex flex-col">
                <p className="text-[15px] text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-semibold text-text-primary">
                    {t.author}
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {t.company} · {t.role}
                  </p>
                </div>
              </blockquote>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}