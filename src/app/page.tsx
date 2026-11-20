import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { GitHubSection } from '@/components/sections/github';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
