import { Hero } from "@/components/home/Hero";
import { TrustLayer } from "@/components/home/TrustLayer";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Solutions } from "@/components/home/Solutions";
import { Industries } from "@/components/home/Industries";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Insights } from "@/components/home/Insights";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { Careers } from "@/components/home/Careers";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustLayer />
      <ServicesGrid />
      <Solutions />
      <Industries />
      <CaseStudies />
      <Insights />
      <GlobalPresence />
      <Careers />
      <CTA />
    </>
  );
}
