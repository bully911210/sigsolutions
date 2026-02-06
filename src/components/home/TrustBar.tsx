'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Shield, Users, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';

const sectors = [
  { icon: Building2, label: 'NGO & Advocacy' },
  { icon: Shield, label: 'Insurance' },
  { icon: Users, label: 'Legal' },
  { icon: TrendingUp, label: 'Financial Services' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="border-y border-slate-100 bg-slate-50/50 py-12">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-400"
        >
          Trusted by organisations across multiple sectors
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-white px-5 py-3"
              >
                <Icon className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-600">{sector.label}</span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
