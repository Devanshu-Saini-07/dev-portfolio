'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Code2,
  Database,
  Layout,
  Layers,
  Target,
  GitBranch,
} from 'lucide-react';

interface Milestone {
  num: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  icon: React.ElementType;
}

const MILESTONES: Milestone[] = [
  {
    num: '01',
    title: 'Computer Science & Engineering Foundations',
    category: 'Education',
    description:
      'Pursuing B.Tech in Computer Science & Engineering. Developing a deep analytical understanding of computing systems, discrete mathematics, object-oriented design, and algorithms.',
    skills: ['Data Structures', 'Algorithms', 'Computer Systems', 'OOP'],
    icon: GraduationCap,
  },
  {
    num: '02',
    title: 'Core Programming & Algorithmic Rigor',
    category: 'Core Engineering',
    description:
      'Mastering multi-paradigm programming across Python, Java, C, and C++. Built object-oriented banking simulations, desktop GUI tools in Java AWT, and modular CLI utilities.',
    skills: ['Python', 'Java', 'C++', 'Java AWT', 'OOP'],
    icon: Code2,
  },
  {
    num: '03',
    title: 'Relational Database Architecture & Systems',
    category: 'Backend',
    description:
      'Designing robust relational schemas and administrative applications with MySQL. Implemented transactional record management, query optimization, and automated CSV backup engines.',
    skills: ['MySQL', 'PostgreSQL', 'Schema Design', 'Data Integrity', 'CRUD'],
    icon: Database,
  },
  {
    num: '04',
    title: 'Frontend Precision & Design-to-Code Translation',
    category: 'Frontend & UI',
    description:
      'Translating high-fidelity Figma design specifications into semantic, accessible, and responsive web interfaces. Built interactive storytelling experiences like Azadi — The Journey of India.',
    skills: ['Figma', 'HTML5', 'CSS3', 'Modern Layouts', 'Web Audio API'],
    icon: Layout,
  },
  {
    num: '05',
    title: 'Full-Stack Application Development',
    category: 'Full-Stack',
    description:
      'Architecting end-to-end web applications with Django and Flask. Engineered an interactive media tracking portal with Gemini AI recommendations and a complete Django social platform with real-time features.',
    skills: ['Django', 'Flask', 'REST APIs', 'Gemini AI', 'Vercel', 'Render'],
    icon: Layers,
  },
  {
    num: '06',
    title: 'Competitive DSA & Problem Solving',
    category: 'Problem Solving',
    description:
      'Continuous practice on LeetCode in C++. Solved problems across arrays, two pointers, sliding window, binary search trees, dynamic programming, and shortest-path graph algorithms.',
    skills: ['C++', 'Graph Algorithms', 'Dijkstra', 'Dynamic Programming', 'LeetCode'],
    icon: Target,
  },
  {
    num: '07',
    title: 'Open Source Community & Production Shipments',
    category: 'Open Source',
    description:
      'Published and maintained 16 verified repositories on GitHub with over 130 community stars. Committed to shipping clean, well-architected code with thorough documentation and verified deployments.',
    skills: ['Git & GitHub', 'Open Source', '16 Repositories', '130+ Stars'],
    icon: GitBranch,
  },
];

export function LearningJourney() {
  return (
    <section id="journey" className="py-14 sm:py-20 md:py-28 lg:py-32 border-b border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          eyebrow="JOURNEY"
          title={<>HOW I <span className="text-accent">LEARN</span> &amp; BUILD.</>}
          description="A chronological timeline of technical evolution: from core computing fundamentals to relational systems, modern full-stack architectures, and competitive algorithmic problem solving."
        />

        {/* Timeline Container */}
        <div className="relative mt-8 sm:mt-12 md:mt-16">
          {/* Vertical Multicolor Gradient Line */}
          <div className="absolute top-0 bottom-0 left-3.5 sm:left-4 md:left-1/2 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-cyan-500 -translate-x-1/2 opacity-70" />

          <div className="space-y-6 sm:space-y-10 md:space-y-12">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.num}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-4 sm:top-6 z-10 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(223,193,123,0.35)] group-hover:scale-110 transition-transform">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card (Half Width on Desktop) */}
                  <div
                    className={`ml-9 sm:ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12 reveal-r' : 'md:pr-12 reveal-l'
                    }`}
                  >
                    <div className="p-4 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-surface/90 backdrop-blur-sm border border-border/80 hover:border-accent/50 shadow-xs hover:shadow-[0_0_30px_-5px_rgba(223,193,123,0.15)] transition-all duration-300 group hover:-translate-y-1.5">
                      {/* Card Header */}
                      <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3 sm:mb-4 border-b border-border/80">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-surface-elevated border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-accent">
                            PHASE {item.num} //
                          </span>
                        </div>
                        <Badge variant="subtle" size="sm" className="font-mono text-[9px] sm:text-[10px]">
                          {item.category}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-text-primary text-base sm:text-xl mb-1.5 sm:mb-2.5 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {item.description}
                      </p>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2.5 sm:pt-3 border-t border-border/60">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-1.5 py-0.5 sm:px-2 rounded text-[10px] sm:text-[11px] font-mono bg-surface-elevated text-text-secondary border border-border/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
