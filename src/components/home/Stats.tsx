'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/data';
import { getIcon } from '@/lib/icons';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-navy pt-10 pb-14 lg:pt-12 lg:pb-16">
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
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
