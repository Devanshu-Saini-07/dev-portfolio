import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: string;
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
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 mb-3.5 font-mono text-xs text-text-secondary uppercase tracking-widest',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        {number && <span className="text-accent font-semibold">{number}</span>}
        {number && eyebrow && <span className="text-border">//</span>}
        {eyebrow && <span className="text-text-secondary">{eyebrow}</span>}
      </div>

      <h2 className="font-display font-extrabold text-text-primary display-headline tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-text-secondary fluid-body leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
