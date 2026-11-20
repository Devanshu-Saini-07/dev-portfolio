'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GITHUB_PROFILE_URL } from '@/data/social-links';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.href.replace('#', ''),
        element: document.getElementById(item.href.replace('#', '')),
      })).filter((item) => item.element !== null);

      const scrollPos = window.scrollY + 120;
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-text-primary focus-visible:outline-accent"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded bg-surface border border-border text-accent group-hover:border-accent font-mono text-sm font-semibold transition-colors">
              DS
            </span>
            <div className="flex flex-col">
              <span className="leading-tight tracking-tight font-extrabold text-sm sm:text-base">
                DEVANSHU SAINI
              </span>
              <span className="font-mono text-[10px] text-text-secondary tracking-widest font-normal">
                SOFTWARE ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/70 border border-border/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-surface-elevated text-text-primary shadow-sm border border-border/70 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/40'
                  }`}
                >
                  {item.label}
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
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary px-2.5 py-1.5 rounded border border-border hover:border-border-focus bg-surface transition-colors"
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-b border-border">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-surface-elevated text-accent font-semibold border-l-2 border-accent'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-mono text-text-primary p-3 rounded-md bg-surface border border-border"
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
