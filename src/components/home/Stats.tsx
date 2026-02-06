'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/data';
import { getIcon } from '@/lib/icons';

const clarifications: Record<string, string> = {
  'Active Call Centre Agents': 'Pretoria-based, full-time',
  'Outbound Calls Made': 'Across active client campaigns',
  'Leads Processed': 'Qualified and routed to sales',
  'Rands in Recurring Collections': 'Monthly recovered revenue',
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-navy pt-12 pb-14 lg:pt-14 lg:pb-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {STATS.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="font-heading text-3xl font-bold text-white lg:text-4xl">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-3 text-xs text-slate-500">{stat.label}</p>
                {clarifications[stat.label] && (
                  <p className="mt-1 text-[10px] text-slate-600">{clarifications[stat.label]}</p>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center text-[11px] text-slate-600"
        >
          Across subscription, fundraising, and outbound sales campaigns
        </motion.p>
      </Container>
    </section>
  );
}
