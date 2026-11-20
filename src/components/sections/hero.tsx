'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
} from '@/data/social-links';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Compass,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  const CORE_TAGS = ['Python', 'Java', 'Django', 'Flask', 'MySQL', 'Next.js', 'C++', 'Git'];

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-border/80 overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-primary font-semibold">AVAILABLE FOR WORK</span>
            <span className="text-border">•</span>
            <span className="text-text-secondary text-[11px]">B.TECH CSE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-secondary">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>28.6139° N, 77.2090° E // INDIA</span>
          </div>
        </div>

        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: High-Impact Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-accent uppercase tracking-widest font-semibold">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>// FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER</span>
            </div>

            {/* Prominent Name & Headline */}
            <h1 className="font-display font-extrabold text-text-primary text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-4">
              Hi, I&apos;m{' '}
              <span className="text-accent underline decoration-border decoration-wavy underline-offset-8">
                Devanshu Saini
              </span>
              .
            </h1>

            {/* Sub-headline */}
            <p className="font-display font-bold text-text-primary text-xl sm:text-2xl lg:text-3xl tracking-tight leading-snug mb-5 text-text-primary/95">
              Building practical software through code, architecture, and engineering.
            </p>

            {/* Description */}
            <p className="text-text-secondary fluid-body text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              I&apos;m a Computer Science student and developer focused on building
              robust backend architectures, algorithmic solutions, and modern web applications.
              Turning complex ideas into reliable, working software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto font-semibold shadow-sm">
                <span>Explore My Work</span>
                <span className="font-mono text-xs opacity-80 ml-1">[03]</span>
                <ArrowDown className="w-4 h-4 ml-1" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                <span>Let&apos;s Connect</span>
                <span className="font-mono text-xs opacity-80 ml-1">[05]</span>
              </Button>
            </div>

            {/* Stack Tags */}
            <div className="w-full pt-6 border-t border-border/80 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-wider mr-2 font-medium">
                Core Stack:
              </span>
              {CORE_TAGS.map((tag) => (
                <Badge key={tag} variant="default" size="sm" className="font-mono font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Outer Card Frame */}
              <div className="relative bg-surface rounded-2xl border border-border p-3.5 shadow-lg group hover:border-accent/40 transition-all duration-300">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-elevated border border-border/80">
                  <Image
                    src="/images/devanshu.png"
                    alt="Devanshu Saini — Software Engineer"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/85 backdrop-blur-md border border-border font-mono text-[10px] text-text-primary font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>DEV // 07</span>
                  </div>
                </div>

                {/* Technical Footnote Metadata */}
                <div className="mt-3.5 px-2 py-2 flex items-center justify-between font-mono text-xs border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span className="text-text-primary font-bold">Devanshu Saini</span>
                  </div>
                  <span className="text-accent text-[11px] font-semibold">B.Tech CSE</span>
                </div>
              </div>

              {/* Decorative Corner Marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
        </div>

        {/* Bottom Social Bar & Quick Indicator */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-5 font-mono text-xs text-text-secondary">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-accent" />
            </a>
            <span className="text-border">•</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-accent" />
            </a>
            <span className="text-border">•</span>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-accent" />
            </a>
          </div>

          <a
            href="#about"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            <span>SCROLL DOWN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
