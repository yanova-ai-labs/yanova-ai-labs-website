'use client';

import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 glass border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-xl flex items-center justify-center shadow-glow-cyan">
              <span className="text-white font-bold text-lg md:text-xl">Y</span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold gradient-text hidden sm:inline">
                Yanova
              </span>
              <p className="text-xs text-gray-600 hidden md:block font-medium">AI Labs</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-smooth font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg hover:shadow-lg hover:from-blue-800 hover:to-blue-700 transition-smooth font-semibold text-sm"
            >
              Get Started
            </Link>
            {/* Mobile menu button placeholder */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
