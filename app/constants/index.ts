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

export const TOP_BAR = {
  sales: '+1 3802849218',
  support: '+91 3802849218',
  email: 'hello@yanovalabs.com',
};

export const PRODUCTS: Product[] = [
  {
    id: 'oneclick',
    name: 'Yanova OneClick',
    description: 'Deploy production-ready cloud and Kubernetes environments in minutes.',
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
    description: 'Detect issues, identify root causes, and automate remediation using AI.',
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
    description: 'Monitor logs, metrics, traces, and alerts from a single platform.',
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
    description: 'Track users, products, revenue, and operational performance through intelligent dashboards.',
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
    description: 'AI-powered stock insights, portfolio monitoring, and market intelligence.',
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

export const SERVICES = [
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    description: 'Create internal developer platforms with secure golden paths and policy controls.',
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description: 'Build delivery pipelines with AI-assisted release intelligence and rollback automation.',
  },
  {
    id: 'cloud-operations',
    title: 'Cloud Operations',
    description: 'Improve reliability, reduce waste, and standardize operations across cloud environments.',
  },
];

export const CONTACT: ContactData = {
  email: 'hello@yanovalabs.com',
  phone: '+91 3802849218',
  address: 'Bangalore, India',
  social: {
    linkedin: 'https://linkedin.com/company/yanova-ai-labs',
    twitter: 'https://twitter.com/yanovalabs',
    github: 'https://github.com/yanovalabs',
  },
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Corporate Profile', href: '/corporate-profile' },
  { label: 'Our Products', href: '/our-products' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const POLICY_LINKS = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Cookies Policy', href: '#' },
];
