'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FAQ_ITEMS } from '@/lib/data';

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-200 hover:text-blue-600"
      >
        <span className="pr-4 font-heading text-base font-semibold text-navy">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100"
        >
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  // Top 3 FAQs expanded by default (pricing, speed, success measurement)
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 1, 2]));

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section ref={ref} className="bg-white py-12 lg:py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            Common Questions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 border-t border-slate-200"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndices.has(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center"
        >
          <p className="font-heading text-lg font-bold text-navy">
            Have a specific question?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Talk to our operations team directly. No scripts. No hand-offs.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
