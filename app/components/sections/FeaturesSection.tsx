'use client';

import { Card } from '@/components/ui/Card';

const features = [
  {
    title: 'Infrastructure Automation',
    description: 'Provision and manage cloud infrastructure with a single click',
    icon: '⚙️',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'AI Operations',
    description: 'Intelligent incident detection and automated remediation',
    icon: '🤖',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Real-time Observability',
    description: 'Unified logs, metrics, traces, and AI-driven anomaly detection',
    icon: '👁️',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Business Analytics',
    description: 'Executive dashboards with real-time product and revenue metrics',
    icon: '📊',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    title: 'Security & Compliance',
    description: 'CIS benchmarks, security audits, and compliance reporting',
    icon: '🔒',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Market Intelligence',
    description: 'AI-powered stock analysis and portfolio tracking',
    icon: '📈',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            Platform Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Yanova
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Enterprise-grade AI solutions built for operational excellence and scalability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} hover gradient interactive className="relative overflow-hidden group">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Accent line */}
              <div className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
