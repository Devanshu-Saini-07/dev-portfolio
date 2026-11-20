'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GITHUB_PROFILE_URL } from '@/data/social-links';

const NAV_ITEMS = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Skills', href: '#skills' },
  { num: '03', label: 'Work', href: '#projects' },
  { num: '04', label: 'GitHub', href: '#github' },
  { num: '05', label: 'Contact', href: '#contact' },
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
      })).filter((item) => item.element !== null);

      const scrollPos = window.scrollY + 160;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element && item.element.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        isScrolled
          ? 'py-3 bg-background/85 backdrop-blur-xl border-b border-border shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Wordmark */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 font-display font-bold text-text-primary focus-visible:outline-accent"
          >
            <div className="w-8 h-8 rounded bg-surface border border-border group-hover:border-accent flex items-center justify-center font-mono text-xs text-accent transition-colors shadow-sm">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm sm:text-base leading-none group-hover:text-accent transition-colors">
                DEVANSHU SAINI
              </span>
              <span className="font-mono text-[9px] text-text-secondary tracking-widest mt-0.5">
                PORTFOLIO // 2.0
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Editorial Numbered Capsule */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/80 border border-border px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-surface-elevated text-text-primary border border-border font-semibold shadow-xs'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50'
                  }`}
                >
                  <span className={isActive ? 'text-accent' : 'text-text-secondary/70'}>
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-md border border-border hover:border-accent bg-surface transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-surface text-text-primary hover:bg-surface-elevated transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[59px] bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col px-6 py-8 border-b border-border">
          <nav className="flex flex-col gap-3 font-mono">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base py-3 px-4 rounded-lg border transition-colors ${
                    isActive
                      ? 'bg-surface-elevated border-accent text-accent font-semibold'
                      : 'bg-surface border-border text-text-primary hover:border-accent/40'
                  }`}
                >
                  <span className="font-display font-bold text-lg">{item.label}</span>
                  <span className="text-xs text-text-secondary">{item.num} //</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono text-text-primary p-3 rounded-lg bg-surface border border-border"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
