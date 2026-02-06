'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-slate-50 py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            Client Outcomes
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Documented Results
          </motion.h2>
        </div>

        {/* Testimonial cards grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-8"
            >
              {/* Quote text */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="font-heading text-sm font-bold text-navy">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {testimonial.company}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-400">
                  {testimonial.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
