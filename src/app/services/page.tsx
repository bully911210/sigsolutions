import type { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import CTABanner from '@/components/home/CTABanner';
import { SERVICE_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SIG Solutions provides lead generation, outbound sales, collections, and campaign strategy services. Full-service BPO covering the entire revenue chain.',
  openGraph: {
    title: 'Services | SIG Solutions',
    description: 'Lead generation, outbound sales, collections, and campaign strategy: the full revenue chain.',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Full-Service Revenue Operations
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Four integrated capabilities that cover every stage of the revenue chain, from
            first click to collected payment. Each service is designed to work independently
            or as part of your complete revenue infrastructure.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {SERVICE_DETAILS.map((service, i) => (
        <ServiceDetail key={service.id} {...service} reversed={i % 2 === 1} />
      ))}

      <CTABanner />
    </>
  );
}
