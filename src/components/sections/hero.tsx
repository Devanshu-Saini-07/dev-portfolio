'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

export function Hero() {
  const CORE_TAGS = ['Python', 'Java', 'Django', 'Flask', 'MySQL', 'Next.js', 'C++', 'Git'];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden border-b border-border/80"
    >
      {/* Background Subtle Grid & Technical Motifs */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        {/* Top Eyebrow & Live Status Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-primary font-medium">AVAILABLE FOR WORK</span>
            <span className="text-border">•</span>
            <span className="text-text-secondary text-[11px]">B.TECH CSE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-secondary">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>28.6139° N, 77.2090° E // INDIA</span>
          </div>
        </motion.div>

        {/* Main Grid: Oversized Typography Left, Portrait & Specs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Massive Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Introductory line */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest font-semibold mb-2"
            >
              // DEVELOPER & SOFTWARE ENGINEER
            </motion.p>

            {/* Massive Display Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display display-massive text-text-primary mb-6 tracking-tighter"
            >
              <span>DEVANSHU</span>
              <br />
              <span className="text-accent underline decoration-border decoration-wavy underline-offset-8">
                SAINI
              </span>
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-text-secondary fluid-body max-w-xl mb-8 leading-relaxed font-normal"
            >
              Computer Science student building practical software, robust backend
              systems, and thoughtful digital interfaces. Focused on clean architecture,
              database integrity, and turning ideas into usable software.
            </motion.p>

            {/* Actions: View Projects & Contact Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto group">
                <span>View Selected Work</span>
                <span className="font-mono text-xs opacity-75 ml-1">[03]</span>
                <ArrowDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                <span>Get in Touch</span>
                <span className="font-mono text-xs opacity-75 ml-1">[05]</span>
              </Button>
            </motion.div>

            {/* Primary Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="w-full pt-6 border-t border-border/80 flex flex-wrap items-center gap-2"
            >
              <span className="font-mono text-xs text-text-secondary uppercase tracking-wider mr-2">
                Stack:
              </span>
              {CORE_TAGS.map((tag) => (
                <Badge key={tag} variant="default" size="sm" className="font-mono">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Portrait & Spec Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Outer Card with Editorial Corner Accents */}
              <div className="relative bg-surface rounded-xl border border-border p-3.5 shadow-md group hover:border-accent/40 transition-colors">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-elevated border border-border/80">
                  <Image
                    src="/images/devanshu.png"
                    alt="Devanshu Saini"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 370px, 400px"
                    priority
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50 pointer-events-none" />

                  {/* Corner Coordinates overlay */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border font-mono text-[10px] text-text-primary">
                    DEV // 07
                  </div>
                </div>

                {/* Technical Footnote Metadata */}
                <div className="mt-3.5 px-2 py-2 flex items-center justify-between font-mono text-xs border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span className="text-text-primary font-semibold">Devanshu Saini</span>
                  </div>
                  <span className="text-accent text-[11px] font-medium">B.Tech CSE</span>
                </div>
              </div>

              {/* Decorative Corner Marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Social Bar & Scroll Indicator */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-5 font-mono text-xs text-text-secondary">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
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
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
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
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
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
