'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { FIT_ITEMS, NOT_FIT_ITEMS } from '@/lib/data';

export default function WhoFit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-slate-50 py-12 lg:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Is this you?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            See if we&apos;re the right fit
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-slate-200 bg-white p-8"
          >
            <h3 className="mb-6 font-heading text-lg font-bold text-navy">
              Strong fit
            </h3>
            <ul className="space-y-4">
              {FIT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-50">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-slate-200 bg-white p-8"
          >
            <h3 className="mb-6 font-heading text-lg font-bold text-slate-500">
              Not a fit
            </h3>
            <ul className="space-y-4">
              {NOT_FIT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                    <X className="h-3.5 w-3.5 text-red-400" />
                  </span>
                  <span className="text-sm text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
