import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section-shell bg-hero">
      <div className="section-content text-center">
        <div className="card p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">Transform Your Operations With AI Intelligence</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-8">
            At Yanova AI Labs, we believe the future belongs to organizations that can observe intelligently,
            analyze instantly, and automate confidently. Our mission is to build the platforms that make
            that future possible.
          </p>
          <Link href="/contact-us" className="btn-primary px-8 py-3 rounded-xl text-sm">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
