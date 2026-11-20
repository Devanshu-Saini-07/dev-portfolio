'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

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
    <section id="about" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          eyebrow="ABOUT ME"
          title="TURNING LOGIC INTO LIVING SOFTWARE."
          description="A Computer Science student combining academic fundamentals, problem-solving rigor, and practical software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-text-secondary fluid-body leading-relaxed">
            <p>
              My path into software engineering began with a curiosity about how abstract logic
              and data structures translate into tools people rely on every day. As a Computer Science
              student, I spend my time digging deep into the fundamentals—algorithms, databases, and
              network architectures—while building practical software applications.
            </p>
            <p>
              I believe great software is born at the intersection of technical discipline and thoughtful
              design. Whether that means structuring normalized relational tables in MySQL, implementing
              pathfinding algorithms in pure Java AWT, or crafting accessible web experiences in Next.js,
              I treat every project as a piece of craft.
            </p>
            <p>
              I don&apos;t just follow tutorials; I inspect schemas, design modular code, and deploy to
              production. When I&apos;m not writing code, I practice competitive problem solving on LeetCode
              and explore new web tools.
            </p>

            {/* Quick Facts Grid Card */}
            <div className="mt-8 p-6 rounded-xl bg-surface border border-border shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>Verified Snapshot</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="p-2.5 rounded bg-surface-elevated/70 border border-border/60">
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
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/80">
                    <span className="font-mono text-xs text-accent font-bold">
                      {pillar.num} //
                    </span>
                    <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-base mb-2 group-hover:text-accent transition-colors">
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
