"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Careers() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Careers
            </span>
            <h2 className="text-h2 font-bold tracking-tight text-text-primary leading-[1.15]">
              Build what matters.{" "}
              <span className="text-text-tertiary">Join the team.</span>
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed max-w-lg">
              We&apos;re always looking for curious, ambitious people who want
              to solve hard problems at the intersection of supply chains, data
              engineering, and artificial intelligence.
            </p>
            <div className="mt-8">
              <Button href="/careers" icon>
                Explore Open Roles
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Engineering", detail: "Data, ML, Platform" },
                { label: "Consulting", detail: "Strategy, Domain" },
                { label: "Product", detail: "Design, Management" },
                { label: "Operations", detail: "Global Delivery" },
              ].map((role, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-bg-light border border-border hover:border-accent/20 transition-colors"
                >
                  <p className="font-semibold text-text-primary">{role.label}</p>
                  <p className="text-xs text-text-tertiary mt-1">{role.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
