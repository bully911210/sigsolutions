import type { Metadata } from 'next';
import ComplianceFeature from '@/components/compliance/ComplianceFeature';
import CTABanner from '@/components/home/CTABanner';
import Container from '@/components/ui/Container';
import { COMPLIANCE_ITEMS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Compliance & Data',
  description:
    'SIG Solutions is fully POPIA compliant with secure data handling, role-based access controls, and PCI-DSS compliant payment processing.',
  openGraph: {
    title: 'Compliance & Data | SIG Solutions',
    description: 'POPIA compliant, secure data handling, and PCI-DSS payment processing.',
  },
};

export default function CompliancePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trust &amp; Security
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Compliance &amp; Data Security
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We take data protection seriously. Every system, process, and workflow is designed
            with compliance and security at its foundation.
          </p>
        </div>
      </section>

      {/* Compliance items */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <ComplianceFeature key={item.title} {...item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
