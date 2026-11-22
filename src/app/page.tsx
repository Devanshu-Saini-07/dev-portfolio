import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { GitHubSection } from '@/components/sections/github';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { LearningJourney } from '@/components/sections/learning-journey';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ScrollProgressBar } from '@/components/ui/scroll-progress';
import { MarqueeTicker } from '@/components/ui/marquee-ticker';
import { AmbientBackground } from '@/components/ui/ambient-background';
import { Preloader } from '@/components/ui/preloader';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-text-primary selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* Intro Experience Preloader */}
      <Preloader />

      {/* Dynamic Multicolor Ambient Mesh Gradient Background */}
      <AmbientBackground />

      {/* Interactive Micro-Elements */}
      <ScrollProgressBar />
      <CustomCursor />

      {/* Floating Navigation */}
      <Navbar />

      <main className="flex-grow relative z-10">
        <Hero />
        <MarqueeTicker />
        <About />
        <GitHubSection />
        <Projects />
        <Skills />
        <LearningJourney />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
