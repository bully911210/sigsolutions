'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeadershipCardProps {
  name: string;
  title: string;
  summary: string;
  responsibilities: string[];
  index: number;
}

export default function LeadershipCard({
  name,
  title,
  summary,
  responsibilities,
  index,
}: LeadershipCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
    >
      <h3 className="font-heading text-xl font-bold text-navy">{name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-blue-600">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{summary}</p>

      {/* Expandable responsibilities */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
      >
        {expanded ? 'Hide' : 'View'} responsibilities
        <ChevronDown className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')} />
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
