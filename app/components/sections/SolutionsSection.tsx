const industries = [
  { icon:'🏦', name:'Fintech', desc:'Secure, compliant infrastructure' },
  { icon:'🏥', name:'Healthcare', desc:'HIPAA-ready solutions' },
  { icon:'🛒', name:'E-commerce', desc:'Scalable, high availability' },
  { icon:'🏭', name:'Manufacturing', desc:'IoT integration & automation' },
  { icon:'💼', name:'SaaS', desc:'Multi-tenant architecture' },
  { icon:'⭐', name:'More', desc:'Custom solutions for you' },
];

export function SolutionsSection() {
  return (
    <section className="relative py-24 bg-[#080d1a] overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-14">
          <div className="badge mb-5">Solutions</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Enterprise AI solutions tailored for your industry&apos;s unique challenges and compliance requirements.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map(ind => (
            <div key={ind.name} className="card rounded-2xl p-5 text-center group hover:border-cyan-400/30 transition-smooth cursor-pointer">
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{ind.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1">{ind.name}</h3>
              <p className="text-xs text-slate-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
