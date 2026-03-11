"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

const interests = [
  "Supply Chain Advisory",
  "Data Engineering & Integration",
  "AI & Machine Learning",
  "Platform Implementation",
  "Innovation Workshop",
  "Partnership Inquiry",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent-light text-accent mb-5">
              Get in Touch
            </span>
            <h1 className="text-h1 font-bold tracking-tight leading-[1.1] text-text-primary max-w-3xl">
              Start Your{" "}
              <span className="gradient-text">Transformation</span>
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Whether you&apos;re exploring options or ready to begin — our team
              is here to understand your challenges and engineer the right
              solution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Left */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary">Email</p>
                        <a href={`mailto:${SITE.email}`} className="text-sm text-text-secondary hover:text-accent transition-colors">
                          {SITE.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary">Headquarters</p>
                        <p className="text-sm text-text-secondary">{SITE.location}</p>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary">Phone</p>
                        <p className="text-sm text-text-secondary">{SITE.phone}</p>
                      </div>
                    </div> */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary">Response Time</p>
                        <p className="text-sm text-text-secondary">Within 24 business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-bg-light border border-border">
                  <h4 className="font-bold text-text-primary mb-2">Schedule a Discovery Call</h4>
                  <p className="text-sm text-text-secondary mb-4">
                    Prefer a direct conversation? Book a 30-minute discovery
                    call with one of our supply chain experts.
                  </p>
                  <Button href="#" variant="outline" size="sm">
                    Book a Call
                  </Button>
                </div>

                <div className="p-6 rounded-2xl bg-accent-light border border-accent/10">
                  <h4 className="font-bold text-text-primary mb-2">For Partnerships</h4>
                  <p className="text-sm text-text-secondary">
                    Technology vendors and consulting firms interested in
                    partnering with us, please reach out to{" "}
                    <a href="mailto:partnerships@hyperchainsolution.com" className="text-accent hover:underline font-medium">
                      partnerships@hyperchainsolution.com
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right - Form */}
            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="p-12 rounded-2xl bg-bg-light border border-accent/20 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent</h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. Our team will get back to you
                    within 24 business hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-accent hover:underline font-semibold">
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="p-8 md:p-10 rounded-2xl bg-bg-light border border-border"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <h3 className="text-lg font-bold text-text-primary mb-6">
                    Tell us about your project
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-tertiary mb-1.5">First Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-tertiary mb-1.5">Last Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-tertiary mb-1.5">Work Email *</label>
                      <input type="email" required className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-tertiary mb-1.5">Company *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-text-tertiary mb-1.5">Job Title</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="VP Supply Chain" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-text-tertiary mb-3">Area of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((int) => (
                        <label key={int} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-accent/30 cursor-pointer transition-colors text-xs text-text-secondary has-[:checked]:bg-accent-light has-[:checked]:border-accent/30 has-[:checked]:text-accent">
                          <input type="checkbox" className="sr-only" />
                          {int}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-text-tertiary mb-1.5">Tell us more</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none" placeholder="Describe your supply chain challenges..." />
                  </div>

                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
