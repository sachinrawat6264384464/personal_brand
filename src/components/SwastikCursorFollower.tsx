'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function SwastikCursorFollower() {
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for raw cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
    >
      {/* Outer Glowing Circle Badge */}
      <div className="relative flex items-center justify-center h-14 w-14 rounded-full border border-amber-400/40 bg-slate-950/80 backdrop-blur-md shadow-[0_0_25px_rgba(251,191,36,0.4)]">
        
        {/* Rotating Outer Ring Line */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/30 animate-[spin_12s_linear_infinite]" />
        
        {/* Subtle Background Glow */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 blur-sm pointer-events-none" />

        {/* Traditional Auspicious 4-Dot Swastik SVG Icon */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]"
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
