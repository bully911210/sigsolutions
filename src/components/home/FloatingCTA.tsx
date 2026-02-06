'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the approximate hero height
      const heroThreshold = 600;
      setIsVisible(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden"
        >
          <div className="px-4 pb-[env(safe-area-inset-bottom)] pt-3 pb-4">
            <p className="mb-2 text-center text-xs font-medium text-blue-600">
              Limited capacity available
            </p>
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-[0.98]"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
