'use client';
import Link from 'next/link';
import { COMPANY } from '@/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero bg-grid overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-60 w-[800px] h-[800px] rounded-full blur-[160px] animate-blob" style={{background:'rgba(0,212,255,0.06)'}} />
        <div className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full blur-[140px] animate-blob delay-4000" style={{background:'rgba(124,58,237,0.06)'}} />
        <div className="absolute top-1/3 right-1/4 w-1 h-[60%] opacity-20 animate-[scanLine_10s_ease-in-out_infinite]" style={{background:'linear-gradient(transparent,#00d4ff,transparent)'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-7">
            <div className="animate-fade-up badge">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
              {COMPANY.name} · Futuristic Enterprise AI
            </div>

            <div className="animate-fade-up delay-100">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
                {COMPANY.tagline.split(' ')[0]} for
                <br />
                <span className="gradient-text">Every Business</span>
              </h1>
            </div>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              AI-powered automation, observability, analytics, and one-click infrastructure solutions for modern enterprises.
            </p>

            <p className="animate-fade-up delay-300 text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase">
              {COMPANY.slogan}
            </p>

            <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base btn-primary shadow-[0_0_40px_rgba(0,212,255,0.25)]">
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base btn-outline">
                Request Demo
              </Link>
            </div>
          </div>

          <div className="animate-fade-up delay-300 relative">
            <div className="rounded-3xl overflow-hidden card animate-float" style={{padding:'1px', background:'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(124,58,237,0.2))'}}>
              <div className="rounded-[22px] bg-[#0a1628] p-6 space-y-3">
                <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">yanova — ai-ops — prod</span>
                </div>
                {[
                  {c:'text-cyan-400', t:'$ yanova deploy --cluster eks-prod --region us-east-1'},
                  {c:'text-slate-400', t:'  ✓ VPC + Subnets configured        [us-east-1]'},
                  {c:'text-slate-400', t:'  ✓ IAM Roles provisioned           [EKS]'},
                  {c:'text-slate-400', t:'  ✓ EKS Cluster created              [v1.30]'},
                  {c:'text-slate-400', t:'  ✓ Node Groups (3 nodes)            [running]'},
                  {c:'text-slate-400', t:'  ✓ Monitoring + Logging             [active]'},
                  {c:'text-slate-400', t:'  ✓ Security Checks passed           [98/100]'},
                  {c:'text-green-400', t:'  ✓ Deployment complete!              [42s]'},
                  {c:'text-cyan-300',  t:'  → https://eks-prod.yanovalabs.com'},
                ].map((l,i) => <p key={i} className={`text-xs font-mono ${l.c} leading-relaxed`}>{l.t}</p>)}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 px-4 py-2.5 rounded-xl glass-cyan animate-float delay-200 text-xs font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> AI Ops Active
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl glass-cyan animate-float delay-400 text-xs font-semibold text-cyan-300">
              ↑ 99.9% uptime
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-up delay-600">
          <p className="text-center text-xs text-slate-700 uppercase tracking-widest mb-6">Powered by modern cloud stack</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {['AWS','Kubernetes','Terraform','Prometheus','Grafana','PostgreSQL','Docker','OpenAI'].map(t => (
              <span key={t} className="text-sm font-semibold text-slate-600 tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{background:'linear-gradient(to top, #060b14, transparent)'}} />
    </section>
  );
}
