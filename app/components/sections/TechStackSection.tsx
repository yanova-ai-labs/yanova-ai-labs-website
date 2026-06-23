const techs = [
  { name:'React', color:'#61DAFB' },
  { name:'TypeScript', color:'#3178C6' },
  { name:'Next.js', color:'#ffffff' },
  { name:'Node.js', color:'#339933' },
  { name:'Python', color:'#3776AB' },
  { name:'AWS', color:'#FF9900' },
  { name:'Kubernetes', color:'#326CE5' },
  { name:'Terraform', color:'#7B42BC' },
  { name:'PostgreSQL', color:'#336791' },
  { name:'FastAPI', color:'#009688' },
  { name:'Docker', color:'#2496ED' },
  { name:'Prometheus', color:'#E6522C' },
  { name:'Grafana', color:'#F46800' },
  { name:'OpenAI', color:'#74E2A7' },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 bg-[#060b14]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-14">
          <div className="badge mb-5">Technology Stack</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Built with <span className="gradient-text">Modern Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Enterprise-grade tech stack powering every layer of the platform.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {techs.map(t => (
            <div key={t.name} className="card rounded-xl px-5 py-3 flex items-center gap-2.5 hover:border-white/20 transition-smooth cursor-default">
              <div className="w-3 h-3 rounded-full" style={{background: t.color, boxShadow:`0 0 8px ${t.color}40`}} />
              <span className="text-sm font-semibold text-slate-300">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
