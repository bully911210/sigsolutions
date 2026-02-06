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

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-slate-300">
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
              Riviera, Pretoria<br />South Africa
            </p>
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
              <li>Riviera, Pretoria, South Africa</li>
              <li>Mon - Fri, 08:00 - 17:00</li>
            </ul>
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
