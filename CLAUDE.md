# CLAUDE.md

This file provides context for AI assistants working on the SIG Solutions codebase.

## Project Overview

SIG Solutions is a corporate marketing website for a hybrid BPO (Business Process Outsourcing) company based in Pretoria, South Africa. The site is a statically exported Next.js application deployed to GitHub Pages. It has no backend, no CMS, and no API routes — all content is hardcoded in `src/lib/data.ts`.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export via `output: 'export'`)
- **Language:** TypeScript 5.6 (strict mode)
- **UI:** React 18, Tailwind CSS 3.4, Framer Motion 11.15
- **Icons:** Lucide React (mapped via `src/lib/icons.ts`)
- **Fonts:** DM Sans (headings), Plus Jakarta Sans (body) — loaded from Google Fonts
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Node version:** 20 (specified in CI)

## Quick Reference Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (outputs to out/)
npm run lint     # Run Next.js ESLint
```

**Always run `npm run build` before pushing** to ensure the static export succeeds. The build must complete without errors for deployment to work.

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, FloatingCTA, metadata)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles (Tailwind directives + custom CSS)
│   ├── about/page.tsx          # About / leadership page
│   ├── services/page.tsx       # Services listing
│   ├── technology/page.tsx     # Technology stack showcase
│   ├── compliance/page.tsx     # Compliance & security page
│   └── contact/page.tsx        # Contact form & details
├── components/                 # React components organized by page/feature
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # Hero, Stats, ServicePillars, FAQ, FloatingCTA, etc.
│   ├── services/               # ServiceDetail
│   ├── about/                  # CompanyOverview, LeadershipCard
│   ├── technology/             # TechCategory
│   ├── compliance/             # ComplianceFeature
│   ├── contact/                # ContactForm
│   └── ui/                     # Reusable: Button, Container, AnimatedCounter, SectionWrapper
├── lib/
│   ├── data.ts                 # ALL site content (services, stats, FAQs, testimonials, leadership)
│   ├── icons.ts                # IconName -> Lucide component mapping
│   └── utils.ts                # cn() utility for merging Tailwind class names
public/
├── lovable-uploads/            # Image assets (logos, client logos)
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── CNAME                       # Custom domain for GitHub Pages
```

## Architecture & Conventions

### Static Site (No Server)

This is a fully static site. `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }`. There are no API routes, no server components with data fetching, and no SSR. All pages export to static HTML in the `out/` directory.

### Data Layer

All content lives in `src/lib/data.ts`. This is the single source of truth for navigation links, stats, services, FAQs, testimonials, leadership bios, and more. When modifying site content, edit this file — not individual components.

Key exports: `NAV_LINKS`, `STATS`, `PRIMARY_SERVICES`, `SECONDARY_SERVICES`, `SERVICE_DETAILS`, `FAQS`, `LEADERSHIP`, `COMPLIANCE_FEATURES`, `TECH_CATEGORIES`.

### Component Conventions

- **Server vs Client:** Components are server components by default. Add `'use client'` only when using React hooks (`useState`, `useEffect`, `useRef`) or Framer Motion.
- **Props-driven:** Components receive data via props. There is no global state (no Redux, Context, or Zustand).
- **Naming:** PascalCase for components/types, camelCase for functions/variables, SCREAMING_SNAKE_CASE for data constants.
- **File organization:** Components are grouped by page domain (`home/`, `about/`, `services/`, etc.). Shared UI primitives go in `ui/`.

### Styling

- **Tailwind CSS** is the only styling approach. No CSS modules or styled-components.
- **Custom colors:** `navy` palette (`#0A2540`, `#0F3460`, `#061B2E`) defined in `tailwind.config.ts`.
- **Custom fonts:** `font-heading` (DM Sans) and `font-body` (Plus Jakarta Sans) defined in `tailwind.config.ts`.
- **Class merging:** Use the `cn()` utility from `@/lib/utils` to conditionally compose Tailwind classes.
- **Responsive:** Mobile-first with Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

### Icons

Icons are managed through a string-based mapping system:
1. The `IconName` type in `data.ts` defines allowed icon names as a union type.
2. `icons.ts` maps each `IconName` to its Lucide React component.
3. Components call `getIcon(name)` to resolve the component.

When adding a new icon: add it to the `IconName` union type in `data.ts`, import it in `icons.ts`, and add it to the `iconMap`.

### Animations

Framer Motion is used for scroll-triggered animations. Standard patterns:
- `useInView` with `once: true` for one-time entrance animations.
- Staggered children with `delay: index * 0.1`.
- Custom easing: `[0.16, 1, 0.3, 1]`.
- Components using Framer Motion must have `'use client'` directive.

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*`. Always use `@/` imports:
```ts
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
```

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`):
- Triggers on push to `main`
- Runs `npm ci` then `npm run build`
- Uploads `out/` directory to GitHub Pages

## Testing

There is currently no automated testing framework. No Jest, Vitest, Cypress, or Playwright is configured. Verify changes manually with `npm run dev` and ensure `npm run build` succeeds.

## Linting & Formatting

- **ESLint:** Next.js built-in rules via `npm run lint`. No custom `.eslintrc` config.
- **Prettier:** Not configured. Code uses 2-space indentation and single quotes by convention.
- **TypeScript:** Strict mode enabled. All component props must be typed with interfaces.

## Common Tasks

### Adding a new page

1. Create `src/app/<page-name>/page.tsx`.
2. Export metadata for SEO.
3. Add the route to `NAV_LINKS` in `src/lib/data.ts`.
4. Create page-specific components in `src/components/<page-name>/`.

### Adding new content

Edit `src/lib/data.ts`. Add new entries to the appropriate exported constant. Components will pick up the changes automatically since they render from these data arrays.

### Adding a new reusable component

Place it in `src/components/ui/`. Keep it props-driven with a typed interface. Use `cn()` for conditional class merging.

### Adding a new icon

1. Add the name to the `IconName` union type in `src/lib/data.ts`.
2. Import the Lucide component in `src/lib/icons.ts`.
3. Add the mapping entry in the `iconMap` object.
