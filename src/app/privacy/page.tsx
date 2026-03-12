import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'SIG Solutions Privacy Policy — how we collect, use, and protect your personal information in compliance with POPIA.',
  openGraph: {
    title: 'Privacy Policy | SIG Solutions',
    description: 'How SIG Solutions collects, uses, and protects your personal information.',
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Legal
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: March 2025</p>
        </div>
      </section>

      {/* Policy content */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-slate-600 leading-relaxed">

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">1. Introduction</h2>
              <p>
                SIG Solutions (Pty) Ltd (&quot;SIG Solutions&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) is committed to protecting your privacy and handling your personal
                information responsibly. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or engage with our services.
              </p>
              <p>
                This policy is governed by the Protection of Personal Information Act 4 of 2013
                (&quot;POPIA&quot;) and applies to all personal information we process about you.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">2. Information We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium text-slate-700">Contact details:</span> Name, email address, phone number, and company
                  name provided via our contact form or during service enquiries.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Usage data:</span> Pages visited, time spent on pages, referring URLs, and
                  browser/device information collected automatically via cookies and analytics tools.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Communications:</span> Content of emails, messages, or other
                  communications you send to us.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to your enquiries and provide the services you have requested.</li>
                <li>Send service-related communications and updates.</li>
                <li>Improve our website and service offerings.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Prevent fraud and ensure the security of our systems.</li>
              </ul>
              <p>
                We will not sell, rent, or share your personal information with third parties for their
                own marketing purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">4. Legal Basis for Processing</h2>
              <p>Under POPIA, we process your personal information on the following grounds:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium text-slate-700">Consent:</span> Where you have given explicit consent (e.g., submitting our
                  contact form).
                </li>
                <li>
                  <span className="font-medium text-slate-700">Legitimate interest:</span> Where processing is necessary for our
                  legitimate business purposes, provided these do not override your rights.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Legal obligation:</span> Where we are required to process information to
                  comply with applicable law.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the
                purposes for which it was collected, or as required by law. When your information is no
                longer needed, we securely delete or anonymise it.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">6. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal
                information against unauthorised access, alteration, disclosure, or destruction. Our
                security measures include role-based access controls, encrypted data storage, and
                regular security reviews.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">7. Your Rights Under POPIA</h2>
              <p>You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of your personal information (subject to legal obligations).</li>
                <li>Object to the processing of your personal information.</li>
                <li>Lodge a complaint with the Information Regulator of South Africa.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:sales@sigsolutions.co.za" className="text-blue-600 hover:text-blue-800 underline">
                  sales@sigsolutions.co.za
                </a>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">8. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing
                experience and collect usage data. You can control cookie settings through your browser
                preferences. Disabling cookies may affect the functionality of certain parts of our
                site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of those sites and encourage you to review their privacy policies
                before providing any personal information.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with a revised &quot;Last updated&quot; date. We encourage you to review
                this policy periodically.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-navy">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal
                information, please contact us:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium text-slate-700">Email:</span>{' '}
                  <a href="mailto:sales@sigsolutions.co.za" className="text-blue-600 hover:text-blue-800 underline">
                    sales@sigsolutions.co.za
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-700">Address:</span> Riviera, Pretoria, Gauteng, South Africa
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
