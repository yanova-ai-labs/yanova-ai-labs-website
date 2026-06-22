# Yanova AI Labs - Website

Enterprise AI startup website for Yanova AI Labs. Built with Next.js 14, TypeScript, Tailwind CSS, and modern React patterns.

## Overview

This is the official website for Yanova AI Labs - an enterprise platform providing AI-powered infrastructure automation, operations management, and analytics solutions.

**Brand**: Intelligence for Every Business  
**Slogan**: Observe. Analyze. Automate.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Code Quality**: ESLint, Prettier
- **Deployment**: Vercel

## Project Structure

```
yanova-ai-labs/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Footer components
│   │   ├── sections/        # Page sections (Hero, Features, Products, CTA)
│   │   ├── ui/              # Reusable UI components (Button, Card)
│   │   └── common/          # Common components
│   ├── constants/           # App constants and data
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── (pages)/             # Route groups (future expansion)
│   ├── products/            # Products page
│   ├── solutions/           # Solutions page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── .github/                 # GitHub configuration
├── .vscode/                 # VS Code settings and tasks
└── package.json
```

## Pages

- **Home** (`/`) - Hero, features, product showcase, CTA
- **Products** (`/products`) - Complete product suite
- **Solutions** (`/solutions`) - Industry solutions and use cases
- **About** (`/about`) - Company story and founder info
- **Contact** (`/contact`) - Contact form and information

## Brand Colors

- **Deep Navy Blue**: #0F172A
- **Electric Cyan**: #00D9FF
- **White**: #FFFFFF
- **Silver Gray**: #94A3B8

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yanovalabs/website.git
   cd yanova-ai-labs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

The site hot-reloads as you make changes to files.

### Build

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Key Features

✅ **Responsive Design** - Mobile-first design for all devices  
✅ **TypeScript** - Full type safety across the codebase  
✅ **Component Architecture** - Reusable, well-organized components  
✅ **Tailwind CSS** - Utility-first styling with brand colors  
✅ **SEO Optimized** - Meta tags, structured data, and best practices  
✅ **Performance** - Code splitting, lazy loading, optimized images  
✅ **Accessibility** - WCAG compliant components  

## Development Guidelines

### Code Quality Standards

- Maintain TypeScript strict mode
- Write functional components with hooks
- Keep components small and focused
- Use meaningful names for variables and functions
- Add proper error handling

### Component Best Practices

- Use compound component pattern for complex UI
- Extract reusable logic into custom hooks
- Prop drilling: max 2 levels, use context for deeper props
- Memoize expensive computations

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Reference brand colors from constants
- Dark mode support where applicable

### Commit Guidelines

- Always validate builds before committing
- Use clear, descriptive commit messages
- Test responsive design across devices
- Ensure no console errors or warnings

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables if needed
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## Environment Variables

Currently no environment variables required. Add them as needed to `.env.local`.

## Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Build and ensure no errors: `npm run build`
4. Run linter: `npm run lint`
5. Commit: `git commit -am 'Add new feature'`
6. Push: `git push origin feature/new-feature`
7. Create a Pull Request

## Performance Optimization

- Next.js automatic code splitting
- Image optimization with `next/image`
- Font optimization with `next/font`
- CSS minification with Tailwind
- Tree shaking and dead code elimination

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

Proprietary - © 2026 Yanova Labs Pvt. Ltd.

## Support

For issues and questions:
- Email: hello@yanovalabs.com
- GitHub Issues: [Create an issue](https://github.com/yanovalabs/website/issues)

