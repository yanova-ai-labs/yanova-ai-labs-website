'use client';
import Link from 'next/link';
import { PRODUCTS } from '@/constants';

const icons = ['⚡','🤖','🔭','📊','🔐','📈'];
const colors = [
  'from-cyan-500/20 to-blue-600/20 border-cyan-500/20',
  'from-purple-500/20 to-pink-600/20 border-purple-500/20',
  'from-blue-500/20 to-cyan-400/20 border-blue-500/20',
  'from-green-500/20 to-emerald-400/20 border-green-500/20',
  'from-orange-500/20 to-red-500/20 border-orange-500/20',
  'from-violet-500/20 to-purple-400/20 border-violet-500/20',
];

export function ProductsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#060b14] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Powerful Products for <span className="gradient-text">Modern Enterprises</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Complete AI-powered tools for infrastructure, operations, analytics, and compliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className="card rounded-2xl p-7 flex flex-col group relative overflow-hidden">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[i]} border flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {icons[i]}
              </div>
              <div className="absolute top-5 right-5 text-xs font-bold text-slate-600">0{i+1}</div>
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.slice(0,3).map((f,j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/lnk">
                Learn More
                <svg className="w-4 h-4 group-hover/lnk:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl group-hover:opacity-60 opacity-20 transition-opacity duration-500" style={{background:'rgba(0,212,255,0.15)'}} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary shadow-[0_0_40px_rgba(0,212,255,0.2)]">
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
