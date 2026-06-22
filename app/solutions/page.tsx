'use client';

import { SOLUTIONS } from '@/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
            Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Real-world use cases and industry solutions
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {SOLUTIONS.map((solution) => (
              <Card key={solution.id} hover interactive className="relative overflow-hidden">
                {/* Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                
                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">Benefits:</p>
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-cyan-500 mr-2 font-bold">→</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <Link href="/contact">
                    <Button variant="ghost" size="sm" className="text-blue-900 hover:text-blue-800">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 md:p-16 text-center border border-blue-100">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                Our team can work with you to design and implement tailored solutions for your specific enterprise needs. Let&apos;s build something great together.
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
