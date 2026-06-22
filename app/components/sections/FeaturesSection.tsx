'use client';

const features = [
  { icon: '⚡', title: 'One-Click Deploy', desc: 'Provision full AWS EKS clusters with VPC, IAM, monitoring and ingress in under 60 seconds.', tag: 'OneClick' },
  { icon: '🤖', title: 'AI Operations', desc: 'Natural language queries, automated root cause analysis, and intelligent incident remediation.', tag: 'AI Ops' },
  { icon: '🔭', title: 'Full Observability', desc: 'Unified logs, metrics, traces, and alerts with AI-driven anomaly detection at scale.', tag: 'Observability' },
  { icon: '📊', title: 'Business Intelligence', desc: 'Real-time executive dashboards, user and revenue analytics with actionable insights.', tag: 'Insights' },
  { icon: '🔐', title: 'Security & Compliance', desc: 'CIS benchmarks, automated security audits, compliance reports and cost optimization.', tag: 'Compliance' },
  { icon: '📈', title: 'Market Intelligence', desc: 'AI-powered stock analysis, portfolio tracking, and real-time market alerts.', tag: 'MarketIQ' },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#0a0f1e] overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Everything you need to
            <span className="gradient-text"> run smarter</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete AI-powered enterprise platform — from zero to production in minutes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.tag}
              className="card-dark rounded-2xl p-7 group relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div className="text-4xl mb-5">{f.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{f.tag}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>

              {/* bottom glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
