'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Code2, Server, Layout, Database, Wrench, Check } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const CATEGORY_MAP: Record<string, { num: string; icon: React.ElementType }> = {
    'Programming Languages': { num: '01', icon: Code2 },
    'Backend & Frameworks': { num: '02', icon: Server },
    'Frontend & UI Engineering': { num: '03', icon: Layout },
    'Databases & Storage': { num: '04', icon: Database },
    'Tools & Development Ecosystem': { num: '05', icon: Wrench },
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          eyebrow="CAPABILITIES & TOOLKIT"
          title="WHAT I BUILD WITH."
          description="A practical, hands-on technical toolkit. Every technology is verified through written source code, public repositories, and deployed web services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const meta = CATEGORY_MAP[cat.category] || { num: '00', icon: Code2 };
            const Icon = meta.icon;
            const isHovered = activeCategory === cat.category;

            return (
              <div
                key={cat.category}
                onMouseEnter={() => setActiveCategory(cat.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 rounded-xl bg-surface border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered ? 'border-accent shadow-md' : 'border-border hover:border-border-focus'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-surface-elevated border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-accent font-semibold">
                        {meta.num} //
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-text-secondary">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-text-primary text-lg mb-2">
                    {cat.category}
                  </h3>

                  <p className="text-text-secondary text-xs leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-md bg-surface-elevated/70 border border-border/70 hover:border-accent/40 transition-colors flex items-center justify-between"
                      >
                        <div>
                          <span className="font-mono text-xs text-text-primary font-semibold block">
                            {skill.name}
                          </span>
                          {skill.description && (
                            <span className="text-[11px] text-text-secondary leading-tight block mt-0.5">
                              {skill.description}
                            </span>
                          )}
                        </div>
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[10px] text-text-secondary">
                  <span>STATUS: VERIFIED</span>
                  <span className="text-accent">PRODUCTION TESTED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
