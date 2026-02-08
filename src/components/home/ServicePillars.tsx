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
    <section id="services" ref={ref} className="bg-slate-50 py-12 lg:py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-blue-600">
            What we run for you
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Sales, collections, and lead generation
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Core services backed by specialist support.
          </p>
        </motion.div>

        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {PRIMARY_SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className={`relative rounded-xl border bg-white p-8 lg:p-10 ${
                  i === 1
                    ? 'border-blue-200 ring-2 ring-blue-100'
                    : 'border-slate-200'
                }`}
              >
                {i === 1 && (
                  <span className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most clients start here
                  </span>
                )}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                {service.testimonial && (
                  <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs italic leading-relaxed text-slate-500">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-[11px] font-medium text-slate-400">
                      — {service.testimonial.attribution}
                    </p>
                  </div>
                )}

                <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  View details <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SECONDARY_SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-slate-200 bg-white p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>

                {service.testimonial && (
                  <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs italic leading-relaxed text-slate-500">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-[11px] font-medium text-slate-400">
                      — {service.testimonial.attribution}
                    </p>
                  </div>
                )}

                <a href="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  View details <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
