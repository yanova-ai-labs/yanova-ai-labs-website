'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '@/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl w-full h-full flex items-center justify-center">
                <span className="text-white font-black text-lg">Y</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white tracking-tight">Yanova</span>
              <span className="text-lg font-bold gradient-text-cyan tracking-tight"> AI Labs</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-smooth text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-[#0a0f1e] gradient-btn transition-smooth"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium mb-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 text-center rounded-lg text-sm font-semibold text-[#0a0f1e] gradient-btn"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
