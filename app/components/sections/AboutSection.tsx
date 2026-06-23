import { COMPANY } from '@/constants';

const highlights = [
  { title: '12+ Years Experience', detail: 'Cloud, DevOps, and platform engineering depth' },
  { title: 'AI First Platform', detail: 'Intelligence embedded into operations and analytics' },
  { title: 'Enterprise Grade', detail: 'Built for reliability, governance, and compliance' },
  { title: 'Quick Support', detail: 'Fast response model for mission-critical teams' },
];

export function AboutSection() {
  return (
    <section className="section-shell bg-[#070f1d]">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="badge mb-5">Awarded Vision for AI-Powered Automation</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">Corporate Profile</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Led by founder {COMPANY.founder}, Yanova AI Labs builds practical AI products for automation,
              observability, analytics, and business intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <article key={item.title} className="card p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
