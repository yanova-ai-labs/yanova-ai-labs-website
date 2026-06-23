import Link from 'next/link';

const solutions = [
  ['FinTech', 'Secure platform operations with compliance-ready controls.'],
  ['Healthcare', 'HIPAA-aware infrastructure visibility and incident response.'],
  ['E-commerce', 'High-scale observability with release and cost intelligence.'],
  ['Manufacturing', 'Cloud-to-edge automation and predictive operations.'],
  ['SaaS', 'Tenant-aware analytics and deployment automation workflows.'],
  ['Cloud Teams', 'Unified cloud governance and infrastructure optimization.'],
  ['DevOps Teams', 'Faster delivery with one-click Kubernetes platform setups.'],
  ['Startups', 'Enterprise-grade foundations with startup-speed execution.'],
];

export default function SolutionsPage() {
  return (
    <div className="bg-night-950 pt-20">
      <section className="section-shell bg-hero">
        <div className="section-content text-center">
          <div className="badge mb-6">Solutions</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Industry Solutions That Scale</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Every section of the Yanova platform is designed as a deployable capability for enterprise teams.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'linear-gradient(180deg, #080e1d 0%, #050812 100%)' }}>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map(([name, desc]) => (
              <div key={name} className="card rounded-2xl p-6">
                <h2 className="text-2xl font-black text-white mb-3">{name}</h2>
                <p className="text-slate-300">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
