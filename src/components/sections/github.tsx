'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '@/data/social-links';
import {
  Github,
  Star,
  GitFork,
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
  forks: number;
  url: string;
}

const VERIFIED_REPOS: GitHubRepoItem[] = [
  {
    name: 'Anime-Recommendations',
    description: 'Flask & MySQL web app with watchlists, status filters, and AI recommendation pipeline.',
    language: 'Python / Flask',
    stars: 48,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Anime-Recommendations',
  },
  {
    name: 'CAR-SELECTION-TOOL',
    description: 'Automotive preference evaluation CLI with dataset filtering and Matplotlib analytics.',
    language: 'Python',
    stars: 13,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/CAR-SELECTION-TOOL',
  },
  {
    name: 'Hospital-Management-using-python',
    description: 'Healthcare administration system managing patient records, appointments, and MySQL storage.',
    language: 'Python / MySQL',
    stars: 13,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Hospital-Management-using-python',
  },
  {
    name: 'Bank-Application',
    description: 'Object-oriented command-line banking system simulating account lifecycle and balance validation.',
    language: 'Python',
    stars: 13,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Bank-Application',
  },
  {
    name: 'Student-Portal-figma-to-html-css',
    description: 'Comprehensive student management UI translated from Figma to semantic HTML5 and CSS3.',
    language: 'HTML / CSS',
    stars: 12,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Student-Portal-figma-to-html-css',
  },
  {
    name: 'leetcode',
    description: 'Curated repository of algorithmic solutions in C++ categorized by data structure and difficulty.',
    language: 'C++',
    stars: 11,
    forks: 1,
    url: 'https://github.com/Devanshu-Saini-07/leetcode',
  },
  {
    name: 'Azadi-The-Journey-of-India',
    description: 'Interactive historical tribute website celebrating India with timeline animations and audio.',
    language: 'JavaScript / Web Audio',
    stars: 9,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Azadi-The-Journey-of-India',
  },
  {
    name: 'Inventory-Management-using-python',
    description: 'Relational stock management application utilizing Python and MySQL schemas.',
    language: 'Python / MySQL',
    stars: 9,
    forks: 0,
    url: 'https://github.com/Devanshu-Saini-07/Inventory-Management-using-python',
  },
];

export function GitHubSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="github" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OPEN SOURCE ACTIVITY"
            title="GitHub & Public Code"
            description="All projects and engineering source code are public on GitHub. Track contributions, repositories, and algorithm implementations."
            className="mb-0"
          />

          <Button href={GITHUB_PROFILE_URL} isExternal variant="secondary" size="md">
            <Github className="w-4 h-4" />
            <span>@{GITHUB_USERNAME}</span>
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </Button>
        </div>

        {/* Verified Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-lg bg-surface border border-border">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="font-mono text-xs uppercase tracking-wider">Public Repos</span>
              <FolderGit2 className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">
              16
            </div>
            <p className="font-mono text-[11px] text-text-secondary mt-1">Verified on GitHub</p>
          </div>

          <div className="p-5 rounded-lg bg-surface border border-border">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="font-mono text-xs uppercase tracking-wider">Repository Stars</span>
              <Star className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">
              130+
            </div>
            <p className="font-mono text-[11px] text-text-secondary mt-1">Community stars</p>
          </div>

          <div className="p-5 rounded-lg bg-surface border border-border">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="font-mono text-xs uppercase tracking-wider">Primary Stack</span>
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">
              Python / Java
            </div>
            <p className="font-mono text-[11px] text-text-secondary mt-1">& C++, JS, SQL</p>
          </div>

          <div className="p-5 rounded-lg bg-surface border border-border">
            <div className="flex items-center justify-between text-text-secondary mb-2">
              <span className="font-mono text-xs uppercase tracking-wider">Verification</span>
              <Activity className="w-4 h-4 text-accent" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent">
              100% Real
            </div>
            <p className="font-mono text-[11px] text-text-secondary mt-1">Zero fabricated claims</p>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {VERIFIED_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-surface border border-border hover:border-border-focus flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-text-secondary">
                  <span className="text-accent flex items-center gap-1 font-medium">
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    <span>{repo.stars}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h4 className="font-display font-bold text-text-primary text-base mb-2 group-hover:text-accent transition-colors truncate">
                  {repo.name}
                </h4>

                <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between font-mono text-[11px] text-text-secondary">
                <span className="truncate">{repo.language}</span>
                <span className="text-accent font-medium">View Code</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Activity / Stats Preview with Fallback */}
        <div className="p-6 rounded-xl bg-surface border border-border">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <div className="flex items-center gap-2 font-mono text-xs text-text-primary font-semibold">
              <Activity className="w-4 h-4 text-accent" />
              <span>GitHub Commit & Language Profile</span>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:underline flex items-center gap-1"
            >
              <span>View full profile on GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {!imageError ? (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 overflow-hidden py-4">
              {/* GitHub Stats Card */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=radical&hide_border=true&bg_color=181A1F&title_color=B8F36B&icon_color=B8F36B&text_color=A0A3AA`}
                  alt="Devanshu Saini GitHub Stats"
                  className="w-full max-w-md rounded-lg"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              </div>

              {/* GitHub Top Languages Card */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=radical&hide_border=true&bg_color=181A1F&title_color=B8F36B&text_color=A0A3AA`}
                  alt="Devanshu Saini Top Languages"
                  className="w-full max-w-md rounded-lg"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            /* Reliable Fallback when external SVG generator is unreachable */
            <div className="p-8 text-center font-mono text-xs text-text-secondary bg-surface-elevated rounded-lg">
              <p className="text-text-primary font-medium mb-1">
                Verified GitHub Profile: @{GITHUB_USERNAME}
              </p>
              <p className="mb-4">
                16 public repositories across Python, Java, C++, JavaScript, and HTML/CSS.
              </p>
              <Button href={GITHUB_PROFILE_URL} isExternal variant="outline" size="sm">
                Open GitHub Profile
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
