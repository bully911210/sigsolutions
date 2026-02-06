'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CONTACT_URL } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            For NGOs, subscription businesses &amp; membership organisations
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-5xl"
          >
            We run your sales, collections, and lead generation so you don&apos;t have to.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600"
          >
            50–100 trained agents in Pretoria handling outbound calls, payment recovery,
            and lead qualification. You get consistent revenue. We handle the operations.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={CONTACT_URL} variant="primary" size="lg">
              See if we&apos;re a fit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
