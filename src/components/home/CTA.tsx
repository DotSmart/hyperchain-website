"use client";

import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Ready to transform your supply chain?
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss how Hyperchain Solution can help your
            organization turn supply chain data into a competitive advantage.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="white"
              size="lg"
              icon
            >
              Start a Conversation
            </Button>
            <Button
              href={`mailto:${SITE.email}`}
              variant="outline-light"
              size="lg"
            >
              {SITE.email}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
