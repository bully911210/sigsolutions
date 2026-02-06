'use client';

import { motion } from 'framer-motion';
import type { IconName } from '@/lib/data';
import { getIcon } from '@/lib/icons';

interface TechCategoryProps {
  title: string;
  icon: IconName;
  items: string[];
  index: number;
}

export default function TechCategory({ title, icon, items, index }: TechCategoryProps) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
