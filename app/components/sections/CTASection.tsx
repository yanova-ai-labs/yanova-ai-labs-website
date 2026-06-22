'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/constants';

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900">
        {/* Animated blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
          Ready to Transform?
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform <br className="hidden md:inline" />
          Your Operations?
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Join enterprise teams using {COMPANY.name} to automate infrastructure, reduce manual effort, and gain real-time visibility.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              Get Started Free
            </Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 font-semibold">
              Explore Platform
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm mb-4 font-medium">Trusted by Leading Enterprises</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-24 bg-white/10 rounded-lg backdrop-blur-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
