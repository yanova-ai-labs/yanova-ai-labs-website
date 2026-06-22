'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg-hero bg-grid overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] animate-blob delay-4000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] animate-blob delay-2000" />
        {/* Scanning line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-[scanLine_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Content ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-cyan-300 text-sm font-semibold">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Enterprise AI Platform — Now Live
            </div>

            {/* Headline */}
            <div className="animate-fade-up delay-100 space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
                Intelligence
                <br />
                <span className="gradient-text">for Every</span>
                <br />
                Business
              </h1>
            </div>

            {/* Sub */}
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
              One platform to automate infrastructure, power operations with AI, 
              and turn data into decisions. Built for enterprises that move fast.
            </p>

            {/* Slogan */}
            <p className="animate-fade-up delay-300 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              Observe · Analyze · Automate
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[#0a0f1e] font-bold gradient-btn text-base shadow-[0_0_40px_rgba(0,212,255,0.25)] transition-smooth"
              >
                Explore Platform
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold glass border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition-smooth text-base"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up delay-500 flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { value: '6+', label: 'Products' },
                { value: '12+', label: 'Yrs Experience' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black gradient-text-cyan">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Visual ── */}
          <div className="animate-fade-up delay-300 relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden card-dark p-1 animate-float">
              <div className="rounded-[22px] bg-[#0d1526] p-6 space-y-4">
                {/* Terminal header */}
                <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-4 text-xs text-slate-500 font-mono">yanova-oneclick — deploy</span>
                </div>
                {/* Terminal lines */}
                {[
                  { color: 'text-cyan-400', text: '$ yanova deploy --env production --cluster eks-prod' },
                  { color: 'text-slate-400', text: '  ✓ VPC configured          [us-east-1]' },
                  { color: 'text-slate-400', text: '  ✓ IAM roles provisioned   [EKS/NodeGroup]' },
                  { color: 'text-slate-400', text: '  ✓ EKS cluster created      [v1.30]' },
                  { color: 'text-slate-400', text: '  ✓ Node groups scaling      [3/3 nodes]' },
                  { color: 'text-slate-400', text: '  ✓ Monitoring installed      [Prometheus + Grafana]' },
                  { color: 'text-green-400', text: '  ✓ Deployment complete!      [42s]' },
                  { color: 'text-cyan-300', text: '  → https://eks-prod.yanovalabs.com' },
                ].map((line, i) => (
                  <p key={i} className={`text-xs font-mono ${line.color} leading-relaxed`}>{line.text}</p>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -left-4 px-4 py-2.5 rounded-xl glass-cyan animate-float delay-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-white">AI Ops — Active</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl glass-cyan animate-float delay-400">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-cyan-300">↑ 99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by row */}
        <div className="mt-24 animate-fade-up delay-600">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-6">Powered by modern cloud stack</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-30">
            {['AWS', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'PostgreSQL'].map((t) => (
              <span key={t} className="text-sm font-semibold text-slate-400 tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />
    </section>
  );
}
