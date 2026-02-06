import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Shield, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with SIG Solutions. Send us a message or book a strategy call. Based in Riviera, Pretoria, South Africa.',
  openGraph: {
    title: 'Contact | SIG Solutions',
    description: 'Get in touch with SIG Solutions. We respond within one business day.',
  },
};

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'sales@sigsolutions.co.za', href: 'mailto:sales@sigsolutions.co.za' },
  { icon: Phone, label: 'Phone', value: '+27 (0) 12 000 0000', href: 'tel:+27120000000' },
  { icon: MapPin, label: 'Location', value: 'Riviera, Pretoria, South Africa' },
  { icon: Clock, label: 'Business Hours', value: 'Monday to Friday, 08:00 to 17:00' },
];

const trustPoints = [
  'No pitch decks. No pressure.',
  'Response within one business day',
  'Free 30-minute strategy consultation',
  'Transparent, no-obligation conversation',
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Let&apos;s Discuss Your Growth Strategy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Whether you&apos;re evaluating partners, replacing internal strain, or fixing a broken
            revenue process, we&apos;ll tell you quickly whether we are a fit.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact form - primary */}
            <div>
              <h2 className="mb-2 font-heading text-2xl font-bold text-navy">
                Send Us a Message
              </h2>
              <p className="mb-8 text-slate-600">
                Tell us about your challenges and we&apos;ll get back to you with a clear plan of action.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <div>
              {/* Contact details */}
              <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="mb-6 font-heading text-lg font-bold text-navy">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon className="h-5 w-5" />
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
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-heading text-lg font-bold text-navy">
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
            description: 'Performance-Driven BPO & Growth Infrastructure',
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
