const stats = [
  '12+ Years Experience',
  '6+ Product Lines',
  '80% Faster Deployments',
  '60% Reduced Downtime',
  '100% Visibility & Control',
];

export function AIPlatformSection() {
  return (
    <section className="section-shell bg-[#081122]">
      <div className="section-content">
        <div className="text-center mb-10">
          <div className="badge mb-4">Business Growth / Metrics</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Let&apos;s Check Our Product Vision and Business Impact</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((item) => (
            <article key={item} className="card p-6 text-center">
              <p className="text-xl md:text-2xl font-black gradient-text-static">{item.split(' ')[0]}</p>
              <p className="text-sm text-slate-300 mt-2">{item.split(' ').slice(1).join(' ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
