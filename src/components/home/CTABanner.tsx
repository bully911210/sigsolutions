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
    <section ref={ref} className="bg-navy py-14 lg:py-16">
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          You&apos;ve seen what we do. Let&apos;s talk about your numbers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300"
        >
          Book a 30-minute pipeline review — we&apos;ll show you where you&apos;re losing revenue.
          No sales scripts. Direct access to operations leadership.
        </motion.p>

        {/* Social proof near CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-lg text-xs italic text-slate-400"
        >
          &ldquo;Their agents are professional and the reporting is exceptional.&rdquo;
          — Head of Fundraising, national conservation NGO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <Button href={CONTACT_URL} variant="primary" size="lg">
            Book a 30-minute pipeline review
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
