'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const clients = [
  { name: 'TLU', src: 'https://www.tlu.co.za/wp-content/uploads/2021/07/Logo2025.png', height: 'h-10 lg:h-12' },
  { name: 'Firearms Guardian', src: 'https://firearmsguardian.co.za/wp-content/uploads/2023/12/Firearms-Guardian-Logo_Firearms-Guardian-Web-1536x941.png', height: 'h-8 lg:h-10' },
  { name: 'Free South Africa', src: 'https://www.freesa.org.za/wp-content/uploads/2022/07/Free-SA_Logo_Main.png', height: 'h-10 lg:h-12' },
  { name: 'Civil Society SA', src: 'https://civilsociety.lovable.app/assets/logo-Czk94Wx-.png', height: 'h-8 lg:h-10' },
  { name: 'Acorn Brokers', src: 'https://acornbrokers.co.za/images/logo.png', height: 'h-9 lg:h-11' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-navy pt-14 lg:pt-16 pb-0">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-slate-400"
        >
          Trusted by
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={client.src}
                alt={client.name}
                className={`${client.height} w-auto object-contain`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
