import Link from 'next/link';

const resources = [
  {
    title: 'AI Ops Playbook',
    description: 'A practical guide for incident response, automation, and reliability engineering with AI.',
  },
  {
    title: 'OneClick Kubernetes Guide',
    description: 'Blueprint for deploying production-ready clusters with governance and observability.',
  },
  {
    title: 'Cloud Cost Intelligence',
    description: 'Methods to reduce waste, optimize workloads, and forecast spend with confidence.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-night-950 pt-20">
      <section className="section-shell bg-hero">
        <div className="section-content text-center">
          <div className="badge mb-6">Resources / Blog Placeholder</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Learn, Build, and Scale With Yanova</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            This section is ready for blogs, case studies, whitepapers, and product updates.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #050812 100%)' }}>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((item) => (
              <article key={item.title} className="card rounded-2xl p-6">
                <h2 className="text-2xl font-black text-white mb-3">{item.title}</h2>
                <p className="text-slate-300 mb-5">{item.description}</p>
                <span className="text-sm text-cyan-300">Coming soon</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base btn-primary">
              Request Product Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
