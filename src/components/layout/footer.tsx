import React from 'react';
import Link from 'next/link';
import {
  PRIMARY_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
} from '@/data/social-links';
import { ArrowUp, Github, Linkedin, Code2, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Brand Info */}
          <div>
            <Link
              href="#hero"
              className="font-display font-bold text-lg text-text-primary tracking-tight hover:text-accent transition-colors"
            >
              DEVANSHU SAINI
            </Link>
            <p className="font-mono text-xs text-text-secondary mt-1">
              Building practical software solutions through code and engineering.
            </p>
          </div>

          {/* Social Navigation */}
          <div className="flex items-center gap-5 font-mono text-xs text-text-secondary">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${PRIMARY_EMAIL}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-secondary">
          <p>© {currentYear} Devanshu Saini. Crafted with Next.js, TypeScript & Tailwind CSS.</p>

          <Link
            href="#hero"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
