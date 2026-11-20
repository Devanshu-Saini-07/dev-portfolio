import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { GitHubSection } from '@/components/sections/github';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ScrollProgressBar } from '@/components/ui/scroll-progress';
import { MarqueeTicker } from '@/components/ui/marquee-ticker';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent selection:text-accent-foreground">
      {/* Interactive Micro-Elements */}
      <ScrollProgressBar />
      <CustomCursor />

      {/* Floating Navigation */}
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <MarqueeTicker />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
