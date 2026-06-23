const workflow = ['Select Cloud', 'Configure Cluster', 'Click Deploy', 'Cluster Ready'];

const stack = [
  'AWS EKS',
  'VPC',
  'Subnets',
  'IAM Roles',
  'Node Groups',
  'Monitoring',
  'Logging',
  'Ingress',
  'Cost Dashboard',
  'Security Checks',
];

export function OneClickSection() {
  return (
    <section className="section-shell bg-[#050b15]">
      <div className="section-content">
        <div className="text-center mb-10">
          <div className="badge mb-4">Yanova OneClick</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">One-Click Kubernetes Cluster Deployment</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <p className="text-xs uppercase tracking-wider text-cyan-300 mb-4">Workflow</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-500 mb-2">Step {index + 1}</p>
                  <p className="text-white font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <p className="text-xs uppercase tracking-wider text-cyan-300 mb-4">Included Components</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-lg text-xs border border-cyan-300/20 bg-cyan-400/10 text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
