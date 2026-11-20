import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
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
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display font-bold text-text-primary fluid-h2 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary fluid-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
