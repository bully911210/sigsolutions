'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { PRIMARY_SERVICES, SECONDARY_SERVICES } from '@/lib/data';
import { getIcon } from '@/lib/icons';

export default function ServicePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="bg-white py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Core Service Pillars
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four integrated capabilities that cover the full revenue chain, from first click to collected payment.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {PRIMARY_SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 lg:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SECONDARY_SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
