'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/data/social-links';
import {
  Github,
  Star,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Activity,
  Layers,
} from 'lucide-react';

interface GitHubRepoItem {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}

const VERIFIED_REPOS: GitHubRepoItem[] = [
  {
    name: 'Anime-Recommendations',
    description: 'Flask & MySQL web app with watchlists, status filters, and AI recommendation pipeline.',
    language: 'Python / Flask',
    stars: 48,
    url: 'https://github.com/Devanshu-Saini-07/Anime-Recommendations',
  },
  {
    name: 'CAR-SELECTION-TOOL',
    description: 'Automotive preference evaluation CLI with dataset filtering and Matplotlib analytics.',
    language: 'Python',
    stars: 13,
    url: 'https://github.com/Devanshu-Saini-07/CAR-SELECTION-TOOL',
  },
  {
    name: 'Hospital-Management-using-python',
    description: 'Healthcare administration system managing patient records, appointments, and MySQL storage.',
    language: 'Python / MySQL',
    stars: 13,
    url: 'https://github.com/Devanshu-Saini-07/Hospital-Management-using-python',
  },
  {
    name: 'Bank-Application',
    description: 'Object-oriented command-line banking system simulating account lifecycle and balance validation.',
    language: 'Python',
    stars: 13,
    url: 'https://github.com/Devanshu-Saini-07/Bank-Application',
  },
  {
    name: 'Student-Portal-figma-to-html-css',
    description: 'Comprehensive student management UI translated from Figma to semantic HTML5 and CSS3.',
    language: 'HTML / CSS',
    stars: 12,
    url: 'https://github.com/Devanshu-Saini-07/Student-Portal-figma-to-html-css',
  },
  {
    name: 'leetcode',
    description: 'Curated repository of algorithmic solutions in C++ categorized by data structure and difficulty.',
    language: 'C++',
    stars: 11,
    url: 'https://github.com/Devanshu-Saini-07/leetcode',
  },
  {
    name: 'Azadi-The-Journey-of-India',
    description: 'Interactive historical tribute website celebrating India with timeline animations and audio.',
    language: 'JavaScript / Audio',
    stars: 9,
    url: 'https://github.com/Devanshu-Saini-07/Azadi-The-Journey-of-India',
  },
  {
    name: 'Inventory-Management-using-python',
    description: 'Relational stock management application utilizing Python and MySQL schemas.',
    language: 'Python / MySQL',
    stars: 9,
    url: 'https://github.com/Devanshu-Saini-07/Inventory-Management-using-python',
  },
];

export function GitHubSection() {
  return (
    <section id="github" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            number="04"
            eyebrow="OPEN SOURCE REPOSITORIES"
            title="PUBLIC CODEBASE."
            description="All engineering projects and algorithmic implementations are public on GitHub. Track commits, stars, and repository architectures."
            className="mb-0"
          />

          <Button href={GITHUB_PROFILE_URL} isExternal variant="secondary" size="md">
            <Github className="w-4 h-4 mr-1.5" />
            <span>@{GITHUB_USERNAME}</span>
            <ArrowUpRight className="w-4 h-4 text-accent ml-1" />
          </Button>
        </div>

        {/* Verified Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono">
          <div className="p-6 rounded-xl bg-surface border border-border shadow-xs">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="text-xs uppercase tracking-wider">Public Repos</span>
              <FolderGit2 className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
              16
            </div>
            <p className="text-[11px] text-text-secondary mt-1">Verified on GitHub</p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border shadow-xs">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="text-xs uppercase tracking-wider">Total Stars</span>
              <Star className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
              130+
            </div>
            <p className="text-[11px] text-text-secondary mt-1">Community stars</p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border shadow-xs">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="text-xs uppercase tracking-wider">Core Stack</span>
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
              PY / JAVA
            </div>
            <p className="text-[11px] text-text-secondary mt-1">&amp; C++, JS, SQL</p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border shadow-xs">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="text-xs uppercase tracking-wider">Authenticity</span>
              <Activity className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent">
              100% REAL
            </div>
            <p className="text-[11px] text-text-secondary mt-1">Zero fabricated claims</p>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {VERIFIED_REPOS.map((repo, idx) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-surface border border-border hover:border-accent/40 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono text-xs text-text-secondary">
                  <span className="text-accent flex items-center gap-1 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <span>{repo.stars}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h4 className="font-display font-bold text-text-primary text-base mb-2 group-hover:text-accent transition-colors truncate">
                  {repo.name}
                </h4>

                <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between font-mono text-[11px] text-text-secondary">
                <span className="truncate">{repo.language}</span>
                <span className="text-accent font-medium">Inspect Code</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
