'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-blue-50 py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            Client Results
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-xl text-lg text-slate-600"
          >
            Real results from real partnerships
          </motion.p>
        </div>

        {/* Testimonial cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="relative flex flex-col rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Quote icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Quote className="h-6 w-6 text-blue-600" />
              </div>

              {/* Quote text */}
              <p className="flex-1 text-base leading-relaxed text-navy/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 border-t border-blue-100 pt-6">
                <p className="font-heading text-sm font-bold text-navy">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>

              {/* Metric badge */}
              <div className="mt-4">
                <span className="inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white">
                  {testimonial.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
