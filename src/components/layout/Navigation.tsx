"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  NAV_ITEMS,
  SERVICES,
  SOLUTIONS,
  INDUSTRIES,
  SITE,
} from "@/lib/constants";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMega = useCallback(() => setMegaMenu(null), []);

  const megaMenuContent: Record<string, React.ReactNode> = {
    Services: (
      <div className="p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-6">
          Our Services
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.id}`}
              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-bg-light transition-colors"
              onClick={closeMega}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-sm"
                style={{ backgroundColor: s.color }}
              >
                {s.number}
              </div>
              <div>
                <p className="font-semibold text-sm text-text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </p>
                <p className="text-xs text-text-tertiary mt-1 line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-border">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            onClick={closeMega}
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    ),
    Solutions: (
      <div className="p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-6">
          Solutions
        </p>
        <div className="grid grid-cols-3 gap-3">
          {SOLUTIONS.map((s, i) => (
            <Link
              key={i}
              href="/solutions"
              className="p-4 rounded-xl hover:bg-bg-light transition-colors group"
              onClick={closeMega}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {s.category}
              </span>
              <p className="font-semibold text-sm mt-1.5 group-hover:text-accent transition-colors">
                {s.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    ),
    Industries: (
      <div className="p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-6">
          Industries We Serve
        </p>
        <div className="grid grid-cols-3 gap-3">
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={i}
              href="/industries"
              className="p-4 rounded-xl hover:bg-bg-light transition-colors group"
              onClick={closeMega}
            >
              <p className="font-semibold text-sm group-hover:text-accent transition-colors">
                {ind.title}
              </p>
              <p className="text-xs text-text-tertiary mt-1">{ind.stats}</p>
            </Link>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <>
      <header
        className={`fixed top-0 pt-5 left-0 right-0 z-50 transition-all duration-300 b-none
          ${
              scrolled
                ? " backdrop-blur-xl"
                : "bg-transparent"
            }
            `}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between bg-white/40 backdrop-blur-xl rounded-[70px] border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="w-[90px] h-[40px] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img src="logo.png" alt="" />
              </span>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-text-primary hidden sm:block">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const hasMega = item.label in megaMenuContent;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && setMegaMenu(item.label)}
                  onMouseLeave={closeMega}
                >
                  <Link
                    href={item.href}
                      className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                        megaMenu === item.label
                          ? "text-accent"
                          : scrolled
                          ? "text-black hover:text-accent"
                          : "text-white hover:text-white/80"
                      }`}
                  >
                    {item.label}
                    {hasMega && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasMega && megaMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden"
                      >
                        {megaMenuContent[item.label]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-[13px] font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-light transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-[72px]"
          >
            <div className="p-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-light rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
