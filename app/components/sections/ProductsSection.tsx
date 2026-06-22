'use client';

import Link from 'next/link';
import { PRODUCTS } from '@/constants';

export function ProductsSection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#080d1a] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Product Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Six products,<span className="gradient-text"> one platform</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From infrastructure to analytics — every tool your enterprise needs.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} className="card-dark rounded-2xl p-7 flex flex-col group relative overflow-hidden">
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <span className="text-xs font-black text-cyan-400">{idx + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <span className="text-2xl">
                  {['🚀','🤖','📊','🔭','🔐','📈'][idx]}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 pr-10">{product.name}</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 3).map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`/products`}
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
              >
                Learn more
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* hover glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/3 rounded-full blur-3xl group-hover:bg-cyan-500/8 transition-colors duration-700" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0f1e] gradient-btn shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-smooth"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
