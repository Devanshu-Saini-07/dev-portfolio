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
  Layers,
  ArrowUpRight,
  Code,
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

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="PORTFOLIO & CODE"
            title="Featured Projects"
            description="Verified projects developed from scratch, backed by open-source repositories and tested implementations."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface border border-border rounded-lg self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-foreground font-semibold shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRIMARY FEATURED PROJECTS: Large Editorial Layout */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={project.id}
                className="group relative bg-surface rounded-xl border border-border hover:border-border-focus transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Frame (7 cols) */}
                  <div
                    className={`lg:col-span-7 bg-surface-elevated border-b lg:border-b-0 ${
                      isReversed ? 'lg:border-l lg:order-2' : 'lg:border-r lg:order-1'
                    } border-border p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Visual Window Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80 font-mono text-xs text-text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="w-2.5 h-2.5 rounded-full bg-border" />
                        <span className="ml-2 text-text-primary font-medium truncate max-w-[200px]">
                          {project.id}.dev
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {project.stars !== undefined && project.stars > 0 && (
                          <span className="flex items-center gap-1 text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <span>{project.stars}</span>
                          </span>
                        )}
                        <Badge variant="subtle" size="sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Visual Body: Real image or Clean Editorial Graphic */}
                    <div className="relative min-h-[220px] sm:min-h-[280px] rounded-lg overflow-hidden border border-border/60 bg-surface flex items-center justify-center">
                      {project.image ? (
                        <div className="relative w-full h-full min-h-[240px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        /* Clean Technical Editorial Visualization */
                        <div className="w-full h-full p-6 flex flex-col justify-between bg-grid-subtle">
                          <div className="font-mono text-xs text-accent space-y-1">
                            <p className="opacity-80">// Architecture specification</p>
                            <p className="text-text-primary font-semibold text-sm">
                              {project.architectureNotes || 'Modular Architecture'}
                            </p>
                          </div>

                          <div className="my-6 p-4 rounded bg-surface-elevated/80 border border-border font-mono text-xs text-text-secondary space-y-2">
                            <div className="flex items-center justify-between text-text-primary">
                              <span className="flex items-center gap-1.5">
                                <Terminal className="w-3.5 h-3.5 text-accent" />
                                <span>Core Pipeline</span>
                              </span>
                              <span className="text-[10px] text-accent uppercase font-semibold">
                                Verified
                              </span>
                            </div>
                            <p className="line-clamp-2 text-text-secondary font-mono text-[11px]">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between font-mono text-[11px] text-text-secondary">
                            <span>GitHub: Devanshu-Saini-07</span>
                            <span className="text-accent">Production Ready</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Architecture Subtitle Footer */}
                    {project.architectureNotes && (
                      <div className="mt-4 pt-3 border-t border-border/60 font-mono text-[11px] text-text-secondary truncate">
                        <span className="text-accent font-medium">Stack: </span>
                        {project.architectureNotes}
                      </div>
                    )}
                  </div>

                  {/* Project Content & Metadata (5 cols) */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Eyebrow */}
                      <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold block mb-2">
                        {project.eyebrow}
                      </span>

                      {/* Title */}
                      <h3 className="font-display font-bold text-text-primary text-2xl mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {project.longDescription || project.description}
                      </p>

                      {/* Key Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-6 space-y-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold block">
                            Key Highlights:
                          </span>
                          <ul className="space-y-1.5">
                            {project.highlights.map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-text-secondary leading-snug"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          isExternal
                          variant="primary"
                          size="sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      )}
                      <Button
                        href={project.githubUrl}
                        isExternal
                        variant="secondary"
                        size="sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* SECONDARY & SPECIALIZED PROJECTS GRID */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-display font-bold text-text-primary text-xl">
                Additional Engineered Systems & Tools
              </h3>
              <span className="font-mono text-xs text-text-secondary">
                {secondaryProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-surface rounded-lg border border-border hover:border-border-focus p-6 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 shadow-sm hover:shadow"
                >
                  <div>
                    {/* Header with Category & Stars */}
                    <div className="flex items-center justify-between mb-3 font-mono text-xs">
                      <Badge variant="subtle" size="sm">
                        {project.category}
                      </Badge>
                      {project.stars !== undefined && project.stars > 0 && (
                        <span className="flex items-center gap-1 text-text-secondary group-hover:text-accent transition-colors">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                    </div>

                    {/* Image if available (e.g. Student Portal) */}
                    {project.image && (
                      <div className="relative aspect-video rounded-md overflow-hidden mb-4 border border-border bg-surface-elevated">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h4 className="font-display font-bold text-text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="default" size="sm" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-mono text-text-secondary self-center">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border font-mono text-xs">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-text-primary hover:text-accent transition-colors font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* View All Projects on GitHub Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-accent">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <p className="text-text-primary font-medium text-sm">
                Explore full source code repositories and commit logs
              </p>
              <p className="text-text-secondary text-xs">
                All 16 public repositories available on GitHub
              </p>
            </div>
          </div>
          <Button
            href={`${GITHUB_PROFILE_URL}?tab=repositories`}
            isExternal
            variant="outline"
            size="md"
          >
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
}
