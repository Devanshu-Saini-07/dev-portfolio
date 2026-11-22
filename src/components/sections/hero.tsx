'use client';

import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col justify-center"
    >
      {/* Background Soft Chromatic Backlights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Warm Amber Glow behind left typography */}
        <div className="absolute top-[25%] left-[5%] w-[450px] h-[450px] rounded-full bg-accent/20 blur-[130px] opacity-75 dark:opacity-65" />
        {/* Subtle Violet Backlight behind right portrait */}
        <div className="absolute top-[20%] right-[8%] w-[480px] h-[480px] rounded-full bg-purple-600/20 blur-[140px] opacity-65 dark:opacity-55" />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen items-stretch relative z-10">
        {/* Left Column (Pinned to Left: matching Mudit Sharma's hero-left) */}
        <div className="flex flex-col justify-center z-20 px-5 sm:px-8 lg:pl-14 lg:pr-8 xl:pl-20 xl:pr-12 pt-20 sm:pt-24 pb-8 sm:pb-12 lg:py-24">
          {/* Mobile-only Centered Profile Image: natural mobile composition */}
          <div className="lg:hidden flex justify-center mb-5 sm:mb-6 animate-hero-image">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-accent/60 shadow-[0_0_30px_rgba(223,193,123,0.25)] bg-surface-elevated">
              <Image
                src="/images/devanshu-hero.png"
                alt="Devanshu Saini"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 96px, 128px"
                className="object-cover object-top select-none pointer-events-none"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Eyebrow: Horizontal line + gold tracking-widest text */}
          <div className="animate-hero-eyebrow flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-3 sm:mb-6">
            <span className="w-6 sm:w-8 h-[1px] bg-accent" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-accent font-medium text-center lg:text-left">
              FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER
            </span>
          </div>

          {/* Giant Condensed Headline (Bebas Neue) with clamp() for 320px-430px mobile */}
          <h1 className="animate-hero-title font-condensed font-bold text-[clamp(2.75rem,11.5vw,4.5rem)] sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.8rem] tracking-[0.03em] uppercase leading-[0.88] lg:leading-[0.84] select-none mb-1 sm:mb-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-text-primary">DEV</span>
              <span className="text-accent drop-shadow-[0_0_35px_rgba(223,193,123,0.35)]">ANSHU</span>
            </div>
            <div className="stroke-text mt-0">
              SAINI
            </div>
          </h1>

          {/* Bio Box with Thin Left Gold Border */}
          <div className="animate-hero-bio border-l-2 lg:border-l border-accent/90 pl-3 sm:pl-4 my-4 sm:my-6 max-w-md mx-auto lg:mx-0 relative group">
            <p className="text-text-secondary text-xs sm:text-sm lg:text-base leading-relaxed font-sans font-normal">
              Building fast, reliable software, backend architectures, and modern web applications for brands and founders who care about craft. Based in India — available worldwide.
            </p>
          </div>

          {/* Availability Status */}
          <div className="animate-hero-bio flex items-center justify-center lg:justify-start gap-2 mb-6 sm:mb-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Rectangular Action Buttons (Grid on mobile, flex on desktop) */}
          <div className="animate-hero-actions grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto lg:mx-0">
            <a
              href="#projects"
              className="relative group bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] px-4 py-3 sm:px-8 sm:py-3.5 font-bold hover:bg-accent-hover transition-all duration-300 rounded-none shadow-none inline-flex items-center justify-center overflow-hidden hover:shadow-[0_0_30px_rgba(223,193,123,0.35)] active:scale-[0.98] min-h-[44px]"
            >
              <span className="relative z-10">VIEW WORK</span>
              <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a
              href="#contact"
              className="border border-border/80 hover:border-accent text-text-secondary hover:text-text-primary font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] px-4 py-3 sm:px-8 sm:py-3.5 font-medium transition-all duration-300 rounded-none bg-surface/50 hover:bg-surface-elevated inline-flex items-center justify-center backdrop-blur-xs active:scale-[0.98] hover:shadow-xs min-h-[44px]"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Bottom Left Scroll Indicator */}
          <div className="animate-hero-actions mt-8 sm:mt-10 lg:mt-16 flex items-center justify-center lg:justify-start gap-2.5 font-mono text-[10px] text-text-secondary/60 tracking-[0.3em] uppercase">
            <span className="w-8 h-[1px] bg-border/70" />
            <span>SCROLL</span>
          </div>
        </div>

        {/* Right Column (Pinned to Right Screen Edge: matching Mudit Sharma's hero-right, desktop only) */}
        <div className="animate-hero-image hidden lg:block relative w-full h-full min-h-screen overflow-hidden">
          <Image
            src="/images/devanshu-hero.png"
            alt="Devanshu Saini"
            fill
            priority
            quality={95}
            sizes="50vw"
            className="object-cover object-top select-none pointer-events-none"
          />

          {/* Left Edge Seamless Gradient Fade into Background */}
          <div className="absolute inset-y-0 left-0 w-28 sm:w-40 lg:w-56 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none z-10" />

          {/* Bottom Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 lg:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

          {/* Top Subtle Edge Blend */}
          <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-background/40 to-transparent pointer-events-none z-10" />

          {/* Monogram Watermark in Bottom Right Corner matching MS with subtle glow */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-12 z-20 pointer-events-none select-none font-condensed text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] stroke-watermark leading-none text-right">
            DS
          </div>
        </div>
      </div>
    </section>
  );
}
