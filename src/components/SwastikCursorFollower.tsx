'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SwastikCursorFollower() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[99999] cursor-grab active:cursor-grabbing select-none"
      title="Sacred Sathiya • Drag to move anywhere"
    >
      {/* Outer Glowing Circle Badge */}
      <div className="relative flex items-center justify-center h-14 w-14 rounded-full border border-amber-400/50 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-shadow hover:shadow-[0_0_40px_rgba(251,191,36,0.8)]">
        
        {/* Rotating Outer Ring Line */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/40 animate-[spin_14s_linear_infinite] pointer-events-none" />
        
        {/* Subtle Background Radial Glow */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-yellow-500/30 blur-md pointer-events-none" />

        {/* Traditional Auspicious 4-Dot Swastik / Sathiya SVG Icon */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] pointer-events-none"
        >
          {/* Swastik Bending Arms */}
          <path 
            d="M 50,15 L 50,85 M 15,50 L 85,50 M 50,15 L 85,15 M 85,50 L 85,85 M 50,85 L 15,85 M 15,50 L 15,15" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
          {/* 4 Sacred Dots */}
          <circle cx="32" cy="32" r="4" fill="currentColor" />
          <circle cx="68" cy="32" r="4" fill="currentColor" />
          <circle cx="68" cy="68" r="4" fill="currentColor" />
          <circle cx="32" cy="68" r="4" fill="currentColor" />
        </svg>

      </div>
    </motion.div>
  );
}
