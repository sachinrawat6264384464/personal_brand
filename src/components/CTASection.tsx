'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Star
} from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      
      {/* Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] sm:h-[450px] sm:w-[700px] rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 blur-[100px] sm:blur-[140px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-950/85 p-5 sm:p-12 lg:p-16 text-center backdrop-blur-2xl shadow-2xl overflow-hidden space-y-6 sm:space-y-8"
        >
          {/* Top Gradient Border Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-300 shadow-md">
            <Sparkles size={12} className="text-purple-400 fill-purple-400/20" />
            <span>Let's Collaborate</span>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-2.5 sm:space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight text-white leading-tight">
              Ready To Build Something <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(168,85,247,0.25)]">
                Exceptional?
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
              Let's craft a premium digital product together — from strategy & architecture to high-performance launch.
            </p>
          </div>

          {/* HORIZONTAL Side-By-Side Action Buttons Row on Mobile */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 pt-1">
            
            {/* Start a Project Button */}
            <a 
              href="#contact" 
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.3)] hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Start Your Project</span>
              <ArrowRight size={14} />
            </a>

            {/* WhatsApp Chat Button */}
            <a 
              href="https://wa.me/918319694592" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-emerald-300 hover:border-emerald-400 hover:text-white hover:bg-emerald-900/60 backdrop-blur-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Schedule a Call Button */}
            <a 
              href="#contact" 
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:border-purple-400/40 transition-all cursor-pointer whitespace-nowrap"
            >
              <PhoneCall size={14} className="text-purple-400" />
              <span>Schedule Call</span>
            </a>

          </div>

          {/* Bottom Trust Badges Bar */}
          <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-cyan-400" />
              <span>Quick 24h Response</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-purple-400" />
              <span>100% Confidential NDA</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Star size={12} className="text-amber-400" />
              <span>Guaranteed Satisfaction</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
