'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const founderStats = [
  {
    label: 'Projects Done',
    value: '2+',
    note: 'Digital solutions',
  },
  {
    label: 'Tech Stack',
    value: '10+',
    note: 'Modern technologies',
  },
  {
    label: 'Solutions',
    value: '1+',
    note: 'Brand experiences',
  },
  {
    label: 'Years Together',
    value: '1+',
    note: 'Excellence delivered',
  },
];

const circleMotion = {
  animate: {
    y: [0, -8, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function FoundersSection() {
  const router = useRouter();

  return (
    <section id="founders" className="relative overflow-hidden px-4 sm:px-8 lg:px-12 pb-16 sm:pb-24 pt-10 lg:pb-32 bg-[#050816]">
      {/* Radial Background Lighting Glows */}
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)] opacity-90 pointer-events-none" />
      <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* 12-Column Responsive Grid with Generous Gap to Prevent Overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Sachin Profile Circle (3 Cols on LG) - S FOR SR SERVICES */}
          <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
            <motion.div
              className="relative cursor-pointer"
              {...circleMotion}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/founder/sachin')}
            >
              <div className="relative flex aspect-square h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[270px] lg:w-[270px] items-center justify-center rounded-full border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-2xl transition-all shrink-0 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/15 blur-xl pointer-events-none" />
                <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/10 bg-slate-950/90 backdrop-blur-xl pointer-events-none" />
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 sm:gap-3 rounded-full px-3 text-center">
                  <div className="relative flex aspect-square h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl sm:text-3xl font-semibold text-white backdrop-blur-xl font-playfair shrink-0 shadow-md">
                    S
                  </div>
                  <div>
                    <p className="text-base sm:text-xl font-semibold tracking-tight text-white font-playfair">Sachin Rawat</p>
                    <p className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-wider text-purple-300">Co-Founder & CTO</p>
                    <p className="mt-1 text-[10px] text-slate-400">Click to view profile</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Column: Heading, Bio & 2-by-2 Stats Grid (6 Cols on LG) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8 text-center order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cyan-200/80 backdrop-blur-xl font-pro-bold">
              FOUNDERS • INNOVATORS • CREATORS
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3 sm:space-y-4 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-playfair leading-tight">
                SR SERVICES: Redefining Digital Excellence
              </h2>
              <p className="text-xs sm:text-base leading-relaxed text-slate-300 font-medium">
                We are strategic thinkers and skilled developers passionate about creating transformative digital experiences.
              </p>
            </motion.div>

            {/* 2-by-2 Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
              {founderStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/80 p-3.5 sm:p-5 backdrop-blur-2xl shadow-xl transition-all hover:border-cyan-400/30 text-center"
                >
                  <p className="text-lg sm:text-2xl font-bold text-white font-playfair">{stat.value}</p>
                  <h3 className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 font-pro-bold">{stat.label}</h3>
                  <p className="mt-1 text-[9px] sm:text-xs leading-tight text-slate-400">{stat.note}</p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Ritik Profile Circle (3 Cols on LG) - R FOR SR SERVICES */}
          <div className="lg:col-span-3 flex justify-center order-3 lg:order-3">
            <motion.div
              className="relative cursor-pointer"
              {...circleMotion}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/founder/ritik')}
            >
              <div className="relative flex aspect-square h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[270px] lg:w-[270px] items-center justify-center rounded-full border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-2xl transition-all shrink-0 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/15 blur-xl pointer-events-none" />
                <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/10 bg-slate-950/90 backdrop-blur-xl pointer-events-none" />
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 sm:gap-3 rounded-full px-3 text-center">
                  <div className="relative flex aspect-square h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl sm:text-3xl font-semibold text-white backdrop-blur-xl font-playfair shrink-0 shadow-md">
                    R
                  </div>
                  <div>
                    <p className="text-base sm:text-xl font-semibold tracking-tight text-white font-playfair">Ritik Motwani</p>
                    <p className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-wider text-cyan-200/80">Co-Founder & CMO</p>
                    <p className="mt-1 text-[10px] text-slate-400">Click to view profile</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
