import Link from 'next/link';
import { COMPANY } from '@/constants';

export default function AboutPage() {
  return (
    <div className="bg-night-950 pt-20">
      <section className="section-shell bg-hero">
        <div className="section-content text-center">
          <div className="badge mb-6">About Yanova AI Labs</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Built For The Next Era of Enterprise AI</h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            {COMPANY.name} is an AI-powered enterprise product company focused on automation, observability, cloud operations, analytics,
            and intelligent decision-making.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #060913 100%)' }}>
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Founder</p>
              <h2 className="text-3xl font-black text-white mb-3">{COMPANY.founder}</h2>
              <p className="text-slate-300 leading-relaxed">{COMPANY.founderBackground}</p>
            </div>

            <div className="card p-8">
              <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Mission</p>
              <h2 className="text-3xl font-black text-white mb-3">{COMPANY.tagline}</h2>
              <p className="text-slate-300 leading-relaxed">
                Our mission is to help every enterprise run with faster deployments, lower downtime, better cloud economics,
                and AI-guided operations at scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              ['12+', 'Years Experience'],
              ['AI First', 'Platform Design'],
              ['Enterprise', 'Security Mindset'],
              ['Global', 'Execution Vision'],
            ].map(([value, label]) => (
              <div key={label} className="card p-5 text-center">
                <p className="text-3xl font-black gradient-text-static mb-1">{value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base btn-primary">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
