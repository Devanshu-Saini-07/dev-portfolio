'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Code2, Server, Layout, Database, Wrench, Check } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const CATEGORY_MAP: Record<string, { num: string; icon: React.ElementType; glow: string; color: string }> = {
    'Programming Languages': {
      num: '01',
      icon: Code2,
      glow: 'rgba(223, 193, 123, 0.25)',
      color: 'text-accent',
    },
    'Backend & Frameworks': {
      num: '02',
      icon: Server,
      glow: 'rgba(124, 58, 237, 0.25)',
      color: 'text-purple-400',
    },
    'Frontend & UI Engineering': {
      num: '03',
      icon: Layout,
      glow: 'rgba(6, 182, 212, 0.25)',
      color: 'text-cyan-400',
    },
    'Databases & Storage': {
      num: '04',
      icon: Database,
      glow: 'rgba(16, 185, 129, 0.25)',
      color: 'text-emerald-400',
    },
    'Tools & Development Ecosystem': {
      num: '05',
      icon: Wrench,
      glow: 'rgba(244, 63, 94, 0.25)',
      color: 'text-rose-400',
    },
  };

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-28 lg:py-32 border-b border-border/80 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          eyebrow="SKILLS"
          title={<>WHAT I <span className="text-accent">BUILD</span> WITH.</>}
          description="A practical, hands-on technical toolkit. Every technology is verified through written source code, public repositories, and deployed web services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const meta = CATEGORY_MAP[cat.category] || {
              num: '00',
              icon: Code2,
              glow: 'rgba(223, 193, 123, 0.2)',
              color: 'text-accent',
            };
            const Icon = meta.icon;
            const isHovered = activeCategory === cat.category;

            return (
              <div
                key={cat.category}
                onMouseEnter={() => setActiveCategory(cat.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-4 sm:p-6 rounded-xl bg-surface/90 backdrop-blur-sm border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 reveal d${(idx % 3) + 1} ${
                  isHovered
                    ? 'border-accent shadow-md'
                    : 'border-border/80 hover:border-border-focus'
                }`}
                style={{
                  boxShadow: isHovered
                    ? `0 0 35px -5px ${meta.glow}`
                    : undefined,
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3 sm:mb-4 border-b border-border/80">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded bg-surface-elevated border border-border/80 flex items-center justify-center ${meta.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-mono text-xs text-accent font-semibold">
                        {meta.num} //
                      </span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-text-primary text-base sm:text-lg mb-1.5 sm:mb-2">
                    {cat.category}
                  </h3>

                  <p className="text-text-secondary text-xs leading-relaxed mb-3.5 sm:mb-5">
                    {cat.description}
                  </p>

                  {/* Skills List: 2 columns on tablet/expanded mobile, 1 col on compact desktop card */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill p-2 sm:p-2.5 rounded-md bg-surface-elevated/70 border border-border/70 hover:border-accent/40 transition-all duration-200 flex items-center justify-between hover:bg-surface-elevated hover:translate-x-1"
                      >
                        <div className="min-w-0 pr-2">
                          <span className="font-mono text-xs text-text-primary font-semibold block truncate">
                            {skill.name}
                          </span>
                          {skill.description && (
                            <span className="text-[10px] sm:text-[11px] text-text-secondary leading-tight block mt-0.5 truncate">
                              {skill.description}
                            </span>
                          )}
                        </div>
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-200" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-2.5 sm:pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-text-secondary">
                  <span>STATUS: VERIFIED</span>
                  <span className="text-accent-secondary font-semibold">PRODUCTION TESTED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
