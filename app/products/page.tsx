'use client';

import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ProductsPage() {
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
            Our Products
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Complete suite of AI-powered enterprise solutions
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {PRODUCTS.map((product, idx) => (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Product {idx + 1}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center text-gray-700 font-medium">
                        <span className="text-cyan-500 mr-3 font-bold">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="gradient" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-900 to-cyan-500 rounded-3xl h-72 md:h-96 hover-lift shadow-glow-blue"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact our team to schedule a demo or start your free trial.</p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
