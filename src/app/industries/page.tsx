"use client";

import { INDUSTRIES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2 } from "lucide-react";

const industryDetails: Record<string, { challenges: string[]; capabilities: string[] }> = {
  "Food & Beverage": {
    challenges: ["Complex cold chain management", "Volatile demand influenced by seasonality", "Regulatory compliance across markets", "Shelf-life and waste management"],
    capabilities: ["AI-powered demand sensing for perishables", "Cold chain IoT monitoring & compliance", "Multi-echelon inventory optimization", "Supplier risk management"],
  },
  "Retail & Consumer": {
    challenges: ["Omnichannel fulfillment complexity", "Real-time inventory allocation", "Last-mile delivery optimization", "Demand forecasting at SKU level"],
    capabilities: ["Unified commerce data fabric", "AI-driven inventory allocation", "Predictive replenishment engines", "Customer demand sensing"],
  },
  "Logistics & Distribution": {
    challenges: ["Transportation cost optimization", "Warehouse capacity planning", "Fleet management & routing", "Cross-border logistics complexity"],
    capabilities: ["TMS implementation & optimization", "WMS modernization", "Route optimization with AI", "Digital freight matching"],
  },
  Manufacturing: {
    challenges: ["Production planning complexity", "Multi-tier supplier management", "Quality control variability", "ERP system fragmentation"],
    capabilities: ["Connected factory intelligence", "Supplier collaboration portals", "Predictive quality analytics", "Unified ERP architectures"],
  },
  "Healthcare & Pharma": {
    challenges: ["Regulatory compliance (FDA, GMP)", "Batch traceability requirements", "Temperature-sensitive logistics", "Global distribution complexity"],
    capabilities: ["Serialization & traceability platforms", "Cold chain digital twins", "Regulatory compliance automation", "Global distribution network optimization"],
  },
  "Oil & Gas": {
    challenges: ["Asset-intensive supply chains", "Procurement optimization at scale", "Safety & compliance requirements", "Price volatility management"],
    capabilities: ["Asset lifecycle management", "Intelligent procurement platforms", "Predictive maintenance analytics", "Supply risk modeling"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Industries
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Deep Domain Expertise{" "}
              <span className="gradient-text">Across Sectors</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              We don&apos;t just understand technology — we understand your
              industry&apos;s unique supply chain challenges.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-12">
          {INDUSTRIES.map((ind, i) => {
            const details = industryDetails[ind.title];
            return (
              <FadeIn key={i}>
                <div className="p-8 md:p-10 rounded-2xl border border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] transition-all">
                  <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-8 lg:gap-10">
                    <div>
                      <h2 className="text-xl font-bold text-text-primary mb-2">{ind.title}</h2>
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">{ind.description}</p>
                      <p className="text-xs font-bold text-accent">{ind.stats}</p>
                    </div>

                    {details && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-4">
                          Key Challenges
                        </p>
                        <ul className="space-y-2.5">
                          {details.challenges.map((c, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {details && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-4">
                          Our Capabilities
                        </p>
                        <ul className="space-y-2.5">
                          {details.capabilities.map((c, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                              <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
