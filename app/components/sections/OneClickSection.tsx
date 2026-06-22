import Link from 'next/link';

const steps = [
  { n:1, icon:'☁️', label:'Select Cloud', sub:'AWS, GCP, Azure' },
  { n:2, icon:'⚙️', label:'Configure', sub:'Cluster Settings' },
  { n:3, icon:'🚀', label:'Click Deploy', sub:'One click' },
  { n:4, icon:'✅', label:'Cluster Ready', sub:'Production live' },
];

const checks = [
  'VPC, Subnets, IAM Roles',
  'EKS Cluster, Node Groups',
  'Monitoring, Logging, Ingress',
  'Secure, Scalable, Reliable',
];

export function OneClickSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{background:'linear-gradient(135deg, #080d1a 0%, #0a1020 100%)'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10" style={{background:'linear-gradient(to bottom, #00d4ff, transparent)'}} />
      </div>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-16">
          <div className="badge mb-5">Yanova OneClick</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            One-Click <span className="gradient-text">Kubernetes Cluster</span> Deployment
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Deploy production-ready EKS clusters in minutes. No manual configuration, no complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Steps */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              {steps.map((s, i) => (
                <div key={s.n} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl card flex flex-col items-center justify-center gap-1 group hover:border-cyan-400/40 transition-smooth">
                      <span className="text-2xl">{s.icon}</span>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-bold text-white">{s.n}</p>
                      <p className="text-xs text-slate-400">{s.label}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className="w-8 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mt-[-16px]" />}
                </div>
              ))}
            </div>

            <div className="card rounded-2xl p-7 mb-6">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">What&apos;s included</p>
              <div className="grid grid-cols-2 gap-3">
                {checks.map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span> {c}
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-primary">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="card rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20" style={{background:'radial-gradient(circle, #00d4ff, transparent)'}} />
            <h3 className="text-xl font-bold text-white mb-6">Cluster Architecture</h3>
            <div className="space-y-4">
              {[
                {layer:'Network Layer', items:['VPC', 'Public Subnets', 'Private Subnets', 'NAT Gateway']},
                {layer:'Compute Layer', items:['EKS Control Plane', 'Node Groups (Auto-scaling)', 'EC2 Instances']},
                {layer:'Platform Layer', items:['Monitoring (Prometheus)', 'Logging (CloudWatch)', 'Ingress (NGINX)']},
              ].map(block => (
                <div key={block.layer} className="rounded-xl p-4" style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}>
                  <p className="text-xs font-bold text-cyan-400 mb-2">{block.layer}</p>
                  <div className="flex flex-wrap gap-2">
                    {block.items.map(item => (
                      <span key={item} className="px-2.5 py-1 rounded-lg text-xs text-slate-300" style={{background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.15)'}}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-semibold">Deployment time: ~42 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
