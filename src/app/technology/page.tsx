import type { Metadata } from 'next';
import TechCategory from '@/components/technology/TechCategory';
import CTABanner from '@/components/home/CTABanner';
import Container from '@/components/ui/Container';
import { TECH_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'SIG Solutions tech stack: Vicidial, 3CX, Meta Ads, Google Ads, TikTok Ads, Netcash, DebiCheck, n8n, Make.com, and custom reporting dashboards.',
  openGraph: {
    title: 'Technology | SIG Solutions',
    description: 'Our technology stack powers reliable, scalable revenue operations.',
  },
};

export default function TechnologyPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Stack
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Technology That Powers Reliable Operations
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Our technology stack is purpose-built for high-volume operational delivery —
            from telephony and CRM to payments and automation.
          </p>
        </div>
      </section>

      {/* Tech grid */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TECH_CATEGORIES.map((category, i) => (
              <TechCategory key={category.title} {...category} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
