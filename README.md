# SIG Solutions Website

Production-grade website for **SIG Solutions**, a hybrid BPO (Business Process Outsourcing) company based in Pretoria, South Africa.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: DM Sans (headings) + Plus Jakarta Sans (body) via Google Fonts

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

The development server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (nav, footer, fonts, metadata)
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── about/page.tsx      # About / Leadership page
│   ├── technology/page.tsx # Technology stack page
│   ├── compliance/page.tsx # Compliance & data security page
│   └── contact/page.tsx    # Contact / Book a call page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Hero, TrustBar, Stats, ServicePillars, etc.
│   ├── services/           # ServiceDetail
│   ├── about/              # CompanyOverview, LeadershipCard
│   ├── technology/         # TechCategory
│   ├── compliance/         # ComplianceFeature
│   ├── contact/            # ContactForm, CalendlyEmbed
│   └── ui/                 # Button, Container, SectionWrapper, AnimatedCounter
└── lib/
    ├── data.ts             # All site content and data constants
    ├── icons.ts            # Icon name-to-component mapping
    └── utils.ts            # Utility functions
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust bar, stats, service pillars, process, why us, fit section, CTA |
| Services | `/services` | Detailed breakdowns of all 4 services with capabilities and framing |
| About | `/about` | Company overview, 4 Managing Directors with expandable responsibilities |
| Technology | `/technology` | 6-category tech stack showcase |
| Compliance | `/compliance` | POPIA, data security, PCI-DSS compliance items |
| Contact | `/contact` | Calendly embed, contact form, business details, structured data |

## Deployment

The site builds as a static export (`output: 'export'` in `next.config.js`), producing an `out/` directory that can be deployed to any static hosting provider:

- **Vercel**: Push to GitHub and connect the repo
- **Netlify**: Set build command to `npm run build` and publish directory to `out`
- **GitHub Pages**: Deploy the `out/` directory

## Customisation

- **Content**: All text, data, and configuration is centralised in `src/lib/data.ts`
- **Colours**: Tailwind theme in `tailwind.config.ts` (navy palette + standard Tailwind blues)
- **Fonts**: Google Fonts loaded via `<link>` in `src/app/layout.tsx`
- **Images**: Replace placeholder blocks in `public/` with actual photography
- **Calendly**: Update `CALENDLY_URL` in `src/lib/data.ts`
