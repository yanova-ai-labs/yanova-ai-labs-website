import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{background:'linear-gradient(135deg, #060b14 0%, #08101e 100%)'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[120px] opacity-20" style={{background:'radial-gradient(ellipse, #00d4ff, #7c3aed)'}} />
      </div>
      <div className="divider" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="rounded-3xl overflow-hidden p-[1px]" style={{background:'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(124,58,237,0.2), rgba(0,212,255,0.1))'}}>
          <div className="rounded-[22px] p-12 md:p-16" style={{background:'#0a1020'}}>
            <div className="badge mb-8 mx-auto w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
              Ready to Transform?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Transform<br/>
              <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build the future together. Join enterprises using Yanova AI Labs to automate operations, eliminate manual work, and gain real-time intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary shadow-[0_0_50px_rgba(0,212,255,0.3)] text-base">
                Request Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-outline text-base">
                Explore Platform
              </Link>
            </div>
            <p className="mt-8 text-xs text-slate-600">No credit card required · Enterprise-grade security · 99.9% uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
