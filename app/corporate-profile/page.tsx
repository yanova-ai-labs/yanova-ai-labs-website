import { COMPANY } from '@/constants';

export default function CorporateProfilePage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-hero">
        <div className="section-content">
          <div className="badge mb-5">Corporate Profile</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">{COMPANY.name}</h1>
          <p className="text-slate-300 text-lg max-w-4xl">
            {COMPANY.name} is an AI-powered enterprise product company focused on automation, observability, cloud operations,
            analytics, and intelligent decision-making.
          </p>
          <p className="text-slate-400 mt-5 max-w-4xl">Founded by {COMPANY.founder}. {COMPANY.founderBackground}</p>
        </div>
      </section>
    </div>
  );
}
