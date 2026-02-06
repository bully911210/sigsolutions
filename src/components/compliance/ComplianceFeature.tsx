'use client';

import { motion } from 'framer-motion';
import type { IconName } from '@/lib/data';
import { getIcon } from '@/lib/icons';

interface ComplianceFeatureProps {
  title: string;
  description: string;
  icon: IconName;
  index: number;
}

export default function ComplianceFeature({ title, description, icon, index }: ComplianceFeatureProps) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}
