"use client";

import { SERVICES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Our Services
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              End-to-End Supply Chain{" "}
              <span className="gradient-text">Transformation</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              From strategic advisory to AI implementation — we engineer every
              layer of your supply chain for peak performance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, idx) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <FadeIn>
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                  <div className="lg:sticky lg:top-24">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.number}
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.partners && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
                          Technology Partners
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.partners.map((p) => (
                            <span
                              key={p}
                              className="px-3 py-1.5 text-xs rounded-lg bg-bg-light border border-border font-medium text-text-secondary"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    {service.offerings.map((offering, i) => (
                      <FadeIn key={i} delay={i * 0.05}>
                        <div className="group p-5 rounded-xl border border-border hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <CheckCircle2
                              className="w-5 h-5 shrink-0 mt-0.5"
                              style={{ color: service.color }}
                            />
                            <div>
                              <h4 className="font-semibold text-text-primary">
                                {offering}
                              </h4>
                              <p className="text-sm text-text-tertiary mt-1">
                                Enterprise-grade {offering.toLowerCase()} designed
                                for complex, global supply chains.
                              </p>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {idx < SERVICES.length - 1 && <div className="section-divider mt-20" />}
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
