'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center opacity-70 ${className}`}
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
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-surface hover:bg-surface-elevated text-text-primary transition-colors focus-visible:outline-accent ${className}`}
      title={`Toggle theme (currently ${resolvedTheme})`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-accent transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
