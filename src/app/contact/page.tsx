import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Shield, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact SIG Solutions for operational enquiries. Based in Riviera, Pretoria, South Africa.',
  openGraph: {
    title: 'Contact | SIG Solutions',
    description: 'Contact SIG Solutions. We respond within one business day.',
  },
};

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'sales@sigsolutions.co.za', href: 'mailto:sales@sigsolutions.co.za' },
  { icon: Phone, label: 'Phone', value: '+27 (0) 12 000 0000', href: 'tel:+27120000000' },
  { icon: MapPin, label: 'Location', value: 'Riviera, Pretoria, South Africa' },
  { icon: Clock, label: 'Business Hours', value: 'Monday to Friday, 08:00 to 17:00' },
];

const trustPoints = [
  'Direct access to operations leadership',
  'Response within one business day',
  '30-minute fit assessment, no obligation',
  'No sales scripts, no junior hand-offs',
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Talk to us
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-slate-600 leading-relaxed">
            You&apos;ll speak directly with an operations lead. No junior hand-offs, no
            sales scripts. We&apos;ll assess fit in one conversation.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact form - primary */}
            <div>
              <h2 className="mb-2 font-heading text-xl font-bold text-navy">
                Send us a message
              </h2>
              <p className="mb-8 text-sm text-slate-600">
                Tell us what you need. An operations lead will respond within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <div>
              {/* Contact details */}
              <div className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="mb-6 font-heading text-base font-bold text-navy">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-navy transition-colors hover:text-blue-600">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-navy">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust points */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <h3 className="font-heading text-base font-bold text-navy">
                    What to Expect
                  </h3>
                </div>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SIG Solutions',
            description: 'Performance-Driven BPO & Revenue Operations',
            email: 'sales@sigsolutions.co.za',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Pretoria',
              addressRegion: 'Gauteng',
              addressCountry: 'ZA',
              streetAddress: 'Riviera',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '17:00',
            },
          }),
        }}
      />
    </>
  );
}
