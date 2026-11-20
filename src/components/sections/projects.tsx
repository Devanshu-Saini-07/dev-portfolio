'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory, Project } from '@/types';
import { GITHUB_PROFILE_URL } from '@/data/social-links';
import {
  ExternalLink,
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
  'Data & CLI',
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            number="03"
            eyebrow="SELECTED WORK"
            title="FEATURED PROJECTS."
            description="Production web apps, systems programming tools, and user interfaces crafted from verified GitHub repositories."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-surface border border-border rounded-lg self-start md:self-auto shadow-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-foreground font-semibold shadow-xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Large Editorial Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const projectNumber = String(idx + 1).padStart(3, '0');

            return (
              <article
                key={project.id}
                className="group relative bg-surface rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Half (7 cols) */}
                  <div
                    className={`lg:col-span-7 bg-surface-elevated p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 ${
                      isReversed ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'
                    } border-border relative overflow-hidden`}
                  >
                    {/* Visual Window Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80 font-mono text-xs text-text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="ml-2 font-mono text-text-primary font-semibold">
                          //{project.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {project.stars !== undefined && project.stars > 0 && (
                          <span className="flex items-center gap-1 font-mono text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <span>{project.stars}</span>
                          </span>
                        )}
                        <Badge variant="subtle" size="sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Visual Body */}
                    <div className="relative min-h-[240px] sm:min-h-[300px] rounded-xl overflow-hidden border border-border/70 bg-surface flex items-center justify-center">
                      {project.image ? (
                        <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        /* Clean Technical Editorial Wireframe */
                        <div className="w-full h-full p-8 flex flex-col justify-between bg-grid-subtle">
                          <div className="font-mono text-xs text-accent space-y-1">
                            <p className="opacity-80">// Verified Architecture</p>
                            <p className="text-text-primary font-bold text-base">
                              {project.architectureNotes || 'Modular Software Architecture'}
                            </p>
                          </div>

                          <div className="my-6 p-5 rounded-lg bg-surface-elevated/90 border border-border font-mono text-xs text-text-secondary space-y-3">
                            <div className="flex items-center justify-between text-text-primary">
                              <span className="flex items-center gap-2 font-semibold">
                                <Terminal className="w-4 h-4 text-accent" />
                                <span>SYSTEM PROTOCOL</span>
                              </span>
                              <span className="text-[10px] text-accent uppercase font-mono px-2 py-0.5 rounded bg-accent-subtle">
                                VERIFIED
                              </span>
                            </div>
                            <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between font-mono text-[11px] text-text-secondary">
                            <span>REPO: Devanshu-Saini-07/{project.id}</span>
                            <span className="text-accent font-semibold">Ready</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Architecture Subtitle Footer */}
                    {project.architectureNotes && (
                      <div className="mt-4 pt-3 border-t border-border/60 font-mono text-xs text-text-secondary truncate">
                        <span className="text-accent font-medium">Stack: </span>
                        {project.architectureNotes}
                      </div>
                    )}
                  </div>

                  {/* Narrative Half (5 cols) */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Project Index Number & Category */}
                      <div className="flex items-center gap-3 mb-4 font-mono text-xs">
                        <span className="text-accent font-bold text-sm tracking-widest">
                          {projectNumber} //
                        </span>
                        <span className="text-text-secondary uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-text-primary text-2xl sm:text-3xl mb-4 group-hover:text-accent transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary fluid-body text-sm leading-relaxed mb-6">
                        {project.longDescription || project.description}
                      </p>

                      {/* Verified Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-6 space-y-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block mb-2">
                            Key Capabilities:
                          </span>
                          <ul className="space-y-2 font-mono text-xs">
                            {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-2.5 text-text-secondary leading-snug"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="default" size="sm" className="font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          isExternal
                          variant="primary"
                          size="md"
                          className="group/btn"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Button>
                      )}
                      <Button
                        href={project.githubUrl}
                        isExternal
                        variant="secondary"
                        size="md"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        <span>Source Code</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
