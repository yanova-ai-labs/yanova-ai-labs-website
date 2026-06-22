const aiCapabilities = [
  { icon:'🤖', title:'AIOps', desc:'Intelligent Operations' },
  { icon:'⚙️', title:'Automation', desc:'End-to-End Automation' },
  { icon:'📊', title:'Insights', desc:'Real-Time Intelligence' },
  { icon:'🔐', title:'Security', desc:'AI-Powered Security' },
];

export function AIPlatformSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{background:'linear-gradient(135deg, #060b14 0%, #0a0f1e 60%, #06101a 100%)'}}>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge mb-6">AI Powered Platform</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              AI at the <span className="gradient-text">Core of Everything</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our platform uses advanced AI to automate operations, predict failures before they happen, and provide actionable intelligence across your entire infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {aiCapabilities.map(c => (
                <div key={c.title} className="card rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30" style={{background:'radial-gradient(ellipse, rgba(0,212,255,0.2) 0%, transparent 70%)'}} />
            <div className="relative card rounded-3xl p-10 flex items-center justify-center" style={{minHeight:'320px'}}>
              <div className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center animate-glow" style={{background:'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))', border:'2px solid rgba(0,212,255,0.3)'}}>
                  <span className="text-5xl">🧠</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 gradient-text">Yanova AI</h3>
                <p className="text-slate-400 text-sm">Intelligent Core Engine</p>
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                  {['Predict','Analyze','Automate','Secure'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold" style={{background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.2)', color:'#00d4ff'}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
