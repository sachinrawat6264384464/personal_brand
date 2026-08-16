'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ClipboardList, 
  PenTool, 
  Code2, 
  FileCheck2, 
  Rocket, 
  Headphones, 
  ArrowRight,
  Sparkles,
  Target,
  Award,
  ShieldCheck,
  Users
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Market Research',
    desc: 'Understanding your market, audience, & competitors.',
    icon: Search,
    gradient: 'from-purple-600 to-indigo-600',
    borderColor: 'hover:border-purple-500/60',
    arrowColor: 'text-purple-400',
    glow: 'shadow-purple-500/20'
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Strategic planning & roadmapping for a clear journey.',
    icon: ClipboardList,
    gradient: 'from-blue-600 to-cyan-600',
    borderColor: 'hover:border-blue-500/60',
    arrowColor: 'text-blue-400',
    glow: 'shadow-blue-500/20'
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Beautiful, user-centric designs creating experiences.',
    icon: PenTool,
    gradient: 'from-cyan-500 to-teal-500',
    borderColor: 'hover:border-cyan-500/60',
    arrowColor: 'text-cyan-400',
    glow: 'shadow-cyan-500/20'
  },
  {
    step: '04',
    title: 'Development',
    desc: 'Robust & scalable implementation with modern stack.',
    icon: Code2,
    gradient: 'from-fuchsia-600 to-pink-600',
    borderColor: 'hover:border-fuchsia-500/60',
    arrowColor: 'text-fuchsia-400',
    glow: 'shadow-fuchsia-500/20'
  },
  {
    step: '05',
    title: 'Testing',
    desc: 'Rigorous QA ensuring performance & security.',
    icon: FileCheck2,
    gradient: 'from-amber-500 to-orange-600',
    borderColor: 'hover:border-amber-500/60',
    arrowColor: 'text-amber-400',
    glow: 'shadow-amber-500/20'
  },
  {
    step: '06',
    title: 'Deployment',
    desc: 'Seamless launch & deployment to deliver product.',
    icon: Rocket,
    gradient: 'from-emerald-500 to-green-600',
    borderColor: 'hover:border-emerald-500/60',
    arrowColor: 'text-emerald-400',
    glow: 'shadow-emerald-500/20'
  },
  {
    step: '07',
    title: 'Support',
    desc: 'Ongoing support & optimization for continuous growth.',
    icon: Headphones,
    gradient: 'from-indigo-500 to-blue-600',
    borderColor: 'hover:border-indigo-500/60',
    arrowColor: 'text-indigo-400',
    glow: 'shadow-indigo-500/20'
  }
];

const highlights = [
  {
    title: 'Transparent Process',
    desc: 'Clear communication every step of the way.',
    icon: Target,
    color: 'text-purple-400'
  },
  {
    title: 'Results Focused',
    desc: 'We focus on outcomes that drive real value.',
    icon: Award,
    color: 'text-cyan-400'
  },
  {
    title: 'Agile & Flexible',
    desc: 'Adaptive to changes, focused on goals.',
    icon: ShieldCheck,
    color: 'text-emerald-400'
  },
  {
    title: 'Partnership Approach',
    desc: 'We work as an extension of your team.',
    icon: Users,
    color: 'text-pink-400'
  }
];

export default function ProcessSection() {
  const row1 = processSteps.slice(0, 4);
  const row2 = processSteps.slice(4, 7);

  return (
    <section id="process" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-purple-300 uppercase"
          >
            <Sparkles size={12} className="text-purple-400" />
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            Our Path to Deliver Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Product</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-lg font-medium"
          >
            Structured, transparent, and results-focused methodology.
          </motion.p>
        </div>

        {/* Cards Layout Container */}
        <div className="space-y-4 sm:space-y-12">
          
          {/* Row 1: Steps 01 to 04 (2-by-2 on Mobile grid-cols-2) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative">
            {row1.map((item, idx) => {
              const StepIcon = item.icon;
              const hasArrow = idx < row1.length - 1;
              return (
                <div key={item.step} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className={`relative rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 sm:p-7 backdrop-blur-xl transition-all duration-300 ${item.borderColor} group h-full flex flex-col justify-between`}
                  >
                    {/* Top Left Step Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-slate-900 border border-white/10 text-[9px] sm:text-xs font-semibold flex items-center justify-center text-slate-300 font-mono">
                      {item.step}
                    </div>

                    <div className="pt-3 sm:pt-4 text-center">
                      {/* Center Glowing Icon Circle */}
                      <div className={`mx-auto h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg ${item.glow} group-hover:scale-110 transition-transform mb-3 sm:mb-5`}>
                        <StepIcon size={18} className="sm:w-6.5 sm:h-6.5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-lg font-bold font-playfair text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connecting Arrow for Desktop */}
                  {hasArrow && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight size={20} className={item.arrowColor} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Row 2: Steps 05 to 07 (2-by-2 on Mobile grid-cols-2) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto relative">
            {row2.map((item, idx) => {
              const StepIcon = item.icon;
              const hasArrow = idx < row2.length - 1;
              return (
                <div key={item.step} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx + 4) * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className={`relative rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 sm:p-7 backdrop-blur-xl transition-all duration-300 ${item.borderColor} group h-full flex flex-col justify-between`}
                  >
                    {/* Top Left Step Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-slate-900 border border-white/10 text-[9px] sm:text-xs font-semibold flex items-center justify-center text-slate-300 font-mono">
                      {item.step}
                    </div>

                    <div className="pt-3 sm:pt-4 text-center">
                      {/* Center Glowing Icon Circle */}
                      <div className={`mx-auto h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg ${item.glow} group-hover:scale-110 transition-transform mb-3 sm:mb-5`}>
                        <StepIcon size={18} className="sm:w-6.5 sm:h-6.5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-lg font-bold font-playfair text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connecting Arrow for Desktop */}
                  {hasArrow && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight size={20} className={item.arrowColor} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Highlights Banner Bar (2-by-2 on Mobile grid-cols-2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
            {highlights.map((h) => {
              const HIcon = h.icon;
              return (
                <div key={h.title} className="flex items-start gap-2.5 sm:gap-4 p-1 sm:p-2">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    <HIcon size={16} className={`${h.color} sm:w-5 sm:h-5`} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-playfair">{h.title}</h4>
                    <p className="text-[9px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-relaxed line-clamp-2">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
