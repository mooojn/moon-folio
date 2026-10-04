'use client';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  // Lenis smooth scroll
  useEffect(() => {
    let lenis: any;
    
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.85,
          touchMultiplier: 1.8,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis not available, skip
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
