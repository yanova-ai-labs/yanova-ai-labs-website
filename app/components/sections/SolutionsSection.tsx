const portfolio = [
  { name: 'Cloud Migration Acceleration', detail: 'Reduced migration cycle by 47% with automation-first workflows.' },
  { name: 'AI Ops Modernization', detail: 'Cut incident triage time by 61% using prompt-driven diagnostics.' },
  { name: 'Observability Program', detail: 'Unified 14 monitoring tools into one enterprise control plane.' },
];

export function SolutionsSection() {
  return (
    <section className="section-shell bg-[#060d18]">
      <div className="section-content">
        <div className="text-center mb-10">
          <div className="badge mb-4">Portfolio Preview</div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Enterprise Impact Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.map((item) => (
            <article key={item.name} className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{item.name}</h3>
              <p className="text-slate-400 text-sm">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
