'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Users, CalendarDays } from 'lucide-react';
import Container from '@/components/ui/Container';

const highlights = [
  { icon: Building2, label: 'Hybrid BPO', description: 'Operating nationally in South Africa' },
  { icon: MapPin, label: 'Based in Pretoria', description: 'Riviera, Pretoria, Gauteng' },
  { icon: Users, label: '50-100 Agents', description: 'Active call centre agents' },
  { icon: CalendarDays, label: '3-5 Years', description: 'Of operational delivery' },
];

export default function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            Company Overview
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            An Operating Partner Responsible for Outcomes
          </h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              SIG Solutions is a hybrid BPO operating nationally in South Africa, based in Pretoria.
              With 50-100 active agents and 3-5 years of operational delivery, we serve NGOs,
              membership organisations, subscription businesses, insurance, legal, and advocacy sectors.
            </p>
            <p>
              We are not a marketing agency. We are an operating partner responsible for outcomes
              across the full revenue chain, from lead generation and sales execution to collections
              and payment recovery.
            </p>
          </div>
        </motion.div>

        {/* Highlight grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="font-heading text-sm font-bold text-navy">{item.label}</h4>
                <p className="mt-1 text-xs text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
