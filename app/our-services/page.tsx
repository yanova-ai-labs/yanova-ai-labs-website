import { SERVICES } from '@/constants';

export default function OurServicesPage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-[#07111f]">
        <div className="section-content">
          <div className="badge mb-5">Our Services</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-10">AI and Automation Services</h1>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <article key={service.id} className="card p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
