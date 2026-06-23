'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Intelligence for Every Business',
    subtitle: 'AI-powered automation and operations intelligence for modern enterprises.',
    cta: 'Explore Products',
    href: '/our-products',
  },
  {
    title: 'One-Click Infrastructure Automation',
    subtitle: 'Deploy Kubernetes clusters and cloud infrastructure in minutes, not days.',
    cta: 'Request Demo',
    href: '/contact-us',
  },
  {
    title: 'Observe. Analyze. Automate.',
    subtitle: 'Real-time metrics, AI insights, and intelligent automation from one platform.',
    cta: 'Explore Products',
    href: '/our-products',
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-shell bg-hero pt-28 md:pt-32 min-h-[90vh] flex items-center">
      <div className="section-content w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-7">
            <div className="badge">Enterprise AI Platform</div>

            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.42, ease: 'easeOut' }}
                >
                  <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-white mb-4">{slides[active].title}</h1>
                  <p className="text-slate-300 text-lg md:text-xl max-w-xl">{slides[active].subtitle}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={slides[active].href} className="btn-primary px-7 py-3 rounded-xl text-sm">
                {slides[active].cta}
              </Link>
              <Link href="/contact-us" className="btn-outline px-7 py-3 rounded-xl text-sm">
                Request Demo
              </Link>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`h-2.5 rounded-full transition-smooth ${idx === active ? 'w-9 bg-cyan-300' : 'w-2.5 bg-white/25'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-4">Platform Pulse</p>
            <div className="space-y-3 text-sm text-slate-300 font-mono">
              <p>$ yanova oneclick deploy --target prod-cluster</p>
              <p className="text-emerald-300">✓ VPC, Subnets, IAM Roles configured</p>
              <p className="text-emerald-300">✓ EKS cluster + node groups online</p>
              <p className="text-emerald-300">✓ Monitoring, logging, ingress enabled</p>
              <p className="text-cyan-300">→ Estimated go-live time: 6m 40s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
