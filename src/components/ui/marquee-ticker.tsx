import React from 'react';

const TECH_ITEMS = [
  'PYTHON',
  'DJANGO',
  'JAVA',
  'NEXT.JS',
  'C++',
  'MYSQL',
  'REST APIS',
  'REACT',
  'POSTGRESQL',
  'FIGMA',
  'GRAPH ALGORITHMS',
  'FLASK',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'LINUX',
  'GIT & GITHUB',
];

export function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden py-3 bg-surface border-y border-border relative select-none">
      <div className="animate-marquee flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text-secondary whitespace-nowrap">
        {/* Sequence 1 */}
        {TECH_ITEMS.map((item, idx) => (
          <React.Fragment key={`seq1-${idx}`}>
            <span className="hover:text-accent transition-colors font-medium">
              {item}
            </span>
            <span className="text-accent/60 font-mono text-[10px]">//</span>
          </React.Fragment>
        ))}

        {/* Sequence 2 for seamless loop */}
        {TECH_ITEMS.map((item, idx) => (
          <React.Fragment key={`seq2-${idx}`}>
            <span className="hover:text-accent transition-colors font-medium">
              {item}
            </span>
            <span className="text-accent/60 font-mono text-[10px]">//</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
