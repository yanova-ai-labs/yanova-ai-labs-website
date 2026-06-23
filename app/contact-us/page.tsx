'use client';

import { useState } from 'react';
import { CONTACT } from '@/constants';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-night-950 pt-28 md:pt-32">
      <section className="section-shell bg-hero">
        <div className="section-content max-w-4xl">
          <div className="badge mb-5">Contact Us</div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Start Your AI Transformation</h1>
          <p className="text-slate-300 text-lg mb-8">Email: {CONTACT.email} | Support: {CONTACT.phone}</p>

          <form
            className="card p-6 md:p-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted && <p className="text-green-300 text-sm">Thanks. We will reach out shortly.</p>}
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300" />
              <input required type="email" placeholder="Work Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300" />
            </div>
            <input required placeholder="Company Name" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300" />
            <textarea required placeholder="Tell us your use case" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 min-h-32" />
            <button type="submit" className="btn-primary px-7 py-3 rounded-xl text-sm">Talk to Us</button>
          </form>
        </div>
      </section>
    </div>
  );
}
