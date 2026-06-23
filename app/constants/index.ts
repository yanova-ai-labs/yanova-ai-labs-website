import { Product, Solution, ContactData } from '@/types';

export const COMPANY = {
  name: 'Yanova AI Labs',
  legalName: 'Yanova Labs Pvt. Ltd.',
  domain: 'yanovalabs.com',
  tagline: 'Intelligence for Every Business',
  slogan: 'Observe. Analyze. Automate.',
  founder: 'Venkat Yanapothula',
  founderBackground:
    '12+ years in IT, Linux, VMware, AWS, Terraform, DevOps, automation, cloud infrastructure, platform engineering, and release engineering.',
};

export const PRODUCTS: Product[] = [
  {
    id: 'oneclick',
    name: 'Yanova OneClick',
    description: 'One-click infrastructure and Kubernetes deployment automation.',
    features: [
      'Kubernetes Deployment',
      'AWS Infrastructure Provisioning',
      'Terraform Automation',
      'Environment Setup',
      'Cluster Management',
      'Cost Visibility',
    ],
  },
  {
    id: 'aiops',
    name: 'Yanova AI Ops',
    description: 'AI-powered operations assistant for incidents, alerts, insights, and remediation.',
    features: [
      'Natural language queries',
      'Root cause analysis',
      'Incident summaries',
      'Infrastructure insights',
      'Automated remediation',
    ],
  },
  {
    id: 'observability',
    name: 'Yanova Observability',
    description: 'Unified logs, metrics, traces, alerts, and real-time system visibility.',
    features: [
      'Unified logs',
      'Metrics and traces',
      'Intelligent alerting',
      'System topology',
      'Root-cause hints',
    ],
  },
  {
    id: 'insights',
    name: 'Yanova Insights',
    description: 'Real-time user, product, business, and executive dashboards.',
    features: [
      'Real-time dashboards',
      'User and product metrics',
      'Revenue analytics',
      'Executive scorecards',
      'AI trend detection',
    ],
  },
  {
    id: 'compliance',
    name: 'Yanova Compliance',
    description: 'Security, governance, compliance reports, and cloud risk checks.',
    features: [
      'CIS Benchmarks',
      'Security Audits',
      'Compliance Reports',
      'Cost Optimization Reports',
    ],
  },
  {
    id: 'marketiq',
    name: 'Yanova MarketIQ',
    description: 'AI-powered stock market intelligence, portfolio tracking, alerts, and analytics.',
    features: [
      'Stock dashboards',
      'Portfolio tracking',
      'Market analytics',
      'AI-generated market insights',
      'Alerts and watchlists',
    ],
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'kubernetes-deployment',
    title: 'One-Click Kubernetes Cluster Deployment',
    description: 'Deploy production-ready Kubernetes clusters on AWS EKS in minutes',
    benefits: [
      'Reduce deployment time from hours to minutes',
      'Automatic VPC, Subnets, IAM, and monitoring setup',
      'Production-ready with logging and ingress',
      'Built-in cost visibility and optimization',
    ],
  },
  {
    id: 'infrastructure-automation',
    title: 'Infrastructure Automation',
    description: 'Automate complex infrastructure provisioning with Terraform',
    benefits: [
      'Standardized environment setup',
      'Reduced manual errors',
      'Version-controlled infrastructure',
      'Multi-cloud support',
    ],
  },
  {
    id: 'aiops',
    title: 'AI Operations',
    description: 'Intelligent incident management and root cause analysis',
    benefits: [
      'Faster incident resolution',
      'Proactive problem detection',
      'Reduced operational overhead',
      'Data-driven decisions',
    ],
  },
];

export const CONTACT: ContactData = {
  email: 'hello@yanovalabs.com',
  phone: '+1 (XXX) XXX-XXXX',
  address: 'Bangalore, India',
  social: {
    linkedin: 'https://linkedin.com/company/yanova-ai-labs',
    twitter: 'https://twitter.com/yanovalabs',
    github: 'https://github.com/yanovalabs',
  },
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
