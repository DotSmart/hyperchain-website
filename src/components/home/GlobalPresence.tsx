"use client";

import { OFFICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin } from "lucide-react";

export function GlobalPresence() {
  const hq = OFFICES.find((o) => o.type === "HQ");
  const rest = OFFICES.filter((o) => o.type !== "HQ");

  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Global Presence"
          title="Delivering worldwide, rooted locally"
          subtitle="With offices and delivery centers across 8 cities, we combine global scale with local expertise to serve clients wherever they operate."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr] gap-10">
          {/* HQ */}
          {hq && (
            <FadeIn>
              <div className="p-8 rounded-2xl bg-white border border-border">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                  Global Headquarters
                </span>
                <h3 className="mt-3 text-2xl font-bold text-text-primary">
                  {hq.city}
                </h3>
                <p className="text-sm text-text-secondary mt-1">{hq.country}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-text-tertiary">
                  <MapPin className="w-4 h-4" />
                  London, UK
                </div>
              </div>
            </FadeIn>
          )}

          {/* Other Offices */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {rest.map((o, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white border border-border hover:shadow-sm transition-shadow"
                >
                  <p className="font-semibold text-sm text-text-primary">
                    {o.city}
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {o.country}
                  </p>
                  <p className="text-[10px] text-text-tertiary mt-2 uppercase tracking-wider font-medium">
                    {o.type}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
