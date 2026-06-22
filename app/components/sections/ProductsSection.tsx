'use client';

import Link from 'next/link';
import { PRODUCTS } from '@/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ProductsSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-blue-900 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Product Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Complete AI-powered tools for infrastructure automation, operations, and analytics
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((product, idx) => (
            <Card key={product.id} hover interactive className="relative overflow-hidden group flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon/Badge */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-cyan-400 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
                {idx + 1}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {product.features.slice(0, 3).map((feature, fidx) => (
                  <li key={fidx} className="flex items-start text-sm text-gray-700">
                    <span className="text-cyan-500 mr-2 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link href={`/products?id=${product.id}`} className="mt-auto">
                <Button variant="outline" size="md" className="w-full text-blue-900 border-blue-200 hover:border-blue-900">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="gradient">
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
