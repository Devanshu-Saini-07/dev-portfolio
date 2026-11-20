import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
} from '@/data/social-links';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';

export function Hero() {
  const CORE_TECH = ['Python', 'Java', 'Django', 'Flask', 'MySQL', 'Next.js', 'C++', 'Git'];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/60"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status & Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Available for opportunities</span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-secondary font-medium">
                ENGINEERING DIGITAL EXPERIENCES
              </span>
            </div>

            {/* Name Introduction */}
            <div className="mb-3">
              <p className="font-mono text-sm sm:text-base text-accent font-semibold tracking-wide">
                Hi, I&apos;m Devanshu Saini.
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-text-primary fluid-h1 mb-6 max-w-2xl">
              Building thoughtful solutions through code and engineering.
            </h1>

            {/* Description */}
            <p className="text-text-secondary fluid-body mb-8 max-w-xl leading-relaxed">
              I&apos;m a Computer Science student and aspiring engineer interested in
              building practical software, exploring technology, and turning ideas
              into working products.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto">
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                <span>Let&apos;s Connect</span>
              </Button>
            </div>

            {/* Tech Stack Metadata Badges */}
            <div className="w-full pt-6 border-t border-border/80">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-medium">
                  Primary Stack:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CORE_TECH.map((tech) => (
                  <Badge key={tech} variant="default" size="sm" className="font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary hover:text-accent transition-colors py-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-accent" />
              </a>
              <span className="text-border">•</span>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary hover:text-accent transition-colors py-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-accent" />
              </a>
              <span className="text-border">•</span>
              <a
                href={LEETCODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary hover:text-accent transition-colors py-1"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
                <span>LeetCode</span>
                <ArrowUpRight className="w-3 h-3 text-accent" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Profile Image Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Editorial Frame */}
              <div className="relative bg-surface rounded-xl border border-border p-3 shadow-md">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-elevated border border-border/80">
                  <Image
                    src="/images/devanshu.png"
                    alt="Devanshu Saini"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                    priority
                    className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Engineering Card Metadata Footnote */}
                <div className="mt-3.5 px-2 py-1.5 flex items-center justify-between font-mono text-xs border-t border-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-text-primary font-medium">B.Tech CSE</span>
                  </div>
                  <span className="text-text-secondary">India</span>
                </div>
              </div>

              {/* Decorative Corner Accent Mark */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
