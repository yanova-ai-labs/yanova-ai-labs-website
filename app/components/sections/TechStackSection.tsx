const techGroups = [
  { category: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
  { category: 'DevOps', items: ['Terraform', 'Docker', 'Kubernetes'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'Node.js'] },
  { category: 'Frontend', items: ['React', 'TypeScript'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis'] },
  { category: 'Observability', items: ['Prometheus', 'Grafana'] },
  { category: 'AI', items: ['OpenAI', 'AI Agents'] },
];

export function TechStackSection() {
  return (
    <section className="section-shell bg-[#08101f]">
      <div className="section-content">
        <div className="text-center mb-10">
          <div className="badge mb-4">Technology Index</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">We Deliver Our Best Solution With Modern Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {techGroups.map((group) => (
            <article key={group.category} className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
