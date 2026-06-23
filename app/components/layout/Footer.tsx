import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { COMPANY, NAVIGATION_LINKS, POLICY_LINKS, PRODUCTS, SERVICES } from '@/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="text-slate-300 text-sm">{COMPANY.tagline}</p>
            <p className="text-cyan-300/80 text-xs tracking-[0.2em] uppercase mt-1">{COMPANY.slogan}</p>
            <p className="text-slate-400 text-sm mt-4">Talk to Us: +91 XXXXX XXXXX</p>
            <p className="text-slate-500 text-xs mt-2">Ratings & Reviews: Coming soon</p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-300 text-sm transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Products & Services</h3>
            <ul className="space-y-2">
              {PRODUCTS.slice(0, 4).map((product) => (
                <li key={product.id} className="text-slate-400 text-sm">{product.name}</li>
              ))}
              {SERVICES.map((service) => (
                <li key={service.id} className="text-slate-500 text-sm">{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {POLICY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-300 text-sm transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">Copyright © 2026 {COMPANY.legalName}. All Rights Reserved.</p>
          <p className="text-slate-600 text-xs">{COMPANY.domain}</p>
        </div>
      </div>
    </footer>
  );
}
