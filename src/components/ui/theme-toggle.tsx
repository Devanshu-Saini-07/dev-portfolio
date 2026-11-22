'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, toggleThemeWithReveal } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 sm:w-8 sm:h-8 rounded-none border border-border bg-surface flex items-center justify-center opacity-70 ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={(e) => toggleThemeWithReveal(e)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-none border border-border/40 bg-surface/50 hover:bg-surface hover:border-accent/60 text-text-secondary hover:text-text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent touch-manipulation ${className}`}
      title={`Toggle theme (currently ${resolvedTheme})`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-accent hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-accent hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
