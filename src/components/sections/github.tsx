'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/data/social-links';
import {
  Github,
  Star,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Activity,
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
    name: 'SocialMedia-app',
    description: 'Django full-stack platform with authentication, media feeds, follow graph, and direct messaging.',
    language: 'Python / Django',
    stars: 3,
    url: 'https://github.com/Devanshu-Saini-07/SocialMedia-app',
  },
  {
    name: 'Java-Project-Campus-Navigation-GUI',
    description: 'Zero-dependency Java AWT desktop application implementing Dijkstra & A* pathfinding.',
    language: 'Java / AWT',
    stars: 3,
    url: 'https://github.com/Devanshu-Saini-07/Java-Project-Campus-Navigation-GUI',
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
    <section id="github" className="py-14 sm:py-20 md:py-28 lg:py-32 border-b border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <SectionHeading
            number="02"
            eyebrow="GITHUB"
            title={<>PUBLIC <span className="text-accent">CODEBASE</span>.</>}
            description="All engineering projects and algorithmic implementations are public on GitHub. Track commits, stars, and repository architectures."
            className="mb-0"
          />

          <Button href={GITHUB_PROFILE_URL} isExternal variant="secondary" size="md" className="backdrop-blur-sm bg-surface/80 self-start md:self-auto min-h-[44px]">
            <Github className="w-4 h-4 mr-1.5" />
            <span>@{GITHUB_USERNAME}</span>
            <ArrowUpRight className="w-4 h-4 text-accent ml-1" />
          </Button>
        </div>

        {/* Verified Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-12 font-mono">
          <div className="p-3.5 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 shadow-xs hover:shadow-[0_16px_32px_-8px_rgba(18,19,26,0.10)] dark:hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.20),0_0_15px_-3px_rgba(223,193,123,0.15)] hover:-translate-y-1 transition-all duration-300 reveal d1">
            <div className="flex items-center justify-between text-text-secondary mb-1.5 sm:mb-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider">Public Repos</span>
              <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              16
            </div>
            <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5 sm:mt-1">Verified on GitHub</p>
          </div>

          <div className="p-3.5 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 shadow-xs hover:shadow-[0_16px_32px_-8px_rgba(18,19,26,0.10)] dark:hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.20),0_0_15px_-3px_rgba(223,193,123,0.15)] hover:-translate-y-1 transition-all duration-300 reveal d2">
            <div className="flex items-center justify-between text-text-secondary mb-1.5 sm:mb-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider">Total Stars</span>
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              130+
            </div>
            <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5 sm:mt-1">Community stars</p>
          </div>

          <div className="p-3.5 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 shadow-xs hover:shadow-[0_16px_32px_-8px_rgba(18,19,26,0.10)] dark:hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.20),0_0_15px_-3px_rgba(223,193,123,0.15)] hover:-translate-y-1 transition-all duration-300 reveal d3">
            <div className="flex items-center justify-between text-text-secondary mb-1.5 sm:mb-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider">Core Stack</span>
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              PY / JAVA
            </div>
            <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5 sm:mt-1">&amp; C++, JS, SQL</p>
          </div>

          <div className="p-3.5 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent-secondary/50 shadow-xs hover:shadow-[0_16px_32px_-8px_rgba(18,19,26,0.10)] dark:hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.22),0_0_15px_-3px_rgba(7,143,145,0.15)] hover:-translate-y-1 transition-all duration-300 reveal d4">
            <div className="flex items-center justify-between text-text-secondary mb-1.5 sm:mb-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider">Authenticity</span>
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-secondary" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-accent-secondary">
              100% REAL
            </div>
            <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5 sm:mt-1">Zero fabricated claims</p>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {VERIFIED_REPOS.map((repo, idx) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-[0_0_30px_-5px_rgba(223,193,123,0.14)] reveal d${(idx % 4) + 1}`}
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

              <div className="pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-text-secondary">
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
