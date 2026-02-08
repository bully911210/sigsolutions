'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import { PROCESS_STEPS } from '@/lib/data';

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-12 lg:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            How it works
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            From audit to executive reporting in four steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-300 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-300 bg-white font-heading text-base font-bold text-navy">
                  {step.number}
                </div>
                <h3 className="font-heading text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
