"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { PARTNERS, METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  Target,
  Shield,
  Lightbulb,
  Globe2,
  Rocket,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Supply-Chain Exclusive",
    description:
      "We don't do generic consulting. Every engineer, data scientist, and strategist focuses exclusively on supply chain — giving us unmatched domain depth.",
  },
  {
    icon: Lightbulb,
    title: "People-First AI",
    description:
      "We believe AI should augment human decision-making, not replace it. Our implementations always prioritize adoption, trust, and measurable business value.",
  },
  {
    icon: Shield,
    title: "Technology-Agnostic Integrity",
    description:
      "We recommend the right technology for your needs, not the one that pays us the highest margin. Platform-agnostic architecture is our standard.",
  },
  {
    icon: Globe2,
    title: "Global Scale, Local Depth",
    description:
      "With delivery centers across 5 continents, we combine global best practices with deep understanding of local supply chain dynamics.",
  },
  {
    icon: Rocket,
    title: "Innovation Through Tesseract Labs®",
    description:
      "Our internal innovation unit continuously invests in emerging technologies — from digital twins to generative AI — ensuring clients always stay ahead.",
  },
  {
    icon: Award,
    title: "Outcome-Driven Partnerships",
    description:
      "We structure engagements around measurable outcomes, not billable hours. Our 98% client retention rate speaks to the value we consistently deliver.",
  },
];

const timeline = [
  { year: "2018", event: "Founded in Raleigh, NC with a focus on supply chain data" },
  { year: "2019", event: "First Fortune 500 client engagement — $28M supply chain optimization" },
  { year: "2020", event: "Launched AI practice with demand forecasting capabilities" },
  { year: "2021", event: "Expanded to London and Singapore — global delivery model" },
  { year: "2022", event: "Tesseract Labs® founded as innovation advisory unit" },
  { year: "2023", event: "Reached 500+ enterprise client milestone" },
  { year: "2024", event: "AI implementation practice grew 300% — Anthropic & OpenAI partnerships" },
  { year: "2025", event: "Named leading supply chain data consultancy by industry analysts" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              About Us
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              The Supply Chain{" "}
              <span className="gradient-text">Data Company</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              We exist for one purpose: to engineer the world&apos;s most intelligent
              supply chains through data, AI, and deep domain expertise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-10 rounded-2xl bg-bg-light border border-border">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-5">Our Mission</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Supply chains move $30 trillion in goods annually — yet most
                  run on outdated systems, fragmented data, and gut-feel
                  decision-making.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Hyperchain Solution was founded on a conviction: that
                  <span className="font-semibold text-text-primary">
                    {" "}the next generation of supply chain excellence will be
                    engineered through data
                  </span>. Not just visualized — but truly engineered.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We bring together the world&apos;s best supply chain practitioners,
                  data engineers, and AI specialists to build supply chains that
                  are predictive, resilient, and autonomous.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {METRICS.map((m, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white border border-border text-center">
                    <p className="text-3xl font-bold text-accent mb-1">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="text-xs text-text-tertiary uppercase tracking-wider font-medium">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
                Our Values
              </span>
              <h2 className="text-h2 font-bold tracking-tight text-text-primary">
                What Sets Us Apart
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 h-full">
                  <v.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-base font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
                Our Journey
              </span>
              <h2 className="text-h2 font-bold tracking-tight text-text-primary">
                Building the Future Since 2018
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs font-mono font-bold text-accent">{t.year}</span>
                    <p className="text-sm text-text-secondary mt-1">{t.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tesseract Labs */}
      <section id="tesseract" className="pb-24 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent-light via-white to-indigo-50/50 border border-accent/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-xs font-bold text-accent mb-4 block uppercase tracking-widest">
                    Innovation Unit
                  </span>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Tesseract Labs<sup>®</sup>
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Our dedicated innovation advisory unit that explores the
                    frontier of supply chain technology — from digital twins and
                    autonomous logistics to generative AI and quantum optimization.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Emerging technology research & prototyping",
                      "Client innovation workshops & labs",
                      "Open-source supply chain tools",
                      "Annual State of AI in Supply Chain report",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                        <Rocket className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-bg-light border border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-xl font-bold text-text-primary">Tesseract Labs®</p>
                    <p className="text-xs text-text-tertiary mt-1">Where innovation meets supply chain</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="pb-24 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
                Ecosystem
              </span>
              <h2 className="text-h2 font-bold tracking-tight text-text-primary">
                Technology Partner Ecosystem
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {PARTNERS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <div className="p-4 rounded-xl bg-bg-light border border-border hover:shadow-sm transition-all text-center">
                  <p className="text-sm font-semibold text-text-secondary">{p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
