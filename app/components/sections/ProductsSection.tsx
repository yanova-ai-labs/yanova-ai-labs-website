import Link from 'next/link';
import { Activity, BarChart3, Bot, ChartLine, Radar, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/constants';

const iconMap = {
  oneclick: Radar,
  aiops: Bot,
  observability: Activity,
  insights: BarChart3,
  compliance: ShieldCheck,
  marketiq: ChartLine,
} as const;

export function ProductsSection() {
  return (
    <section className="section-shell bg-[#060d1a]">
      <div className="section-content">
        <div className="text-center mb-12">
          <div className="badge mb-4">Products & Services</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            We Provide a Wide Variety of AI and Automation Products
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Productized capabilities designed for enterprise automation, observability, and decision intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.id as keyof typeof iconMap] ?? Activity;
            return (
              <article key={product.id} className="card p-6">
                <Icon className="w-9 h-9 text-cyan-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-5">{product.description}</p>
                <Link href="/our-products" className="text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition-smooth">
                  Know More
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
