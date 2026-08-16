'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Scissors, 
  ShoppingCart, 
  Dumbbell, 
  BookOpen, 
  BarChart2, 
  MessageSquare,
  Bus
} from 'lucide-react';

const realProjects = [
  {
    id: 'patel-travels',
    title: 'Patel Travels Portal',
    category: 'Bus Booking System',
    tech: 'Next.js, Tailwind',
    desc: 'Modern travel and bus booking portal for seat selection & reservations.',
    icon: Bus,
    image: '/patel.webp',
    link: 'https://patel-travels.vercel.app/',
    borderColor: 'border-sky-500/30 hover:border-sky-500/70',
    btnBorder: 'border-sky-500/40 hover:bg-sky-500/20 text-sky-300',
    iconBg: 'bg-sky-950/80 text-sky-400 border-sky-500/40',
  },
  {
    id: 'barber-shop',
    title: 'Barber Shop & Salon',
    category: 'Booking System',
    tech: 'Next.js, React',
    desc: 'Modern salon booking platform for scheduling appointments & menus.',
    icon: Scissors,
    image: '/barvar shop.webp',
    link: 'https://barber-shop-six-sooty.vercel.app/',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/70',
    btnBorder: 'border-cyan-500/40 hover:bg-cyan-500/20 text-cyan-300',
    iconBg: 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40',
  },
  {
    id: 'skipd-commerce',
    title: 'SKIPD E-Commerce',
    category: 'Digital Store',
    tech: 'Next.js, Stripe',
    desc: 'High-converting full-stack e-commerce store with product checkout.',
    icon: ShoppingCart,
    image: '/skipd.webp',
    link: 'https://skipd-shop.vercel.app/',
    borderColor: 'border-purple-500/30 hover:border-purple-500/70',
    btnBorder: 'border-purple-500/40 hover:bg-purple-500/20 text-purple-300',
    iconBg: 'bg-purple-950/80 text-purple-400 border-purple-500/40',
  },
  {
    id: 'gym-fitness',
    title: 'Gym & Fitness Hub',
    category: 'Fitness Web App',
    tech: 'React, Motion',
    desc: 'Premium fitness platform built for workout routines & schedules.',
    icon: Dumbbell,
    image: '/gym.webp',
    link: 'https://gym-mu-black.vercel.app/',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/70',
    btnBorder: 'border-emerald-500/40 hover:bg-emerald-500/20 text-emerald-300',
    iconBg: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40',
  },
  {
    id: 'myrakatha-brand',
    title: 'Myrakatha Showcase',
    category: 'Brand Platform',
    tech: 'React, Next.js',
    desc: 'Immersive storytelling & brand showcase website with smooth animations.',
    icon: BookOpen,
    image: '/myrakatha.webp',
    link: 'https://myrakatha.vercel.app/',
    borderColor: 'border-pink-500/30 hover:border-pink-500/70',
    btnBorder: 'border-pink-500/40 hover:bg-pink-500/20 text-pink-300',
    iconBg: 'bg-pink-950/80 text-pink-400 border-pink-500/40',
  },
  {
    id: 'sellhub-analytics',
    title: 'SellHub Platform',
    category: 'Fintech & Sales',
    tech: 'React, Analytics',
    desc: 'Comprehensive financial dashboard for tracking store analytics.',
    icon: BarChart2,
    image: '/sellhub.webp',
    link: 'https://skipd-shop.vercel.app/',
    borderColor: 'border-amber-500/30 hover:border-amber-500/70',
    btnBorder: 'border-amber-500/40 hover:bg-amber-500/20 text-amber-300',
    iconBg: 'bg-amber-950/80 text-amber-400 border-amber-500/40',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-x-0 top-1/3 h-[600px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-purple-300 uppercase shadow-md"
          >
            <Sparkles size={12} className="text-purple-400" />
            Our Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-lg font-medium"
          >
            Proven success stories from real brands and platforms we've elevated.
          </motion.p>
        </div>

        {/* 2-by-2 Grid on Mobile (grid-cols-2 on Mobile, grid-cols-3 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 items-stretch">
          {realProjects.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl sm:rounded-3xl border ${p.borderColor} bg-slate-950/80 overflow-hidden backdrop-blur-2xl transition-all duration-300 shadow-2xl flex flex-col justify-between`}
              >
                {/* Real Screenshot Preview Container */}
                <div className="h-32 sm:h-60 relative overflow-hidden bg-slate-900 border-b border-white/10 group-hover:brightness-110 transition-all">
                  
                  {/* Glass Window Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-5 sm:h-6 bg-slate-950/90 backdrop-blur-md z-20 flex items-center justify-between px-2 sm:px-3 border-b border-white/10">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-rose-500" />
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-amber-500" />
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono text-slate-400 truncate max-w-[120px] sm:max-w-[200px]">
                      {p.link.replace('https://', '')}
                    </span>
                  </div>

                  {/* Real Image Screenshot */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top pt-5 sm:pt-6 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Card Info Details */}
                <div className="p-3 sm:p-6 space-y-3 sm:space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
                      <div className={`h-8 w-8 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl ${p.iconBg} border flex items-center justify-center shrink-0 shadow-md`}>
                        <IconComp size={16} className="sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-lg font-bold font-playfair text-white group-hover:text-cyan-300 transition-colors truncate">
                          {p.title}
                        </h3>
                        <p className="text-[9px] sm:text-xs font-semibold text-purple-300 mt-0.5 truncate">
                          {p.category}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[10px] sm:text-sm text-slate-300 leading-snug sm:leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                  </div>

                  {/* Live Preview Button */}
                  <div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border ${p.btnBorder} px-3 py-1.5 sm:px-5 sm:py-3 text-[10px] sm:text-xs font-semibold transition-all backdrop-blur-md shadow-md group/btn`}
                    >
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Live Preview</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button: "Connect With Us" */}
        <div className="text-center pt-2 sm:pt-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-purple-600 to-pink-600 px-6 py-3 sm:px-9 sm:py-4 text-xs sm:text-base font-semibold text-white shadow-[0_10px_35px_rgba(168,85,247,0.35)] hover:shadow-[0_15px_45px_rgba(168,85,247,0.5)] transition-all cursor-pointer"
          >
            <MessageSquare size={16} className="sm:w-4.5 sm:h-4.5" />
            <span>Connect With Us</span>
            <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
