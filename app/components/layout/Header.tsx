'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Mail, Headset, Phone, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { NAVIGATION_LINKS, TOP_BAR } from '@/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-cyan-300/15 bg-[#081427] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-cyan-300" />Sales Enquiry: {TOP_BAR.sales}</span>
            <span className="inline-flex items-center gap-1.5"><Headset className="h-3.5 w-3.5 text-cyan-300" />Support: {TOP_BAR.support}</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-cyan-300" />{TOP_BAR.email}</span>
          </div>
          <Link href="/contact-us" className="rounded-lg px-4 py-1.5 text-xs font-semibold btn-primary">
            Request Demo
          </Link>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#071325ee] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_34px_rgba(2,8,20,0.5)]'
            : 'bg-[#071325cc] backdrop-blur'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden xl:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-white/5 transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="xl:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/5"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="xl:hidden border-t border-white/10 px-4 pb-4 pt-2 bg-[#09182d]">
            <div className="grid gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm text-slate-300 rounded-lg hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
