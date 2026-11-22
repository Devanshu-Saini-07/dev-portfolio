'use client';

import { useEffect } from 'react';

/**
 * High-performance, GPU-accelerated scroll reveal observer.
 * Operates purely on the browser compositor thread without requestAnimationFrame JS thrashing.
 * Once an element arrives in view, it is permanently marked as .vis and unobserved
 * so that it never re-animates, jitters, or degrades scrolling performance.
 */
export function ScrollRevealProvider() {
  useEffect(() => {
    // Signal to CSS that JavaScript is active
    document.documentElement.classList.add('js-ready');

    // Respect user's reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale').forEach((el) => {
        el.classList.add('vis');
      });
      return;
    }

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          // Require element to be 40px inside the visible viewport before triggering arrival
          rootMargin: '0px 0px -40px 0px',
        }
      );

      const observeElements = () => {
        const elements = document.querySelectorAll(
          '.reveal:not(.vis), .reveal-l:not(.vis), .reveal-r:not(.vis), .reveal-scale:not(.vis)'
        );
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          // If element is already prominently within the viewport, reveal with natural timing
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            el.classList.add('vis');
          } else {
            observer?.observe(el);
          }
        });
      };

      observeElements();

      // Re-check on mutation for dynamically filtered tabs or DOM updates
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });
    };

    // If preloader is present, wait until page-loaded is added so arrival animations trigger visibly
    if (document.documentElement.classList.contains('page-loaded')) {
      initObserver();
    } else {
      const checkLoaded = setInterval(() => {
        if (document.documentElement.classList.contains('page-loaded')) {
          clearInterval(checkLoaded);
          // Small delay after preloader lifts to begin observing scroll reveals
          setTimeout(initObserver, 350);
        }
      }, 50);

      // Fallback timeout in case page-loaded isn't fired
      const fallbackTimer = setTimeout(() => {
        clearInterval(checkLoaded);
        if (!observer) initObserver();
      }, 2500);

      return () => {
        clearInterval(checkLoaded);
        clearTimeout(fallbackTimer);
        observer?.disconnect();
        mutationObserver?.disconnect();
      };
    }

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return null;
}
