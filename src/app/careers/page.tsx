"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Lightbulb,
  Users,
  Globe,
  Rocket,
  Coffee,
  Heart,
  GraduationCap,
  MapPin,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { icon: Code2, title: "Engineering Excellence", description: "Work with the latest in data engineering, AI/ML, and supply chain platforms daily." },
  { icon: Lightbulb, title: "Innovation Time", description: "20% dedicated time for R&D through Tesseract Labs® — our innovation unit." },
  { icon: Users, title: "Exceptional Team", description: "PhD data scientists, supply chain veterans, and world-class engineers." },
  { icon: Globe, title: "Global Impact", description: "Your work transforms supply chains that move goods for billions worldwide." },
  { icon: Rocket, title: "Career Growth", description: "Clear path from Engineer → Senior → Principal → Director → Partner." },
  { icon: Coffee, title: "Remote-First", description: "Flexible work from anywhere, with quarterly team offsites globally." },
  { icon: Heart, title: "Wellbeing Focus", description: "Comprehensive health, wellness stipend, mental health support." },
  { icon: GraduationCap, title: "Learning Budget", description: "$5,000 annual learning budget for conferences, courses, certifications." },
];

const departments = [
  {
    name: "Data Engineering",
    roles: [
      { title: "Senior Data Engineer", location: "Remote / Raleigh", type: "Full-time" },
      { title: "Staff Data Platform Engineer", location: "Remote / NYC", type: "Full-time" },
      { title: "Data Engineering Manager", location: "Remote / London", type: "Full-time" },
    ],
  },
  {
    name: "AI & Machine Learning",
    roles: [
      { title: "ML Engineer — Demand Forecasting", location: "Remote / NYC", type: "Full-time" },
      { title: "Applied AI Scientist", location: "Remote / Raleigh", type: "Full-time" },
      { title: "MLOps Engineer", location: "Remote / Bangalore", type: "Full-time" },
    ],
  },
  {
    name: "Supply Chain Consulting",
    roles: [
      { title: "Senior Supply Chain Consultant", location: "Remote / London", type: "Full-time" },
      { title: "Manager — Supply Chain Strategy", location: "Remote / Singapore", type: "Full-time" },
    ],
  },
  {
    name: "Platform Implementation",
    roles: [
      { title: "SAP S/4HANA Architect", location: "Remote / Singapore", type: "Full-time" },
      { title: "Blue Yonder Implementation Lead", location: "Remote / Raleigh", type: "Full-time" },
      { title: "Kinaxis Solutions Consultant", location: "Remote / London", type: "Full-time" },
    ],
  },
  {
    name: "Product & Design",
    roles: [
      { title: "Senior Product Designer", location: "Remote / NYC", type: "Full-time" },
      { title: "Product Manager — Internal Tools", location: "Remote / Raleigh", type: "Full-time" },
    ],
  },
];

const stories = [
  {
    name: "Sarah Chen",
    role: "Staff ML Engineer",
    years: "3 years at Hyperchain",
    quote: "I joined from Big Tech and haven't looked back. The impact you have here is immediate — my demand forecasting model is used by Fortune 500 companies daily.",
  },
  {
    name: "Marcus Rivera",
    role: "Senior Supply Chain Consultant",
    years: "2 years at Hyperchain",
    quote: "What makes Hyperchain special is the depth. Everyone here truly understands supply chains. The conversations are at a completely different level.",
  },
  {
    name: "Priya Nair",
    role: "Data Engineering Manager",
    years: "4 years at Hyperchain",
    quote: "I've grown from IC to manager of a global team. The leadership invests in people, and the problems we solve are genuinely complex and rewarding.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-emerald-50 text-emerald mb-5">
              We&apos;re Hiring
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Build the Future of{" "}
              <span className="gradient-text">Supply Chains</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed mb-8">
              Join 1,000+ engineers, data scientists, and consultants
              transforming how the world&apos;s largest companies move goods.
            </p>
            <Button href="#open-roles" size="lg" icon>
              View Open Roles
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h2 font-bold tracking-tight text-text-primary text-center mb-14">
              Why Hyperchain
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 rounded-xl border border-border hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] hover:border-transparent transition-all h-full">
                  <b.icon className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-bold text-sm text-text-primary mb-1">{b.title}</h4>
                  <p className="text-xs text-text-tertiary leading-relaxed">{b.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
                Our People
              </span>
              <h2 className="text-h2 font-bold tracking-tight text-text-primary">
                Stories from the Team
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-bg-light border border-border h-full flex flex-col">
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-sm text-text-primary">{s.name}</p>
                    <p className="text-xs text-text-tertiary">{s.role} · {s.years}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="pb-24 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
                Open Positions
              </span>
              <h2 className="text-h2 font-bold tracking-tight text-text-primary">
                Find Your Role
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {departments.map((dept, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="px-7 py-4 border-b border-border bg-bg-light">
                    <h3 className="font-bold text-text-primary">{dept.name}</h3>
                    <p className="text-xs text-text-tertiary">
                      {dept.roles.length} open position{dept.roles.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="divide-y divide-border">
                    {dept.roles.map((role, j) => (
                      <div
                        key={j}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-7 py-4 hover:bg-bg-light transition-colors cursor-pointer group"
                      >
                        <div>
                          <p className="font-medium text-text-primary group-hover:text-accent transition-colors">
                            {role.title}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-text-tertiary">
                              <MapPin className="w-3 h-3" />
                              {role.location}
                            </span>
                            <span className="text-xs text-text-tertiary">{role.type}</span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                          Apply <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
