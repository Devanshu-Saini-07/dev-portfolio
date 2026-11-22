'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleThemeWithReveal: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('dev_theme') as Theme) || 'system';
    setThemeState(savedTheme);

    const applyTheme = (t: Theme) => {
      const root = document.documentElement;
      let target: 'light' | 'dark' = 'dark';

      if (t === 'system') {
        target = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        target = t;
      }

      setResolvedTheme(target);
      if (target === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const currentSaved = (localStorage.getItem('dev_theme') as Theme) || 'system';
      if (currentSaved === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('dev_theme', newTheme);
    const root = document.documentElement;
    let target: 'light' | 'dark' = 'dark';

    if (newTheme === 'system') {
      target = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      target = newTheme;
    }

    setResolvedTheme(target);
    if (target === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const next = isCurrentlyDark ? 'light' : 'dark';
    setTheme(next);
  };

  const toggleThemeWithReveal = async (event?: React.MouseEvent) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      const next = resolvedTheme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      return;
    }

    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const next = isCurrentlyDark ? 'light' : 'dark';

    // Fallback for prefers-reduced-motion: instant toggle without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(next);
      return;
    }

    // Prevent concurrent transitions
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Calculate origin: exact center of theme toggle button
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event) {
      const target = (event.currentTarget || event.target) as HTMLElement | null;
      if (target && typeof target.getBoundingClientRect === 'function') {
        const rect = target.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else if (typeof event.clientX === 'number' && event.clientX > 0) {
        x = event.clientX;
        y = event.clientY;
      }
    }

    // Required radius to fully cover viewport corners
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const doc = document as Document & {
      startViewTransition?: (callback: () => Promise<void> | void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    // If View Transition API is not supported, apply theme cleanly with zero blank frames
    if (!doc.startViewTransition) {
      setTheme(next);
      isAnimatingRef.current = false;
      return;
    }

    try {
      const root = document.documentElement;

      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          // Synchronously toggle dark class on <html>
          if (next === 'dark') {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
          setThemeState(next);
          setResolvedTheme(next);
          localStorage.setItem('dev_theme', next);
        });
      });

      await transition.ready;

      // Animate circular clipPath on ::view-transition-new(root)
      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 750,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );

      await Promise.race([
        animation.finished.catch(() => {}),
        transition.finished.catch(() => {}),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
    } catch (err) {
      console.warn('ViewTransition fallback to setTheme:', err);
      setTheme(next);
    } finally {
      isAnimatingRef.current = false;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        toggleThemeWithReveal,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
