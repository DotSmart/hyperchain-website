"use client";

import { PARTNERS, TESTIMONIALS, METRICS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustLayer() {
  return (
    <section className="bg-bg-light border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 py-8 lg:px-8">

{/* Metrics */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="py-8 md:py-10"
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

    {METRICS.map((m, i) => {

      const colors = [
        "from-[#6366f1] to-[#8b5cf6]",
        "from-[#22d3ee] to-[#3b82f6]",
        "from-[#34d399] to-[#10b981]",
        "from-[#fbbf24] to-[#f59e0b]"
      ];

      return (
        <div
          key={i}
          className="relative group rounded-2xl border border-gray-100 bg-white p-5 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >

          {/* Value */}
          <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${colors[i]} bg-clip-text text-transparent`}>
            <AnimatedCounter value={m.value} suffix={m.suffix} />
          </div>

          {/* Label */}
          <p className="mt-2 md:mt-3 text-[11px] sm:text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
            {m.label}
          </p>

        </div>
      );
    })}

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