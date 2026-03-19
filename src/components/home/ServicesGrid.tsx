"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="Deep expertise across the supply chain data stack"
          subtitle="From strategy through execution, we bring the specialized skills needed to transform your supply chain into a data-driven competitive advantage."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.1}>
              <Link
                href={`/services#${s.id}`}
                className="group relative flex flex-col p-8 lg:p-10 rounded-2xl border border-border bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] hover:border-transparent transition-all duration-300"
              >
                {/* Number + Color Bar */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.number}
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                  {s.description}
                </p>

                {/* Offerings */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.offerings.slice(0, 4).map((o, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-[10px] font-medium text-text-tertiary bg-bg-light rounded-full"
                    >
                      {o}
                    </span>
                  ))}
                  {s.offerings.length > 4 && (
                    <span className="px-3 py-1 text-[11px] font-medium text-accent bg-accent-light rounded-full">
                      +{s.offerings.length - 4} more
                    </span>
                  )}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
