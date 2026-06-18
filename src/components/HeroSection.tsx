import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function TypewriterHeading({ override }: { override?: string }) {
  return (
    <span>
      {override || 'Premium Digital Experiences'}
    </span>
  );
}

export default function HeroSection() {
  // Load admin-managed overrides if present
  const heroRaw = typeof window !== 'undefined' ? localStorage.getItem('section_hero') : null;
  let heroOverride: Record<string, string> | null = null;
  try {
    heroOverride = heroRaw ? JSON.parse(heroRaw) : null;
  } catch (e) {
    heroOverride = null;
  }

  const titleOverride = heroOverride?.['Title'];
  const subtitleOverride = heroOverride?.['Subtitle'];
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-32 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-800 leading-tight tracking-tight text-white">
              <TypewriterHeading override={titleOverride} />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 18 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl leading-8 text-slate-300 font-pro-bold"
            >
              {subtitleOverride || 'We craft exceptional digital solutions that elevate your brand and drive meaningful business results. From strategy to execution, we deliver premium quality at every step.'}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(56,189,248,0.22)] hover:-translate-y-1 transition-smooth"
              >
                Start Your Project
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/50 px-8 py-4 text-sm font-semibold text-white/90 hover:brightness-105 transition-smooth"
              >
                View Our Results
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          >
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-playfair font-800 text-cyan-400">15+</p>
              <p className="text-sm text-slate-400 font-pro-bold">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-playfair font-800 text-violet-400">5+</p>
              <p className="text-sm text-slate-400 font-pro-bold">Tech Stack</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-playfair font-800 text-cyan-400">1+</p>
              <p className="text-sm text-slate-400 font-pro-bold">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-playfair font-800 text-violet-400">100%</p>
              <p className="text-sm text-slate-400 font-pro-bold">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
