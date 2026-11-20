import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  CheckCircle,
} from 'lucide-react';

export function Skills() {
  const CATEGORY_ICONS: Record<string, React.ElementType> = {
    'Programming Languages': Code2,
    'Backend & Frameworks': Server,
    'Frontend & UI Engineering': Layout,
    'Databases & Storage': Database,
    'Tools & Development Ecosystem': Wrench,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNICAL CAPABILITIES"
          title="Skills & Technologies"
          description="Verified toolsets and technologies applied across academic research, open-source repositories, and practical software projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.category] || Code2;
            return (
              <div
                key={category.category}
                className="bg-surface rounded-xl border border-border hover:border-border-focus p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                    <div className="w-8 h-8 rounded bg-surface-elevated border border-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-text-primary text-base">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-text-secondary text-xs mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded bg-surface-elevated/70 border border-border/70 hover:border-accent/40 transition-colors"
                      >
                        <div className="flex items-center justify-between font-mono text-xs mb-1">
                          <span className="text-text-primary font-semibold">
                            {skill.name}
                          </span>
                          <CheckCircle className="w-3 h-3 text-accent" />
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-text-secondary leading-snug">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer count */}
                <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between font-mono text-[10px] text-text-secondary">
                  <span>VERIFIED TECH</span>
                  <span className="text-accent font-medium">
                    {category.skills.length} Competencies
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial note on authenticity */}
        <div className="mt-12 p-4 rounded-lg bg-surface border border-border flex items-center gap-3 max-w-2xl">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <p className="font-mono text-xs text-text-secondary">
            <span className="text-text-primary font-semibold">Engineering Philosophy: </span>
            Skills listed above are backed by active repositories, written code, and deployed applications. No inflated proficiency ratings or arbitrary percentages.
          </p>
        </div>
      </div>
    </section>
  );
}
