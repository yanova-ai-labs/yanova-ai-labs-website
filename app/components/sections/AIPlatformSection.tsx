const metrics = [
  { label: 'Active Users', value: '12,482', trend: '+8.2%' },
  { label: 'Cluster Health', value: '99.94%', trend: '+0.4%' },
  { label: 'CPU Usage', value: '63%', trend: '-3.1%' },
  { label: 'Memory Usage', value: '58%', trend: '+1.9%' },
  { label: 'Deployment Status', value: 'Healthy', trend: '42 prod today' },
  { label: 'Cost Forecast', value: '$84.2k', trend: '-11.7%' },
  { label: 'Open Alerts', value: '7', trend: '-23%' },
  { label: 'AI Recommendations', value: '19', trend: '5 critical' },
];

export function AIPlatformSection() {
  return (
    <section className="section-shell" style={{ background: 'linear-gradient(180deg, #060b14 0%, #0a0f1f 100%)' }}>
      <div className="section-content">
        <div className="text-center mb-14">
          <div className="badge mb-5">Metrics Dashboard</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Real-Time Enterprise <span className="gradient-text">Control Center</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Track infrastructure health, cloud spending, incidents, and AI-generated actions from one unified dashboard.
          </p>
        </div>

        <div className="card rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{item.label}</p>
                <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                <p className="text-xs text-cyan-300">{item.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            <div className="rounded-2xl border border-cyan-400/20 bg-[#0c1628] p-5">
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Deployments</p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between"><span>api-prod-v1.34</span><span className="text-green-400">Success</span></div>
                <div className="flex items-center justify-between"><span>worker-stream-v2.11</span><span className="text-yellow-300">In Progress</span></div>
                <div className="flex items-center justify-between"><span>payments-service-v3.07</span><span className="text-green-400">Success</span></div>
              </div>
            </div>

            <div className="rounded-2xl border border-purple-400/20 bg-[#120f24] p-5">
              <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">AI Recommendations</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Scale analytics workers from 4 to 6 during peak window.</li>
                <li>• Reduce idle EBS volumes in staging to save 12% cost.</li>
                <li>• Restart pod aiops-router-7f9 due to memory leak pattern.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
