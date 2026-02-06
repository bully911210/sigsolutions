'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/data';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-blue-50/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            BPO &amp; Revenue Operations
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Performance-Driven BPO &amp;{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Growth Infrastructure
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl"
          >
            SIG Solutions operates where lead generation, outbound sales, and revenue
            collection meet. We don&apos;t optimise parts — we run the whole.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href={CALENDLY_URL} variant="primary" size="lg">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore Our Services
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
