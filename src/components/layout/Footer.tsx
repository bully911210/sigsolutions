import Link from 'next/link';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';

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
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src="/lovable-uploads/sig-solutions-logo.png"
              alt="SIG Solutions"
              className="mb-4 h-9 brightness-0 invert"
            />
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Performance-Driven BPO &amp; Growth Infrastructure
            </p>
            <p className="text-sm text-slate-400">
              Riviera, Pretoria<br />South Africa
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
            <ul className="space-y-3">
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
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:sales@sigsolutions.co.za" className="transition-colors hover:text-white">
                  sales@sigsolutions.co.za
                </a>
              </li>
              <li>Riviera, Pretoria, South Africa</li>
              <li>Mon – Fri, 08:00 – 17:00</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-700/50">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SIG Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Performance-Driven BPO &amp; Growth Infrastructure
          </p>
        </Container>
      </div>
    </footer>
  );
}
