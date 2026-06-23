import { COMPANY } from '@/constants';
import Image from 'next/image';

export default function CorporateProfilePage() {
  return (
    <div className="bg-night-950 pt-28 md:pt-32">

      {/* Hero Section */}
      <section className="section-shell bg-hero">
        <div className="section-content grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="badge mb-5">Corporate Profile</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Building the Future of Intelligent Operations</h1>
            <p className="text-slate-300 text-lg max-w-4xl">
              Yanova AI Labs helps organizations simplify operations, accelerate innovation, and gain real-time intelligence through AI-powered automation and observability.
            </p>
            <p className="text-slate-400 mt-5 max-w-4xl">
              Under the leadership of {COMPANY.founder}, Yanova AI Labs is building the next generation of intelligent automation and observability platforms for modern enterprises.
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
            <p className="text-xs text-slate-400">Founder & CEO, Yanova AI Labs</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-shell">
        <div className="section-content grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="badge mb-4">Vision</div>
            <p className="text-white text-xl font-semibold leading-relaxed">
              To empower every business with intelligent automation, real-time insights, and AI-driven decision making.
            </p>
          </div>
          <div className="card p-8">
            <div className="badge mb-4">Mission</div>
            <p className="text-white text-xl font-semibold leading-relaxed">
              Transform complex operations into simple, intelligent, and automated experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Yanova AI Labs */}
      <section className="section-shell">
        <div className="section-content">
          <div className="badge mb-5">Why Yanova AI Labs</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12">Four Pillars of Intelligent Operations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-8">
              <h3 className="text-xl font-black text-white mb-3">Automate</h3>
              <p className="text-slate-400">Reduce manual effort through one-click workflows and intelligent automation.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-black text-white mb-3">Observe</h3>
              <p className="text-slate-400">Gain complete visibility across infrastructure, applications, and business operations.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-black text-white mb-3">Analyze</h3>
              <p className="text-slate-400">Turn operational and business data into actionable insights.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-black text-white mb-3">Accelerate</h3>
              <p className="text-slate-400">Enable teams to move faster with confidence and control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Closing Statement */}
      <section className="section-shell">
        <div className="section-content">
          <div className="card p-10 md:p-16 text-center max-w-4xl mx-auto">
            <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
              "At Yanova AI Labs, we believe the future belongs to organizations that can observe intelligently, analyze instantly, and automate confidently. Our mission is to build the platforms that make that future possible."
            </p>
            <p className="text-slate-400 font-semibold">Venkat Yanapothula</p>
            <p className="text-slate-500 text-sm">Founder & CEO, Yanova AI Labs</p>
          </div>
        </div>
      </section>

    </div>
  );
}
