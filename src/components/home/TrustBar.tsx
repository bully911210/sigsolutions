'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';

const clients = [
  { name: 'TLU', src: 'https://www.tlu.co.za/wp-content/uploads/2021/07/Logo2025.png', h: 'h-12 sm:h-16 lg:h-[72px]' },
  { name: 'Free South Africa', src: 'https://www.freesa.org.za/wp-content/uploads/2022/07/Free-SA_Logo_Main.png', h: 'h-9 sm:h-12 lg:h-[54px]' },
  { name: 'Firearms Guardian', src: 'https://firearmsguardian.co.za/wp-content/uploads/2023/12/Firearms-Guardian-Logo_Firearms-Guardian-Web-1536x941.png', h: 'h-14 sm:h-[68px] lg:h-[80px]' },
  { name: 'Acorn Brokers', src: 'https://acornbrokers.co.za/images/logo.png', h: 'h-14 sm:h-[68px] lg:h-[80px]' },
  { name: 'Civil Society SA', src: 'https://i.postimg.cc/brgFFL5N/New-Project-(96).png', h: 'h-12 sm:h-16 lg:h-[72px]' },
  { name: 'MyLawyer', src: 'https://mylawyer.co.za/wp-content/uploads/2020/09/MyLawyer-Hires-logo2.png', h: 'h-9 sm:h-12 lg:h-[54px]' },
  { name: 'Capital Legacy', src: 'https://docs.capitallegacy.co.za/images/CL-Brand-Logo.png', h: 'h-12 sm:h-16 lg:h-[72px]' },
  { name: 'TTC', src: 'https://static.wixstatic.com/media/1c17fd_07f39f5fc19140a685334d8ef9771c0e~mv2.png/v1/fit/w_2500,h_1330,al_c/1c17fd_07f39f5fc19140a685334d8ef9771c0e~mv2.png', h: 'h-12 sm:h-16 lg:h-[72px]' },
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
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="overflow-hidden"
      >
        <div className="flex animate-scroll items-center gap-12 sm:gap-16 lg:gap-20 hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-2"
            >
              <img
                src={client.src}
                alt={client.name}
                className={`${client.h} w-auto object-contain brightness-0 invert opacity-90`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
