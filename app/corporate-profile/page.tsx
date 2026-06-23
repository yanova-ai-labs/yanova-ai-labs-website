import { COMPANY } from '@/constants';
import Image from 'next/image';

export default function CorporateProfilePage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-hero">
        <div className="section-content grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="badge mb-5">Corporate Profile</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5">{COMPANY.name}</h1>
            <p className="text-slate-300 text-lg max-w-4xl">
              {COMPANY.name} is an AI-powered enterprise product company focused on automation, observability, cloud operations,
              analytics, and intelligent decision-making.
            </p>
            <p className="text-slate-400 mt-5 max-w-4xl">
              Led by founder {COMPANY.founder}, Yanova AI Labs builds practical AI products for automation,
              observability, analytics, and business intelligence.
            </p>
          </div>

          <div className="card p-3 md:p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/founder-venkat.jpg"
                alt="Venkat Yanapothula"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-white">Venkat Yanapothula</p>
            <p className="text-xs text-slate-400">Founder, Yanova AI Labs</p>
          </div>
        </div>
      </section>
    </div>
  );
}
