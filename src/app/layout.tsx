import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SIG Solutions | Performance-Driven BPO & Growth Infrastructure',
    template: '%s | SIG Solutions',
  },
  description:
    'SIG Solutions is a hybrid BPO based in Pretoria, South Africa. We operate lead generation, outbound sales, collections, and digital campaign execution services nationally.',
  keywords: [
    'BPO South Africa',
    'call centre outsourcing Pretoria',
    'lead generation BPO',
    'outbound sales call centre South Africa',
    'collections and payment recovery BPO',
    'revenue operations outsourcing',
  ],
  openGraph: {
    title: 'SIG Solutions | Performance-Driven BPO & Growth Infrastructure',
    description:
      'SIG Solutions operates where lead generation, outbound sales, and revenue collection meet. We don\'t optimise parts — we run the whole.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'SIG Solutions',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-body text-slate-700 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
