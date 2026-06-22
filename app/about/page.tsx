'use client';

import { COMPANY } from '@/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
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
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Yanova</h1>
          <p className="text-xl text-blue-100 font-light">{COMPANY.tagline}</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Story section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by {COMPANY.founder}, a seasoned infrastructure and DevOps expert with 12+ years of experience,
                {COMPANY.name} was built to solve real-world enterprise operational challenges.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                After years of managing complex infrastructure at scale, we realized that enterprises needed a better way
                to automate operations, reduce manual effort, and gain real-time visibility into their systems. That&apos;s why
                we created {COMPANY.name}.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower enterprises with AI-powered automation tools that make infrastructure management,
                operations, and analytics simpler and more efficient.
              </p>
            </div>

            {/* Founder Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet the Founder</h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-blue-900 to-cyan-400 rounded-2xl shadow-lg"></div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{COMPANY.founder}</h4>
                  <p className="text-cyan-600 font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    DevOps expert with deep expertise in Linux administration, AWS, Kubernetes, cloud infrastructure automation, and platform engineering. Passionate about building tools that simplify complex operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card hover interactive className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                  <p className="text-gray-600">Constantly pushing the boundaries of AI and automation to solve enterprise challenges</p>
                </Card>
                <Card hover interactive className="text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Reliability</h4>
                  <p className="text-gray-600">Enterprise-grade solutions built for production environments and mission-critical systems</p>
                </Card>
                <Card hover interactive className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Simplicity</h4>
                  <p className="text-gray-600">Making complex operations simple and accessible to all enterprises</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 font-light">
            Help us transform enterprise operations with AI and automation.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
