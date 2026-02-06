'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CONTACT_URL } from '@/lib/data';
import type { IconName } from '@/lib/data';
import { getIcon } from '@/lib/icons';

interface ServiceDetailProps {
  id: string;
  icon: IconName;
  title: string;
  headline: string;
  description: string;
  capabilities: string[];
  breaks: string[];
  owns: string[];
  reversed?: boolean;
}

export default function ServiceDetail({
  id, icon, title, headline, description, capabilities, breaks, owns, reversed,
}: ServiceDetailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = getIcon(icon);

  return (
    <section id={id} ref={ref} className={reversed ? 'bg-slate-50' : 'bg-white'}>
      <Container className="py-16 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base font-medium text-slate-600">{headline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
          <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">Capabilities</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-8">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <h3 className="font-heading text-base font-bold text-navy">Operational risks without intervention</h3>
            </div>
            <ul className="space-y-3">
              {breaks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-green-100 bg-green-50/50 p-8">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-4 w-4 text-green-600" />
              <h3 className="font-heading text-base font-bold text-navy">What we take ownership of</h3>
            </div>
            <ul className="space-y-3">
              {owns.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10">
          <Button href={CONTACT_URL} variant="primary">
            Discuss this service <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
