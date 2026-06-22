export function AboutSection() {
  const stats = [
    { value:'12+', label:'Years Experience', sub:'DevOps & Cloud' },
    { value:'AI First', label:'Platform', sub:'Built for Enterprises' },
    { value:'Enterprise', label:'Grade Security', sub:'SOC 2 Ready' },
    { value:'Global', label:'Vision', sub:'Expanding Worldwide' },
  ];
  return (
    <section className="relative py-24 bg-[#080d1a] overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="divider mb-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge mb-5">About Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              About <span className="gradient-text">Yanova AI Labs</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Yanova AI Labs is an AI-powered enterprise platform company focused on automating infrastructure, operations, analytics and compliance. Founded by <span className="text-white font-semibold">Venkat Yanapothula</span>, a 12+ year veteran in DevOps, Cloud, and Automation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We believe every enterprise deserves intelligent automation — from one-click Kubernetes deployments to AI-driven operations and market intelligence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map(s => (
              <div key={s.value} className="card rounded-2xl p-6 text-center">
                <div className="text-3xl font-black gradient-text-static mb-1">{s.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-slate-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
