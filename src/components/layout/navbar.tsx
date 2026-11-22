'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X } from 'lucide-react';
import { GITHUB_PROFILE_URL } from '@/data/social-links';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'WORK', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.href.replace('#', ''),
        element: document.getElementById(item.href.replace('#', '')),
      }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null)
        .sort((a, b) => a.element.offsetTop - b.element.offsetTop);

      const scrollPos = window.scrollY + 180;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      }, 50);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3.5 border-b border-border shadow-xs'
          : 'py-5 sm:py-6'
      }`}
      style={{
        backgroundColor: isScrolled || mobileMenuOpen ? 'var(--bg)' : 'transparent',
      }}
    >
      <div className="w-full px-4 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Brand: Gold Dot + Name in Title Case matching Mudit Sharma */}
          <Link
            href="#hero"
            className="group flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wide text-text-primary hover:text-accent transition-colors focus-visible:outline-none py-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="font-medium">Devanshu Saini</span>
          </Link>

          {/* Right Container: Desktop Nav + ThemeToggle + Mobile Hamburger (Rightmost) */}
          <div className="flex items-center gap-3 sm:gap-8 lg:gap-10">
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative py-1 text-[11px] font-mono uppercase tracking-[0.28em] transition-colors duration-200 group ${
                      isActive
                        ? 'text-accent font-bold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-accent transition-all duration-300 ease-out ${
                        isActive
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <ThemeToggle />

            {/* Mobile Menu Button with 44px hit target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (100% Solid Opaque Background in both Dark and Light themes) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[56px] bottom-0 z-50 md:hidden flex flex-col justify-between px-6 py-8 border-b border-border shadow-2xl overflow-y-auto"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            <nav className="flex flex-col font-mono">
              {NAV_ITEMS.map((item, idx) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg uppercase tracking-[0.25em] py-4 border-b border-border/60 transition-colors flex items-center justify-between min-h-[48px] ${
                      isActive
                        ? 'text-accent font-bold'
                        : 'text-text-primary hover:text-accent'
                    }`}
                    style={{ transitionDelay: `${idx * 0.03}s` }}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    ) : (
                      <span className="text-text-secondary/40 text-xs">0{idx + 1}</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 mt-auto border-t border-border flex items-center justify-between font-mono text-xs text-text-secondary">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent uppercase tracking-wider transition-colors min-h-[44px] flex items-center"
              >
                GitHub ↗
              </a>
              <span>RAJASTHAN // INDIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
