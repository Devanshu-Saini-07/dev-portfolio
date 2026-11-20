import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Terminal, Database, Layout, Sparkles, BookOpen, Layers } from 'lucide-react';

export function About() {
  const PILLARS = [
    {
      icon: Terminal,
      title: 'Systems & Algorithmic Problem Solving',
      description:
        'Building strong computer science foundations with C++ and Java. Solving algorithmic challenges on LeetCode and implementing data structures, pathfinding graph algorithms (Dijkstra, A*), and object-oriented architectures.',
    },
    {
      icon: Database,
      title: 'Backend Systems & Database Modeling',
      description:
        'Designing structured backends with Python, Django, Flask, and REST APIs. Implementing relational database schemas, migrations, and query operations in MySQL and PostgreSQL with data integrity.',
    },
    {
      icon: Layout,
      title: 'Frontend Craft & Design Systems',
      description:
        'Translating designs and Figma mockups into accessible, responsive web interfaces using semantic HTML5, CSS3, Tailwind, and React/Next.js with attention to layout, typography, and UX.',
    },
    {
      icon: Layers,
      title: 'Practical Project Delivery',
      description:
        'Focused on building real, usable tools rather than vanity demos. Experience building and deploying web platforms, desktop GUI systems, data processing utilities, and management applications.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BACKGROUND & PHILOSOPHY"
          title="A little about me."
          description="I'm a Computer Science student with a passion for software craftsmanship, system fundamentals, and building tangible digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-text-secondary fluid-body leading-relaxed">
            <p>
              My journey into software engineering started with curiosity about how computers
              solve complex problems and how lines of code translate into interactive applications.
              As a Computer Science student, I balance core academic fundamentals—data structures,
              algorithms, and database management—with hands-on project development.
            </p>
            <p>
              I take pride in writing clean, readable code and understanding the underlying mechanics
              of the tools I use. Whether developing full-stack web applications with Python and Django,
              implementing graph traversal algorithms in Java, or translating Figma mockups into responsive
              HTML/CSS, I focus on practical utility and solid engineering.
            </p>
            <p>
              Outside of building projects, I practice competitive problem solving on LeetCode, explore
              modern web frameworks like Next.js and TypeScript, and continuously refine my understanding
              of software architecture.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs text-text-primary">
              <div className="flex items-center gap-2 px-3 py-2 rounded bg-surface border border-border">
                <BookOpen className="w-4 h-4 text-accent" />
                <span>B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded bg-surface border border-border">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>16 Public Open Source Repos</span>
              </div>
            </div>
          </div>

          {/* Pillars Column (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-lg bg-surface border border-border hover:border-border-focus transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-surface-elevated border border-border flex items-center justify-center text-accent mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-text-primary text-base mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
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
