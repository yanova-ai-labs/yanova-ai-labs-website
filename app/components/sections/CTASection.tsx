'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0f1e] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
      </div>

      {/* Main card */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden relative">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-violet-600/30 p-[1px]">
            <div className="absolute inset-[1px] rounded-3xl bg-[#0d1424]" />
          </div>

          <div className="relative p-12 md:p-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Start Today — Free
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to automate
              <br />
              <span className="gradient-text">your operations?</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join enterprises using Yanova AI Labs to eliminate manual work, 
              reduce MTTR, and gain real-time intelligence across their infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0f1e] gradient-btn shadow-[0_0_50px_rgba(0,212,255,0.3)] transition-smooth text-base"
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white glass border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition-smooth text-base"
              >
                Explore Platform
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-slate-600">
              No credit card required · Enterprise-grade security · SOC 2 ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
