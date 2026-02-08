'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import { CONTACT_URL } from '@/lib/data';

export default function MidFunnelCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-10 lg:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-slate-50 p-8 lg:p-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <FileText className="h-6 w-6" />
          </div>
          <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
            Not ready for a call?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
            See how much revenue you could recover. Request a free pipeline assessment
            and we&apos;ll model your recovery potential — no commitment required.
          </p>
          <div className="mt-6">
            <a
              href={CONTACT_URL}
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Request a free pipeline assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Takes 2 minutes. No sales call required.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
