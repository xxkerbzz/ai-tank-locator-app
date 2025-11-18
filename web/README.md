# SepticSleuth - AI Tank Locator Landing Page

## Overview
A modern, production-ready Next.js landing page for SepticSleuth, an AI-powered septic tank location service for professional service providers.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Performance**: Static Site Generation (SSG)

## Project Structure
```
web/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles & Tailwind imports
├── components/
│   ├── Hero.tsx             # Hero section with stats
│   ├── Features.tsx         # 8 key features grid
│   ├── HowItWorks.tsx       # 4-step process
│   ├── Pricing.tsx          # 3 pricing tiers
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Features
✅ **Fully Responsive** - Mobile-first design
✅ **SEO Optimized** - Complete metadata, Open Graph, Twitter cards
✅ **Accessible** - Semantic HTML, proper ARIA labels
✅ **Performance** - 87.4 kB First Load JS, static generation
✅ **Modern Design** - Blue/green gradient theme, professional B2B SaaS aesthetic
✅ **Modular Components** - Reusable, maintainable code structure

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Page Sections

1. **Hero** - Main value proposition with 3 key stats (21M+ homes, 15min jobs, 95% accuracy)
2. **Features** - 8 feature cards highlighting core capabilities
3. **How It Works** - 4-step process flow
4. **Pricing** - 3 subscription tiers (Starter $49, Pro $99, Enterprise $250)
5. **Testimonials** - 3 customer success stories
6. **CTA** - Final conversion section
7. **Footer** - Company info and links

## Design System

### Colors
- **Primary**: Blue (#2563eb to #1e40af)
- **Secondary**: Green (#059669)
- **Backgrounds**: White, Gray-50, Gray-100, Gray-900
- **Text**: Gray-900, Gray-600, White

### Typography
- **Headings**: Bold, 2xl-6xl sizes
- **Body**: Regular, lg-xl sizes
- **Font**: System fonts (antialiased)

## SEO Configuration
All metadata configured in `app/layout.tsx`:
- Title & description
- Keywords
- Open Graph tags
- Twitter cards
- Viewport settings
- Robots directives

## Browser Support
Modern browsers with ES2020+ support (Chrome, Firefox, Safari, Edge)

## License
Proprietary - SepticSleuth 2025
