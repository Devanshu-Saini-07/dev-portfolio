'use client';

import React, { useEffect, useState } from 'react';

export function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle via requestAnimationFrame for 60fps performance
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Dynamic Multicolor Gradient Blobs */}
      <div className="absolute inset-0">
        {/* Blob 1: Luminous Warm Gold / Amber (Top Left - Hero & Brand) */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full opacity-25 sm:opacity-35 dark:opacity-20 sm:dark:opacity-30 blur-[60px] sm:blur-[130px] ambient-orb-1"
          style={{
            background:
              'radial-gradient(circle, rgba(223, 193, 123, 0.45) 0%, rgba(217, 119, 6, 0.25) 45%, transparent 70%)',
          }}
        />

        {/* Blob 2: Deep Electric Violet / Indigo (Top Right & Hero Portrait) */}
        <div
          className="absolute top-[5%] -right-[12%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full opacity-25 sm:opacity-35 dark:opacity-15 sm:dark:opacity-25 blur-[60px] sm:blur-[140px] ambient-orb-2"
          style={{
            background:
              'radial-gradient(circle, rgba(124, 58, 237, 0.40) 0%, rgba(99, 102, 241, 0.20) 50%, transparent 70%)',
          }}
        />

        {/* Blob 3: Radiant Cyan / Emerald Teal (Mid-Left - Projects & Skills, desktop/tablet only) */}
        <div
          className="hidden sm:block absolute top-[40%] -left-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full opacity-30 dark:opacity-20 blur-[150px] ambient-orb-3"
          style={{
            background:
              'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(13, 148, 136, 0.20) 45%, transparent 70%)',
          }}
        />

        {/* Blob 4: Sunset Rose / Crimson (Mid-Right - GitHub & Journey, desktop/tablet only) */}
        <div
          className="hidden sm:block absolute top-[65%] -right-[15%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full opacity-30 dark:opacity-20 blur-[140px] ambient-orb-4"
          style={{
            background:
              'radial-gradient(circle, rgba(244, 63, 94, 0.30) 0%, rgba(190, 24, 93, 0.15) 50%, transparent 70%)',
          }}
        />

        {/* Blob 5: Royal Sapphire / Deep Azure (Bottom - Contact & Footer, desktop/tablet only) */}
        <div
          className="hidden sm:block absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full opacity-30 dark:opacity-25 blur-[150px] ambient-orb-5"
          style={{
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(99, 102, 241, 0.20) 45%, transparent 70%)',
          }}
        />
      </div>

      {/* Interactive Cursor Ambient Spotlight */}
      {isMounted && (
        <div
          className="hidden md:block absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 dark:opacity-20 blur-[80px] transition-transform duration-100 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              'radial-gradient(circle, rgba(223, 193, 123, 0.35) 0%, rgba(124, 58, 237, 0.20) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Subtle Dot Matrix & Fine Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px, 72px 72px, 72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)',
        }}
      />

      {/* Vignette Edge Shading to preserve contrast */}
      <div
        className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, var(--bg) 95%)',
        }}
      />
    </div>
  );
}
