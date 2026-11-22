'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12 md:mb-16 reveal',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl',
        className
      )}
    >
      {/* Eyebrow with gold dash and tracking */}
      <div
        className={cn(
          'flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 font-mono text-[10px] sm:text-xs text-accent uppercase tracking-[0.22em] sm:tracking-[0.25em] font-medium',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="w-5 sm:w-6 h-[1px] bg-accent inline-block" />
        {number && <span>{number} —</span>}
        {eyebrow && <span>{eyebrow}</span>}
      </div>

      {/* Condensed Bebas Neue Display Heading matching Mudit Sharma */}
      <h2 className="font-condensed font-normal text-[clamp(2.4rem,9.5vw,4.5rem)] sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight uppercase leading-[0.88] text-text-primary">
        {title}
      </h2>

      {description && (
        <p className="mt-2.5 sm:mt-4 text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
