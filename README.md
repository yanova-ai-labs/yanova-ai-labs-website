# Yanova AI Labs — Official Website

> **Intelligence for Every Business**  
> *Observe. Analyze. Automate.*

The official website for **Yanova AI Labs** — an enterprise AI platform for infrastructure automation, AI operations, observability, analytics, and compliance.

🌐 **Live Site:** [yanovalabs.com](https://yanovalabs.com)  
📦 **Repository:** [github.com/yanova-ai-labs/yanova-ai-labs-website](https://github.com/yanova-ai-labs/yanova-ai-labs-website)  
🚀 **Deployed on:** [Vercel](https://vercel.com/yanova-ai-labs/yanova-ai-labs-website)

---

## About

Founded by **Venkat Yanapothula** (12+ years in DevOps, Cloud, and Automation), Yanova AI Labs builds AI-powered enterprise tools that eliminate manual infrastructure work, reduce MTTR, and deliver real-time business intelligence.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Runtime | React 19 |
| Deployment | Vercel |
| Domain | GoDaddy → yanovalabs.com |
| Version Control | GitHub |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Products, OneClick, Solutions, AI Platform, Tech Stack, Trust, CTA |
| `/products` | Full product catalog with feature breakdowns |
| `/solutions` | Enterprise solutions by industry |
| `/about` | Company story, founder background, values |
| `/contact` | Contact form and company info |

---

## Home Page Sections

1. **Hero** — Animated terminal, floating cards, "Intelligence for Every Business"
2. **About** — Company intro, 4 stats (12+ yrs, AI First, Enterprise, Global)
3. **Products** — All 6 products in colored icon cards
4. **OneClick** — Step visualization + EKS cluster architecture diagram
5. **Solutions** — 6 industry cards (Fintech, Healthcare, E-commerce, Manufacturing, SaaS)
6. **AI Platform** — AI capabilities showcase with animated core
7. **Tech Stack** — 13 technology badges with color indicators
8. **Trust & Benefits** — SOC 2, ISO 27001, GDPR, HIPAA + customer impact stats
9. **CTA** — "Ready to Transform Your Business?" with gradient border card

---

## Product Suite

| Product | Description |
|---|---|
| **Yanova OneClick** | One-click Kubernetes/EKS cluster deployment |
| **Yanova AI Ops** | Natural language ops, root cause analysis, automated remediation |
| **Yanova Observability** | Unified logs, metrics, traces, AI anomaly detection |
| **Yanova Insights** | Real-time executive dashboards and revenue analytics |
| **Yanova Compliance** | CIS benchmarks, security audits, compliance reports |
| **Yanova MarketIQ** | AI-powered stock analysis, portfolio tracking |

---

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky nav, mobile menu
│   │   └── Footer.tsx         # Full footer with product/company links
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProductsSection.tsx
│       ├── OneClickSection.tsx
│       ├── SolutionsSection.tsx
│       ├── AIPlatformSection.tsx
│       ├── TechStackSection.tsx
│       ├── TrustSection.tsx
│       └── CTASection.tsx
├── constants/index.ts          # Products, solutions, contact data
├── types/index.ts              # TypeScript types
├── (pages)/
│   ├── products/page.tsx
│   ├── solutions/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── robots.ts                   # SEO robots.txt
├── sitemap.ts                  # XML sitemap
├── globals.css                 # Design system, animations, utility classes
├── layout.tsx                  # Root layout with metadata
└── page.tsx                    # Home page
```

---

## Design System

**Theme:** Dark premium enterprise (inspired by Datadog, OpenAI, Stripe)

| Token | Value |
|---|---|
| Background | `#060b14` |
| Surface | `#080d1a` |
| Cyan (primary) | `#00d4ff` |
| Purple (accent) | `#7c3aed` |
| Text primary | `#f1f5f9` |
| Text muted | `#94a3b8` |

**CSS Utilities:** `.card`, `.btn-primary`, `.btn-outline`, `.glass`, `.glass-cyan`, `.badge`, `.gradient-text`, `.gradient-text-static`, `.bg-grid`, `.bg-dots`

**Animations:** `fadeUp`, `float`, `blob`, `gradientShift`, `glow-pulse`, `scanLine`, `spin`

---

## Development

### Prerequisites
- Node.js 22+ and npm

### Setup

```bash
git clone https://github.com/yanova-ai-labs/yanova-ai-labs-website.git
cd yanova-ai-labs-website
npm install
```

### Commands

```bash
npm run dev      # Start development server → http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

The project auto-deploys to **Vercel** on every push to `main`.

### DNS Configuration (GoDaddy)

| Record | Type | Value |
|---|---|---|
| `@` | A | `76.76.21.21` (Vercel) |
| `www` | CNAME | `cname.vercel-dns.com` |

### Environment Variables
None required for the current static site. Add to `.env.local` as features expand.

---

## SEO

- `metadataBase` set to `https://yanovalabs.com`
- Canonical URLs on all pages
- OpenGraph + Twitter Card metadata
- Auto-generated `/sitemap.xml` and `/robots.txt`

---

## Founder

**Venkat Yanapothula**  
Founder & CEO, Yanova Labs Pvt. Ltd.  
12+ years in Linux, AWS, Kubernetes, Terraform, DevOps, Cloud Infrastructure, Platform Engineering, and Release Engineering.

---

## License

Proprietary — © 2026 Yanova Labs Pvt. Ltd. All rights reserved.

**Contact:** [hello@yanovalabs.com](mailto:hello@yanovalabs.com)
