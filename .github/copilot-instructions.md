# Yanova AI Labs Website - Development Guidelines

## Project Overview
Enterprise AI startup website for Yanova AI Labs with world-class design and functionality. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Architecture & Standards

### Component Architecture
- Use functional components with React hooks
- Keep components small and focused (single responsibility)
- Use TypeScript for type safety
- Implement compound components pattern for complex UI
- Create reusable component library for design consistency

### Styling
- Tailwind CSS for all styling
- Brand colors:
  - Deep Navy Blue: #0F172A
  - Electric Cyan: #00D9FF
  - White: #FFFFFF
  - Silver Gray: #94A3B8
- Mobile-first responsive design
- Dark mode support where applicable

### Page Structure
- Home: Hero, Product Vision, Product Suite, Why Yanova, Founder Story, Contact
- Products: Yanova OneClick, Yanova AI Ops, Yanova Insights, Yanova Observability, Yanova Compliance, Yanova MarketIQ
- Solutions: Enterprise use cases
- About: Company story and team
- Contact: Contact form and information

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Responsive design on all breakpoints
- Performance optimization (lazy loading, code splitting)
- SEO optimization (meta tags, structured data)

### Development Process
1. Always validate builds before committing
2. Maintain enterprise-grade code quality
3. Test responsive design across devices
4. Create clean, production-ready UI
5. Follow modern React best practices

## Development Rules
- Always validate builds before committing
- Maintain enterprise-grade code quality
- Follow modern React architecture
- Use reusable components
- Write scalable code
- Generate clean UI
- Optimize performance
- Create production-ready implementations
- Test responsive design across all breakpoints
- Use Tailwind CSS for all styling

## Quick Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Folder Structure
```
app/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections
│   ├── ui/              # UI components (Button, Card, etc)
│   └── common/          # Common components
├── (pages)/             # Route groups for future expansion
├── products/            # Products page
├── solutions/           # Solutions page
├── about/               # About page
├── contact/             # Contact page
├── constants/           # App constants and data
├── types/               # TypeScript types
├── utils/               # Utility functions
├── hooks/               # Custom hooks
├── layout.tsx           # Root layout
├── page.tsx             # Home page
└── globals.css          # Global styles
```

## Deployment
- Deploy to Vercel for production
- Use environment variables for sensitive data
- Test builds locally before deploying
- Monitor performance metrics
