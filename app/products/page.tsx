import Link from 'next/link';
import { PRODUCTS } from '@/constants';

export default function ProductsPage() {
  return (
    <div className="bg-night-950 pt-20">
      <section className="section-shell bg-hero">
        <div className="section-content text-center">
          <div className="badge mb-6">Products</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Product Suite For Modern Enterprises</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">Automation, AI Ops, observability, analytics, compliance, and market intelligence in one ecosystem.</p>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #050812 100%)' }}>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="card rounded-2xl p-6 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">{product.id}</p>
                <h2 className="text-2xl font-black text-white mb-3">{product.name}</h2>
                <p className="text-slate-400 mb-5">{product.description}</p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 btn-outline text-sm">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
