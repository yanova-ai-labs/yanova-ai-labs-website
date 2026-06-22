'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-20 md:pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blob 1 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        
        {/* Gradient blob 2 */}
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        {/* Gradient blob 3 */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-300 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              Enterprise AI Platform
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">{COMPANY.tagline}</span>
                <span className="block gradient-text mt-2">Simplified</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Automate infrastructure, power operations with AI, and make data-driven decisions in real time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" variant="gradient">
                  <span>Explore Products</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <span>Schedule Demo</span>
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-900">6+</p>
                <p className="text-gray-600 font-medium">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">12+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative z-10 h-96 lg:h-full min-h-96">
            {/* Main gradient card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 rounded-3xl transform hover:scale-105 transition-transform duration-500 shadow-glow-blue">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:40px_40px] animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                  <p className="text-lg font-semibold opacity-60">Observe. Analyze. Automate.</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">AI Operations</p>
                  <p className="text-xs text-gray-600">Real-time insights</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 animate-float animation-delay-2000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-lg"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Infrastructure</p>
                  <p className="text-xs text-gray-600">One-click deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
