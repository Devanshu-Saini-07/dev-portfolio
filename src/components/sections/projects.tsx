'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { GITHUB_PROFILE_URL } from '@/data/social-links';
import {
  Github,
  Star,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Full-Stack',
  'Systems & Core',
  'Frontend & UI',
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 lg:py-32 border-b border-border/80 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <SectionHeading
            number="03"
            eyebrow="WORK"
            title={<>SELECTED <span className="text-accent">PROJECTS</span>.</>}
            description="Production web apps, systems programming tools, and user interfaces crafted from verified GitHub repositories."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-surface/90 backdrop-blur-md border border-border/80 rounded-lg self-start md:self-auto shadow-xs reveal">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-mono transition-all duration-200 min-h-[36px] sm:min-h-0 flex items-center ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-foreground font-bold shadow-xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Large Editorial Projects List */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const projectNumber = String(idx + 1).padStart(3, '0');

              return (
                <article
                  key={project.id}
                  className="group relative bg-surface/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/80 hover:border-accent/60 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(18,19,26,0.12),0_6px_16px_-4px_rgba(18,19,26,0.06)] dark:hover:shadow-[0_0_45px_-10px_rgba(124,58,237,0.22),0_0_20px_-5px_rgba(223,193,123,0.14)] hover:-translate-y-1.5 reveal"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
                      isReversed ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visual Preview Half (7 cols) */}
                    <div
                      className={`lg:col-span-7 bg-surface-elevated/80 p-4 sm:p-6 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 ${
                        isReversed ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'
                      } border-border/80 relative overflow-hidden`}
                    >
                      {/* Visual Window Header with MacOS-style traffic lights */}
                      <div className="flex items-center justify-between pb-2.5 sm:pb-4 mb-3 sm:mb-6 border-b border-border/80 font-mono text-[11px] sm:text-xs text-text-secondary">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-2 sm:w-2.5 h-2 sm:w-2.5 rounded-full bg-red-400/80 group-hover:bg-red-400 transition-colors" />
                          <span className="w-2 sm:w-2.5 h-2 sm:w-2.5 rounded-full bg-amber-400/80 group-hover:bg-amber-400 transition-colors" />
                          <span className="w-2 sm:w-2.5 h-2 sm:w-2.5 rounded-full bg-emerald-400/80 group-hover:bg-emerald-400 transition-colors" />
                          <span className="ml-1 sm:ml-2 font-mono text-text-primary font-semibold truncate max-w-[140px] sm:max-w-none">
                            //{project.id}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          {project.stars !== undefined && project.stars > 0 && (
                            <span className="flex items-center gap-1 font-mono text-accent">
                              <Star className="w-3.5 h-3.5 fill-accent" />
                              <span>{project.stars}</span>
                            </span>
                          )}
                          <Badge variant="subtle" size="sm" className="text-[10px] sm:text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Visual Body */}
                      <div className="relative min-h-[190px] sm:min-h-[260px] lg:min-h-[300px] rounded-lg sm:rounded-xl overflow-hidden border border-border/70 bg-surface/80 flex items-center justify-center">
                        {project.image ? (
                          <div className="relative w-full h-full min-h-[190px] sm:min-h-[260px] lg:min-h-[320px]">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </div>
                        ) : (
                          /* Clean Technical Editorial Wireframe */
                          <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-grid-subtle">
                            <div className="font-mono text-[11px] sm:text-xs text-accent space-y-1">
                              <p className="opacity-80">// Verified Architecture</p>
                              <p className="text-text-primary font-bold text-sm sm:text-base">
                                {project.architectureNotes || 'Modular Software Architecture'}
                              </p>
                            </div>

                            <div className="my-3 sm:my-6 p-3 sm:p-5 rounded-lg bg-surface-elevated/90 border border-border/80 font-mono text-[11px] sm:text-xs text-text-secondary space-y-2 sm:space-y-3 shadow-inner">
                              <div className="flex items-center justify-between text-text-primary">
                                <span className="flex items-center gap-1.5 sm:gap-2 font-semibold text-xs">
                                  <Terminal className="w-3.5 h-3.5 text-accent" />
                                  <span>SYSTEM PROTOCOL</span>
                                </span>
                                <span className="text-[9px] sm:text-[10px] text-accent-secondary uppercase font-mono px-1.5 py-0.5 rounded bg-accent-secondary-subtle font-semibold">
                                  VERIFIED
                                </span>
                              </div>
                              <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                                {project.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-text-secondary">
                              <span className="truncate max-w-[170px] sm:max-w-none">REPO: Devanshu-Saini-07/{project.id}</span>
                              <span className="text-accent font-semibold">Ready</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Architecture Subtitle Footer */}
                      {project.architectureNotes && (
                        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-border/60 font-mono text-[11px] sm:text-xs text-text-secondary truncate">
                          <span className="text-accent font-medium">Stack: </span>
                          {project.architectureNotes}
                        </div>
                      )}
                    </div>

                    {/* Narrative Half (5 cols) */}
                    <div
                      className={`lg:col-span-5 p-4 sm:p-6 lg:p-10 flex flex-col justify-between ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Project Index Number & Category */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 font-mono text-xs">
                          <span className="text-accent font-bold text-xs sm:text-sm tracking-widest">
                            {projectNumber} //
                          </span>
                          <span className="text-text-secondary uppercase tracking-widest text-[11px] sm:text-xs">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-extrabold text-text-primary text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4 group-hover:text-accent transition-colors tracking-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-secondary fluid-body text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6">
                          {project.longDescription || project.description}
                        </p>

                        {/* Verified Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-text-primary font-bold block mb-1 sm:mb-2">
                              Key Capabilities:
                            </span>
                            <ul className="space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs">
                              {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2 text-text-secondary leading-snug"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-5 sm:mb-8">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="default" size="sm" className="font-mono text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 sm:pt-6 border-t border-border/80">
                        {project.liveUrl && (
                          <Button
                            href={project.liveUrl}
                            isExternal
                            variant="primary"
                            size="sm"
                            className="group/btn sm:text-sm sm:px-5 sm:py-2.5 min-h-[44px]"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Button>
                        )}
                        <Button
                          href={project.githubUrl}
                          isExternal
                          variant="secondary"
                          size="sm"
                          className="group/btn sm:text-sm sm:px-5 sm:py-2.5 min-h-[44px]"
                        >
                          <Github className="w-3.5 h-3.5 mr-1.5" />
                          <span>Source Code</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Repositories on GitHub Footer */}
        <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-text-primary font-bold text-base">
                Explore Full Codebases & Git Commits
              </p>
              <p className="text-text-secondary font-mono text-xs">
                All 16 public repositories available on GitHub
              </p>
            </div>
          </div>
          <Button
            href={`${GITHUB_PROFILE_URL}?tab=repositories`}
            isExternal
            variant="outline"
            size="lg"
          >
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-accent ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
