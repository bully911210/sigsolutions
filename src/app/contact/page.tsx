import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import CalendlyEmbed from '@/components/contact/CalendlyEmbed';
import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with SIG Solutions. Book a strategy call or send us a message. Based in Riviera, Pretoria, South Africa.',
  openGraph: {
    title: 'Contact | SIG Solutions',
    description: 'Book a strategy call with SIG Solutions or send us a message.',
  },
};

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'sales@sigsolutions.co.za', href: 'mailto:sales@sigsolutions.co.za' },
  { icon: MapPin, label: 'Location', value: 'Riviera, Pretoria, South Africa' },
  { icon: Clock, label: 'Business Hours', value: 'Monday to Friday, 08:00 to 17:00' },
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
            revenue process — we&apos;ll tell you quickly whether we are a fit.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Calendly embed - wider */}
            <div className="lg:col-span-3">
              <CalendlyEmbed />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Contact details */}
              <div className="mb-10 space-y-6">
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
                          <a href={item.href} className="text-sm font-medium text-navy hover:text-blue-600 transition-colors">
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

              {/* Divider */}
              <div className="mb-10 border-t border-slate-200" />

              {/* Contact form */}
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-navy">
                  Or Send Us a Message
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  We&apos;ll respond within one business day.
                </p>
                <ContactForm />
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
