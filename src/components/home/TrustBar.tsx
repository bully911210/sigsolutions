'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const clients = [
  { name: 'TLU', src: 'https://www.tlu.co.za/wp-content/uploads/2021/07/Logo2025.png', desktopH: 'h-16 lg:h-[72px]', mobileH: 'h-12' },
  { name: 'Free South Africa', src: 'https://www.freesa.org.za/wp-content/uploads/2022/07/Free-SA_Logo_Main.png', desktopH: 'h-12 lg:h-[54px]', mobileH: 'h-9' },
  { name: 'Firearms Guardian', src: 'https://firearmsguardian.co.za/wp-content/uploads/2023/12/Firearms-Guardian-Logo_Firearms-Guardian-Web-1536x941.png', desktopH: 'h-[68px] lg:h-[80px]', mobileH: 'h-14' },
  { name: 'Acorn Brokers', src: 'https://acornbrokers.co.za/images/logo.png', desktopH: 'h-[68px] lg:h-[80px]', mobileH: 'h-14' },
  { name: 'Civil Society SA', src: 'https://i.postimg.cc/brgFFL5N/New-Project-(96).png', desktopH: 'h-16 lg:h-[72px]', mobileH: 'h-12' },
  { name: 'MyLawyer', src: 'https://mylawyer.co.za/wp-content/uploads/2020/09/MyLawyer-Hires-logo2.png', desktopH: 'h-16 lg:h-[72px]', mobileH: 'h-12' },
  { name: 'Capital Legacy', src: 'https://docs.capitallegacy.co.za/images/CL-Brand-Logo.png', desktopH: 'h-16 lg:h-[72px]', mobileH: 'h-12' },
  { name: 'TTC', src: 'https://static.wixstatic.com/media/1c17fd_07f39f5fc19140a685334d8ef9771c0e~mv2.png/v1/fit/w_2500,h_1330,al_c/1c17fd_07f39f5fc19140a685334d8ef9771c0e~mv2.png', desktopH: 'h-16 lg:h-[72px]', mobileH: 'h-12' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-navy pt-10 lg:pt-12 pb-8 lg:pb-10">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400"
        >
          Trusted by organisations running high-volume outbound, fundraising, and recurring collections
        </motion.p>

        {/* Desktop: single row, larger logos with improved contrast */}
        <div className="hidden sm:flex items-center justify-center flex-wrap gap-10 lg:gap-16">
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
                className={`${client.desktopH} w-auto object-contain brightness-0 invert opacity-90`}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2 per row */}
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
                className={`${client.mobileH} w-auto max-w-full object-contain brightness-0 invert opacity-90`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
