import type { Metadata } from 'next';
import CompanyOverview from '@/components/about/CompanyOverview';
import LeadershipCard from '@/components/about/LeadershipCard';
import CTABanner from '@/components/home/CTABanner';
import Container from '@/components/ui/Container';
import { LEADERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'SIG Solutions is a hybrid BPO based in Pretoria, South Africa with 50-100 active agents. Meet our leadership team of four Managing Directors.',
  openGraph: {
    title: 'About | SIG Solutions',
    description: 'Meet the leadership team behind SIG Solutions, a hybrid BPO based in Pretoria, South Africa.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Us
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Built for Operational Delivery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We are not a marketing agency. We are an operating partner responsible for outcomes
            across the full revenue chain.
          </p>
        </div>
      </section>

      <CompanyOverview />

      {/* Leadership section */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Team
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-600">
              Leadership is structured around responsibility, not titles. All four directors
              serve as equal Managing Directors.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((leader, i) => (
              <LeadershipCard key={leader.name} {...leader} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
