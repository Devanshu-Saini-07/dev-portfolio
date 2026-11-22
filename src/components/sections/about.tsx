'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { BookOpen, Sparkles } from 'lucide-react';

export function About() {
  const PILLARS = [
    {
      num: '01',
      title: 'Systems & Algorithmic Foundations',
      description:
        'Building strong computer science foundations with C++ and Java. Actively practicing graph algorithms (Dijkstra, A*), dynamic programming, and data structures on LeetCode.',
    },
    {
      num: '02',
      title: 'Backend Engineering & Relational Data',
      description:
        'Designing secure REST APIs and web platforms using Python, Django, and Flask. Implementing normalized schemas, transactions, and migrations in MySQL and PostgreSQL.',
    },
    {
      num: '03',
      title: 'Frontend Precision & UI Craft',
      description:
        'Translating designs and Figma specifications into responsive, accessible web interfaces using Next.js, React, and Tailwind CSS with attention to typography and performance.',
    },
    {
      num: '04',
      title: 'Practical Product Delivery',
      description:
        'Focused on shipping real, functional applications—from CLI automotive analysis tools and hospital management systems to full-stack platforms deployed on Render and Vercel.',
    },
  ];

  const QUICK_FACTS = [
    { label: 'Degree', value: 'B.Tech in Computer Science & Engineering' },
    { label: 'Primary Focus', value: 'Full-Stack, Backend & Systems' },
    { label: 'Public Repositories', value: '16 Verified on GitHub' },
    { label: 'Repository Stars', value: '130+ Community Stars' },
    { label: 'Availability', value: 'Open for Opportunities & Projects' },
    { label: 'Response Cadence', value: 'Typically within 24 hours' },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 border-b border-border/80 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          eyebrow="ABOUT"
          title={<>TURNING LOGIC INTO <span className="text-accent">LIVING</span> SOFTWARE.</>}
          description="A Computer Science student combining academic fundamentals, problem-solving rigor, and practical software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-text-secondary fluid-body leading-relaxed reveal-l">
            <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed">
              Hello! I am <span className="text-accent font-semibold">Devanshu Saini</span>, a passionate software developer and Computer Science undergraduate based in Rajasthan, India.
            </p>
            <p>
              Driven by a deep curiosity for how computer systems and web ecosystems operate, I specialize in full-stack engineering, scalable backend architectures, and clean, responsive user interfaces. My journey in technology spans hands-on systems development in C++ and Java, production-grade web services in Python, and modern interactive experiences built with Next.js, React, and Tailwind CSS.
            </p>
            <p>
              Beyond the code editor, I am an analytical thinker who enjoys breaking down complex algorithmic puzzles, practicing competitive problem solving on LeetCode, and architecting database schemas that stand up to real-world demands. I focus on creating software that isn&apos;t just functional, but reliable, performant, and intuitive for everyday users.
            </p>
            <p>
              Whether I am developing desktop GUIs with graph algorithms, implementing relational database solutions, or deploying full-stack web applications to the cloud, I approach every project with craftsmanship, continuous curiosity, and an eagerness to collaborate on impactful engineering problems.
            </p>

            {/* Quick Facts Grid Card */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/40 transition-all duration-300 shadow-xs hover:shadow-[0_0_30px_-5px_rgba(223,193,123,0.12)] reveal d2">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-border font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span>Verified Snapshot</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 font-mono text-xs">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="p-2 sm:p-2.5 rounded bg-surface-elevated/70 border border-border/60 hover:border-accent/30 transition-colors">
                    <span className="text-[10px] text-text-secondary uppercase block mb-0.5">
                      {fact.label}
                    </span>
                    <span className="text-text-primary font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars Column (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`p-4 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_25px_-5px_rgba(223,193,123,0.14)] hover:-translate-y-1 reveal d${idx + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 border-b border-border/80">
                    <span className="font-mono text-xs text-accent font-bold">
                      {pillar.num} //
                    </span>
                    <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(223,193,123,0.8)] transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-base mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
