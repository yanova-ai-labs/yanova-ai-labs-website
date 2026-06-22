const compliance = [
  { title:'SOC 2', sub:'Type II', color:'#00d4ff' },
  { title:'ISO', sub:'27001', color:'#a78bfa' },
  { title:'GDPR', sub:'Compliant', color:'#34d399' },
  { title:'HIPAA', sub:'Ready', color:'#f59e0b' },
];

const benefits = [
  { value:'80%', label:'Faster Deployments' },
  { value:'60%', label:'Reduced Downtime' },
  { value:'40%', label:'Lower Costs' },
  { value:'100%', label:'Visibility & Control' },
];

export function TrustSection() {
  return (
    <section className="relative py-24 bg-[#080d1a]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trust */}
          <div>
            <div className="badge mb-6">Trust & Compliance</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Enterprise Grade <span className="gradient-text-static">Security</span></h2>
            <p className="text-slate-400 mb-8">Industry-leading security standards and compliance certifications for enterprise peace of mind.</p>
            <div className="grid grid-cols-2 gap-4">
              {compliance.map(c => (
                <div key={c.title} className="card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:`${c.color}15`, border:`1px solid ${c.color}30`}}>
                    <span className="text-base font-black" style={{color:c.color}}>{c.title}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="badge mb-6">Customer Benefits</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Enterprises <span className="gradient-text-static">Choose Yanova</span></h2>
            <p className="text-slate-400 mb-8">Proven results that transform how enterprises manage their operations.</p>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map(b => (
                <div key={b.value} className="card rounded-2xl p-5 text-center">
                  <div className="text-4xl font-black gradient-text-static mb-1">{b.value}</div>
                  <div className="text-sm text-slate-400">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
