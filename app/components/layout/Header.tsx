'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { COMPANY, NAVIGATION_LINKS } from '@/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080f1de8] border-b border-cyan-300/15 backdrop-blur-xl shadow-[0_14px_45px_rgba(1,6,15,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-[#060b14] font-black text-lg leading-none">Y</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg tracking-tight">YANOVA</span>
              <span className="text-cyan-400 font-bold text-lg tracking-tight"> AI LABS</span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500">{COMPANY.slogan}</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-300 hover:text-cyan-300 text-sm font-medium transition-smooth rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm btn-primary">
              Request Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button className="lg:hidden p-2 text-slate-300 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 pt-4 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 text-sm font-medium rounded-lg hover:bg-white/4"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block mt-2 px-4 py-3 text-center rounded-xl text-sm btn-primary">Request Demo</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
