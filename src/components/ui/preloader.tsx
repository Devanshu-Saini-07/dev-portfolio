'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Respect user's reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('page-loaded');
      setIsLoading(false);
      return;
    }

    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Cinematic progress ramp from 000% to 100% over ~1.35 seconds
    const duration = 1350;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Trigger page-loaded right as curtain starts lifting
        document.documentElement.classList.add('page-loaded');
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 220);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0A0A0C] text-[#F0EFF5] flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none pointer-events-auto"
        >
          {/* Top Metadata */}
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-[#8E92A4]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-text-primary font-semibold text-white">Devanshu Saini</span>
            </div>
            <span className="hidden sm:inline">Personal Portfolio // 2026</span>
          </div>

          {/* Center Brand & Numerical Counter */}
          <div className="my-auto flex flex-col items-center justify-center text-center py-10">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              {progress < 100 ? 'INITIALIZING EXPERIENCE' : 'WELCOME'}
            </span>
            <div className="font-condensed font-extrabold text-7xl sm:text-9xl md:text-[11rem] tracking-tight text-white leading-none">
              {String(progress).padStart(3, '0')}%
            </div>
          </div>

          {/* Bottom Progress Bar & Status */}
          <div className="w-full max-w-xl mx-auto space-y-3 font-mono text-[11px] text-[#8E92A4]">
            <div className="flex items-center justify-between uppercase tracking-wider">
              <span>
                {progress < 60
                  ? 'Loading Architectures & Systems'
                  : progress < 100
                  ? 'Rendering Modern Viewport'
                  : 'Portfolio Ready'}
              </span>
              <span className="text-accent font-bold">{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
