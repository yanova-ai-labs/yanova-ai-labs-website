const portfolioItems = [
  {
    name: 'Global SaaS Reliability Program',
    result: 'Improved uptime from 99.1% to 99.95% with AI-assisted observability workflows.',
  },
  {
    name: 'FinTech Cloud Governance Initiative',
    result: 'Reduced non-compliant infrastructure changes by 72% using policy-driven automation.',
  },
  {
    name: 'E-commerce Deployment Acceleration',
    result: 'Cut release cycle from days to under 90 minutes using OneClick pipelines.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-[#060e19]">
        <div className="section-content">
          <div className="badge mb-5">Portfolio</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-10">Selected Impact Stories</h1>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolioItems.map((item) => (
              <article key={item.name} className="card p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{item.name}</h2>
                <p className="text-slate-400 text-sm">{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
