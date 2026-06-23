const prompts = [
  'Show unhealthy pods.',
  'Why is CPU high?',
  'Generate cloud cost report.',
  'Scale worker nodes to 5.',
  'Summarize incidents from last 24 hours.',
];

export function AIOpsSection() {
  return (
    <section className="section-shell" style={{ background: 'linear-gradient(180deg, #090f1d 0%, #070c18 100%)' }}>
      <div className="section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="badge mb-5">AI Operations Intelligence</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Talk To Your <span className="gradient-text">Cloud Platform</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Yanova AI Ops transforms alerts and telemetry into actionable answers and remediation plans in seconds.
            </p>
          </div>

          <div className="card rounded-3xl p-6 space-y-3">
            {prompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:border-cyan-300/40 transition-smooth"
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
