import Link from 'next/link';
import Container from '@/components/ui/Container';
import { LOGO_URL } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Lead Generation', href: '/services#lead-generation' },
  { label: 'Outbound Sales', href: '/services#outbound-sales' },
  { label: 'Collections', href: '/services#collections' },
  { label: 'Campaign Strategy', href: '/services#campaign-strategy' },
];

const complianceBadges = [
  'POPIA Compliant',
  'DebiCheck Authorised',
  'DNC Registry Compliant',
  'PCI-DSS Compliant Payments',
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
      {/* Compliance strip */}
      <div className="border-b border-slate-700/50">
        <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4">
          {complianceBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {badge}
            </span>
          ))}
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src={LOGO_URL}
              alt="SIG Solutions"
              className="mb-4 h-[54px] brightness-0 invert"
            />
            <p className="text-sm text-slate-400">
              Riviera, Pretoria, Gauteng, South Africa
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Direct access to operations leadership.<br />No junior hand-offs.
            </p>
            <div className="mt-4 space-y-1 text-[11px] text-slate-500">
              <p>Registration: 2019/XXXXXX/07</p>
              <p>VAT: 4XXXXXXXXX</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:sales@sigsolutions.co.za" className="transition-colors hover:text-white">
                  sales@sigsolutions.co.za
                </a>
              </li>
              <li>Riviera, Pretoria, Gauteng, South Africa</li>
              <li>Mon - Fri, 08:00 - 17:00</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              We respond within 4 business hours.
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-700/50">
        <Container className="flex items-center justify-center py-5">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SIG Solutions. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
