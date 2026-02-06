'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CONTACT_URL } from '@/lib/data';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-navy py-16 lg:py-20">
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Not sure if we&apos;re the right fit?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300"
        >
          One 30-minute call with an operations lead. No sales scripts. We&apos;ll
          tell you honestly whether we can help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Button href={CONTACT_URL} variant="primary" size="lg">
            Talk to an operations lead
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
