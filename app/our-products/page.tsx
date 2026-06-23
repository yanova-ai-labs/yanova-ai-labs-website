import { PRODUCTS } from '@/constants';

export default function OurProductsPage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-[#060d18]">
        <div className="section-content">
          <div className="badge mb-5">Our Products</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-10">Enterprise Product Suite</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="card p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{product.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{product.description}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
