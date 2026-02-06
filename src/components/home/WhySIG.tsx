'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function WhySIG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32">
      <Container className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
        >
          Why SIG Solutions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
        >
          Why SIG Solutions Exists
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-lg leading-relaxed text-slate-600"
        >
          We exist because internal teams struggle once volume increases.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 lg:p-12"
        >
          <p className="font-heading text-xl font-bold leading-relaxed text-navy sm:text-2xl lg:text-3xl">
            Leads are easy.<br />
            Sales pressure is not.<br />
            Collections are where most organisations quietly bleed.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg leading-relaxed text-slate-600"
        >
          We take responsibility where most organisations lose control — the follow-ups that
          don&apos;t happen, the payments that fail, and the systems that break under scale.
        </motion.p>
      </Container>
    </section>
  );
}
