'use client';

import Link from 'next/link';
import { COMPANY, CONTACT } from '@/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">Y</span>
                </div>
                <span className="text-lg font-bold gradient-text">{COMPANY.name}</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                Enterprise AI platform for infrastructure automation, operations, and analytics.
              </p>
              <p className="text-cyan-400 font-semibold text-sm">{COMPANY.slogan}</p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Solutions
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-800"></div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-blue-300 text-sm">
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {CONTACT.social.linkedin && (
                <a
                  href={CONTACT.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              )}
              {CONTACT.social.twitter && (
                <a
                  href={CONTACT.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  Twitter
                </a>
              )}
              {CONTACT.social.github && (
                <a
                  href={CONTACT.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
