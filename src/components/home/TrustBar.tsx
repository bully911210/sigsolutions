'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const placeholderLogos = [
  'Client Logo 1',
  'Client Logo 2',
  'Client Logo 3',
  'Client Logo 4',
  'Client Logo 5',
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="border-y border-slate-100 bg-slate-50/50 py-12">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-400"
        >
          Trusted by organisations across NGO, insurance, legal, and advocacy sectors
        </motion.p>
      </Container>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50/80 to-transparent" />

        <div className="logo-scroll-track animate-scroll">
          {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex h-12 w-36 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200/60 bg-white px-6 text-xs font-medium text-slate-400"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Client logos to be finalised prior to launch
      </p>
    </section>
  );
}
