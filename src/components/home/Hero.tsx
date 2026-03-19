"use client";

import { motion } from "framer-motion";
import { SITE, METRICS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden">
      {/* Background Video */}
   {/* Desktop Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
>
  <source src="/intro.mp4" type="video/mp4" />
</video>

{/* Mobile Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  style={{ height: "120%" }}
  className="absolute inset-0 w-full h-full object-cover opacity-65 block md:hidden" 
>
  <source src="/intro-mobile.mp4" type="video/mp4" />
</video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-[120px] pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-sm border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {SITE.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-display font-bold tracking-tight text-white leading-[1.08]"
          >
            Engineering data{" "}
            <span className="gradient-text">intelligence</span>{" "}
            that runs enterprise supply chains.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            {/* {SITE.description}. */}
            Hyperchain enables companies to modernize technology, 
            build critical data infrastructure for AI, rewire processes at scale 
            so they stay ahead in adapting intelligent computing of the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contact" size="lg" icon>
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="outline-light" size="lg" icon>
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Metrics Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((m, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-1.5 text-sm text-white/60 font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
