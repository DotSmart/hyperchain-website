import Link from "next/link";
import { SITE, NAV_ITEMS, OFFICES } from "@/lib/constants";

export function Footer() {
  const mainLinks = NAV_ITEMS.slice(0, 4);
  const companyLinks = NAV_ITEMS.slice(4);

  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Main Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-[15px] tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              {SITE.tagline}. {SITE.description}.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">
              Expertise
            </p>
            <ul className="space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4">
              Offices
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {OFFICES.map((o, i) => (
                <span key={i} className="text-sm text-white/60">
                  {o.city}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                Contact
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
