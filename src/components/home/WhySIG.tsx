'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function WhySIG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-16 lg:py-20">
      <Container className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
        >
          Why us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
        >
          Your team can&apos;t do this at scale. Ours can.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-10 rounded-xl border border-slate-200 bg-slate-50 p-8 lg:p-10"
        >
          <p className="font-heading text-lg font-bold leading-relaxed text-navy sm:text-xl">
            Getting leads is easy.<br />
            Following up consistently is hard.<br />
            Collecting payments at scale is where most organisations break.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-slate-600 leading-relaxed"
        >
          We own the follow-ups that don&apos;t happen, the payments that fail,
          and the systems that break under volume. That&apos;s the job.
        </motion.p>
      </Container>
    </section>
  );
}
