'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const clients = [
  { name: 'TLU', src: 'https://www.tlu.co.za/wp-content/uploads/2021/07/Logo2025.png', desktopH: 'h-12 lg:h-14', mobileH: 'h-10' },
  { name: 'Free South Africa', src: 'https://www.freesa.org.za/wp-content/uploads/2022/07/Free-SA_Logo_Main.png', desktopH: 'h-12 lg:h-14', mobileH: 'h-10' },
  { name: 'Firearms Guardian', src: 'https://firearmsguardian.co.za/wp-content/uploads/2023/12/Firearms-Guardian-Logo_Firearms-Guardian-Web-1536x941.png', desktopH: 'h-[53px] lg:h-[62px]', mobileH: 'h-[44px]' },
  { name: 'Acorn Brokers', src: 'https://acornbrokers.co.za/images/logo.png', desktopH: 'h-[53px] lg:h-[62px]', mobileH: 'h-[44px]' },
  { name: 'Civil Society SA', src: 'https://civilsociety.lovable.app/assets/logo-Czk94Wx-.png', desktopH: 'h-12 lg:h-14', mobileH: 'h-10' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-navy pt-14 lg:pt-16 pb-10 lg:pb-12">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-slate-400"
        >
          Trusted by organisations running high-volume outbound, fundraising, and recurring collections
        </motion.p>

        {/* Desktop: single row, large logos */}
        <div className="hidden sm:flex items-center justify-center gap-16 lg:gap-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex items-center justify-center px-2"
            >
              <img
                src={client.src}
                alt={client.name}
                className={`${client.desktopH} w-auto max-w-[180px] object-contain brightness-0 invert opacity-80`}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2 per row, large and legible */}
        <div className="grid grid-cols-2 gap-8 sm:hidden">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex items-center justify-center px-2 py-2"
            >
              <img
                src={client.src}
                alt={client.name}
                className={`${client.mobileH} w-auto max-w-full object-contain brightness-0 invert opacity-80`}
              />
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Visual separator between logos and stats */}
      <div className="mt-10 lg:mt-12 border-t border-slate-700/30" />
    </section>
  );
}
