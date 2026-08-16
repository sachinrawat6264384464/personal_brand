'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Code2, 
  Rocket, 
  Target, 
  Users, 
  Zap, 
  Sparkles, 
  Briefcase, 
  Cpu, 
  Star 
} from 'lucide-react';

const achievementCards = [
  {
    title: 'Industry Recognition',
    desc: 'Recognized by leading platforms for our outstanding contributions.',
    icon: Award,
    gradient: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/30 hover:border-amber-500/60',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    lineGradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20'
  },
  {
    title: 'Technical Excellence',
    desc: 'Delivering robust, scalable & modern digital solutions.',
    icon: Code2,
    gradient: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    dotColor: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]',
    lineGradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20'
  },
  {
    title: 'Portfolio Success',
    desc: 'Successfully delivered 15+ projects driving real growth.',
    icon: Rocket,
    gradient: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-500/30 hover:border-pink-500/60',
    dotColor: 'bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]',
    lineGradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20'
  },
  {
    title: 'Years of Expertise',
    desc: '1+ years of hands-on experience in high-quality solutions.',
    icon: Target,
    gradient: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
    lineGradient: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20'
  },
  {
    title: 'Team Strength',
    desc: 'Passionate team working to turn ambitious ideas into reality.',
    icon: Users,
    gradient: 'from-purple-600 to-indigo-600',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    dotColor: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]',
    lineGradient: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/20'
  },
  {
    title: 'Innovation Drive',
    desc: 'Pushing boundaries with cutting-edge tech for tomorrow.',
    icon: Zap,
    gradient: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    dotColor: 'bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]',
    lineGradient: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20'
  }
];

const mainStats = [
  {
    value: '15+',
    title: 'Successful Projects',
    subtitle: 'Completed with excellence',
    icon: Briefcase,
    color: 'text-blue-400',
    iconBg: 'bg-blue-950/80 border-blue-500/30'
  },
  {
    value: '15+',
    title: 'Happy Clients',
    subtitle: 'Lasting relationships',
    icon: Users,
    color: 'text-purple-400',
    iconBg: 'bg-purple-950/80 border-purple-500/30'
  },
  {
    value: '5+',
    title: 'Technologies',
    subtitle: 'Modern tech stack',
    icon: Cpu,
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-950/80 border-cyan-500/30'
  },
  {
    value: '5.0★',
    title: 'Avg Rating',
    subtitle: 'Client satisfaction',
    icon: Star,
    color: 'text-pink-400',
    iconBg: 'bg-pink-950/80 border-pink-500/30'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-blue-300 uppercase"
          >
            <Sparkles size={12} className="text-blue-400" />
            Our Achievements
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-lg font-medium"
          >
            Milestones that define our journey of excellence.
          </motion.p>
        </div>

        {/* 2-by-2 Cards Grid on Mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {achievementCards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl sm:rounded-3xl border ${card.borderColor} bg-slate-950/60 p-3.5 sm:p-8 backdrop-blur-2xl transition-all duration-300 group overflow-hidden flex flex-col justify-between`}
              >
                <div className="text-center pt-1 sm:pt-2">
                  {/* Top Glowing Icon Circle */}
                  <div className={`mx-auto h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg ${card.glow} group-hover:scale-110 transition-transform mb-2.5 sm:mb-5`}>
                    <CardIcon size={18} className="sm:w-6.5 sm:h-6.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-xl font-bold font-playfair text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {card.title}
                  </h3>

                  {/* Underline Highlight */}
                  <div className={`h-0.5 w-7 sm:w-10 mx-auto rounded-full bg-gradient-to-r ${card.lineGradient} mb-2 sm:mb-4 opacity-80`} />

                  {/* Description */}
                  <p className="text-[10px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>

                {/* Decorative Bottom Right Glowing Accent Dot */}
                <div className={`absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${card.dotColor}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Main Stats Banner Bar (2-by-2 on Mobile grid-cols-2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/80 p-3.5 sm:p-8 backdrop-blur-2xl shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {mainStats.map((st, i) => {
              const StIcon = st.icon;
              return (
                <div key={st.title} className={`flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-0 ${i === 0 ? 'first:pt-0' : 'sm:pl-6'}`}>
                  <div className={`h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl ${st.iconBg} border flex items-center justify-center shrink-0`}>
                    <StIcon size={18} className={`${st.color} sm:w-5.5 sm:h-5.5`} />
                  </div>
                  <div>
                    <p className="text-lg sm:text-3xl font-playfair font-800 text-white tracking-tight">{st.value}</p>
                    <p className="text-[10px] sm:text-sm font-bold text-slate-200 font-pro-bold mt-0.5">{st.title}</p>
                    <p className="text-[8px] sm:text-[11px] text-slate-400 mt-0.5">{st.subtitle}</p>
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
