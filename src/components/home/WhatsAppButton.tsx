'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 z-50 bottom-6 lg:bottom-8 lg:right-8"
          style={{
            /* Add bottom spacing on mobile when FloatingCTA is showing */
            marginBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-xs font-medium text-white shadow-lg"
              >
                Chat with us on WhatsApp
                <span className="absolute right-0 top-1/2 -mr-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-navy" />
              </motion.span>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/27000000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group mb-[72px] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:mb-0"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />

            {/* Pulse ring on hover */}
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-20" style={{ backgroundColor: '#25D366' }} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
