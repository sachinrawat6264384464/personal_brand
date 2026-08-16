'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  BarChart2, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Terminal,
  Star
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#050816] px-3 sm:px-8 lg:px-16 pt-20 sm:pt-36 pb-14 sm:pb-20 text-white">
      {/* Background Neon Glowing Orbs & Cyber Grids */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-purple-600/15 blur-[110px] sm:blur-[150px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Main Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs (5 Cols on LG) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-xl shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <Sparkles size={12} className="text-cyan-400 fill-cyan-400/20" />
              <span>Premium Digital Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-6xl lg:text-7xl font-playfair font-800 leading-[1.1] tracking-tight text-white"
            >
              Premium Digital <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
                Experiences
              </span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-slate-300 text-xs sm:text-base leading-relaxed font-medium mx-auto lg:mx-0"
            >
              We craft exceptional digital solutions that elevate your brand and drive business results. From strategy to launch, we deliver premium quality.
            </motion.p>

            {/* HORIZONTAL Side-By-Side CTA Buttons on Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1"
            >
              <a 
                href="#contact" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-4 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.3)] hover:scale-[1.02] transition-all whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowRight size={14} className="shrink-0" />
              </a>

              <a 
                href="#projects" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:border-cyan-400/40 backdrop-blur-xl transition-all whitespace-nowrap"
              >
                <span>Our Results</span>
                <BarChart2 size={14} className="text-cyan-400 shrink-0" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Futuristic Cybernetic Showcase (7 Cols on LG) */}
          <div className="lg:col-span-7 relative flex justify-center items-center pt-4 lg:pt-0">
            
            {/* Glowing Neon Backdrop Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[280px] w-[340px] sm:h-[480px] sm:w-[620px] rounded-full border border-cyan-400/20 shadow-[0_0_90px_rgba(56,189,248,0.2)] animate-pulse" />
              <div className="absolute h-[220px] w-[280px] sm:h-[390px] sm:w-[520px] rounded-full border border-purple-500/25 shadow-[0_0_90px_rgba(168,85,247,0.2)]" />
            </div>

            {/* Floating Futuristic Cybernetic Glass Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full max-w-[620px] rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-950/85 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-4 sm:space-y-6"
            >
              {/* Card Header: Live Status & RS Crest */}
              <div className="flex items-center justify-between pb-3 sm:pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center font-extrabold text-xs sm:text-sm text-white shadow-md">
                    RS
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white font-playfair tracking-wide">R&S DIGITAL ENGINE</h3>
                    <p className="text-[9px] sm:text-[10px] text-purple-400 font-semibold tracking-wider uppercase">Next-Gen Architecture</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>100% Operational</span>
                </div>
              </div>

              {/* Central Interactive Grid: Live Code Terminal & Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5">
                
                {/* Left Code Terminal Window (7 Cols) */}
                <div className="sm:col-span-7 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/90 p-3 sm:p-4 space-y-2.5 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <div className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Terminal size={10} className="text-cyan-400" />
                      platform.config.ts
                    </span>
                  </div>

                  <div className="font-mono text-[10px] sm:text-[11px] text-slate-300 space-y-1 leading-relaxed">
                    <p><span className="text-purple-400">const</span> <span className="text-cyan-300">engine</span> = {'{'}</p>
                    <p className="pl-3 sm:pl-4"><span className="text-slate-400">founders:</span> [<span className="text-amber-300">"Ritik"</span>, <span className="text-amber-300">"Sachin"</span>],</p>
                    <p className="pl-3 sm:pl-4"><span className="text-slate-400">stack:</span> [<span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"AI"</span>],</p>
                    <p className="pl-3 sm:pl-4"><span className="text-slate-400">speed:</span> <span className="text-emerald-400 font-bold">"Sub-50ms ⚡"</span>,</p>
                    <p className="pl-3 sm:pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400 font-bold">"Production Ready"</span></p>
                    <p>{'}'};</p>
                  </div>
                </div>

                {/* Right Metrics Pillars (5 Cols) */}
                <div className="sm:col-span-5 space-y-2 sm:space-y-3">
                  
                  {/* Pillar 1 */}
                  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Cpu size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">AI & Cloud</p>
                      <p className="text-xs font-bold text-white">Full Stack & AI</p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Security & SLA</p>
                      <p className="text-xs font-bold text-white">99.99% Uptime</p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Activity size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Performance</p>
                      <p className="text-xs font-bold text-emerald-400">10x Speedup</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Feature Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs border-t border-white/10">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle size={12} className="text-cyan-400" />
                  <span>Scalable Arch.</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle size={12} className="text-purple-400" />
                  <span>UX Strategy</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle size={12} className="text-emerald-400" />
                  <span>Enterprise Security</span>
                </div>
              </div>

              {/* Floating Top-Right Badge (Desktop Only to prevent Mobile Overflow) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:flex absolute -top-4 -right-4 rounded-full border border-cyan-400/40 bg-slate-950/90 px-3 py-1.5 backdrop-blur-2xl shadow-xl items-center gap-1.5 z-30"
              >
                <Zap size={12} className="text-cyan-400 fill-cyan-400/20" />
                <span className="text-[10px] font-bold text-white">Ultra-Fast 60FPS UI</span>
              </motion.div>

              {/* Floating Bottom-Left Satisfaction Widget (Desktop Only) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:flex absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-slate-950/95 p-3 backdrop-blur-2xl shadow-2xl items-center gap-2.5 z-30"
              >
                <div className="h-10 w-10 rounded-full border-2 border-purple-400 flex items-center justify-center text-xs font-bold text-white bg-purple-950/70 shadow-md">
                  98%
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                  </div>
                  <p className="text-[11px] font-bold text-white mt-0.5">Client Satisfaction</p>
                  <p className="text-[9px] text-slate-400 flex items-center gap-1">
                    Trusted worldwide
                    <TrendingUp size={9} className="text-emerald-400" />
                  </p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
