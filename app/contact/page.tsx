'use client';

import { useState } from 'react';
import { CONTACT } from '@/constants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-night-950 pt-20">
      <section className="section-shell bg-hero">
        <div className="section-content text-center">
          <div className="badge mb-6">Contact</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Let&apos;s Build Your AI Platform</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Share your goals and we will propose an enterprise-ready automation, observability, and AI Ops roadmap.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #050812 100%)' }}>
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            <div className="card p-6">
              <p className="text-sm uppercase tracking-widest text-cyan-300 mb-2">Email</p>
              <p className="text-slate-200">{CONTACT.email}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm uppercase tracking-widest text-cyan-300 mb-2">Address</p>
              <p className="text-slate-200">{CONTACT.address}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm uppercase tracking-widest text-cyan-300 mb-2">Response Time</p>
              <p className="text-slate-200">Within 24 hours</p>
            </div>
          </div>

          <form
            className="card rounded-3xl p-6 md:p-8 space-y-5 max-w-3xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <h2 className="text-3xl font-black text-white">Request Demo</h2>

            {submitted && <p className="text-sm text-green-300">Thanks. Your request has been captured. We will contact you shortly.</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Full name" required />
              <input type="email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Work email" required />
            </div>
            <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Company" required />
            <textarea className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300 min-h-36" placeholder="What are you trying to automate?" required />

            <button type="submit" className="w-full rounded-xl px-6 py-3 btn-primary">Send Request</button>
          </form>
        </div>
      </section>
    </div>
  );
}
