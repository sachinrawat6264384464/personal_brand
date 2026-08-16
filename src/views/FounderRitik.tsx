'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Award, 
  Terminal, 
  ExternalLink, 
  Send, 
  Hexagon, 
  Trophy, 
  Star, 
  Briefcase, 
  Users, 
  Rocket, 
  CheckCircle2, 
  Monitor, 
  Target, 
  Compass, 
  UserCheck, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export default function FounderRitik() {
  return (
    <div className="min-h-screen bg-[#050816] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Main Container */}
      <main className="relative pt-24 sm:pt-32 pb-16 px-3 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-10 sm:space-y-16">

        {/* Hero Section: 2 Columns (7 Cols Left, 5 Cols Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column (7 Cols on LG): Bio & Roles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            {/* CMO Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-md">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Co-Founder & Chief Marketing Officer (CMO)</span>
            </div>

            {/* Headline Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-playfair tracking-tight text-white">
              Ritik <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">Motwani</span>
            </h1>

            {/* Tech Stack Pills Box */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl shadow-lg">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                <span className="text-cyan-300 font-semibold">Python</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300 font-semibold">Django</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300 font-semibold">FastAPI</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300 font-semibold">Next.js</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300 font-semibold">AWS</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300 font-semibold">PostgreSQL</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-semibold">TensorFlow</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-semibold">RAG</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-semibold">AI & SaaS</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-semibold">Docker</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cyan-200/90 leading-relaxed font-mono bg-cyan-950/40 border border-cyan-500/20 p-3 rounded-xl">
              Software Developer Intern @ Botmartz AI Solutions | Ex-Developer @ACM-AITR & @CSI | Member @ Developers Community | Public speaker | E-Summit- Case Study Winner’25 | Anchor
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our creative leadership blends vision, strategy, and design to build brands that stand out. From UI/UX and product experiences to brand identity and creative direction, we turn ambitious ideas into meaningful digital experiences that connect with audiences and drive impact.
            </p>
          </motion.div>

          {/* Right Column (5 Cols on LG): Orbital Glow Ring Profile Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative flex h-[250px] w-[250px] sm:h-[360px] sm:w-[360px] items-center justify-center shrink-0">

              {/* Outer Animated Glowing Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.25)]"
              />

              {/* Orbiting Particle Dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-purple-500/30"
              />

              {/* Inner Circle Box */}
              <div className="relative z-10 flex h-[210px] w-[210px] sm:h-[290px] sm:w-[290px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-slate-950/90 p-4 sm:p-6 text-center backdrop-blur-2xl shadow-2xl shrink-0">

                {/* Glowing Avatar */}
                <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-900/60 to-slate-950 text-2xl sm:text-4xl font-extrabold text-white shadow-lg font-playfair shrink-0">
                  R
                </div>

                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-white font-playfair">Ritik Motwani</h3>
                  <p className="text-[9px] sm:text-xs font-bold tracking-wider text-purple-300 uppercase mt-0.5">Co-Founder & CMO</p>
                </div>

                {/* Social Icons inside Profile Circle */}
                <div className="flex items-center gap-2.5 pt-0.5">
                  <a
                    href="https://github.com/Ritik-2509"
                    target="_blank"
                    rel="noreferrer"
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={13} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritik-motwani-1385562ba/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={13} />
                  </a>
                  <a
                    href="mailto:srservices0826@gmail.com"
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                    aria-label="Email"
                  >
                    <Mail size={13} />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Middle Section 1: 2-Column Grid (Expertise vs Achievements) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Left Card: Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-8 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5">
                <Hexagon size={18} className="text-cyan-400 sm:w-5 sm:h-5" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-playfair">Expertise</h3>
              </div>

              {/* 6 Grid items (2 per row on mobile with vertical stack on small screens) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {[
                  { title: 'Full-Stack Dev', icon: Monitor },
                  { title: 'System Arch.', icon: Target },
                  { title: 'DevOps & Cloud', icon: Compass },
                  { title: 'Database Design', icon: UserCheck },
                  { title: 'Performance Opt.', icon: Layers },
                  { title: 'Team Leadership', icon: Sparkles }
                ].map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 sm:p-3.5 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-200 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-8 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5">
                <Trophy size={18} className="text-purple-400 sm:w-5 sm:h-5" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-playfair">Achievements</h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                  <span>Led 2+ successful projects across diverse industries</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                  <span>Expert in 10+ technologies and frameworks</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                  <span>ACM Contributor and Tech Community Leader</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                  <span>E-Summit Case Study Winner 2025 & Speaker</span>
                </li>
              </ul>
            </div>

            {/* Bottom Callout Banner */}
            <div className="rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-3 sm:p-4 flex items-center gap-3">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-cyan-900/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                <Star size={16} />
              </div>
              <p className="text-[10px] sm:text-xs text-cyan-200 leading-relaxed font-medium">
                Passionate about solving complex problems with clean design & scalable code.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Middle Section 2: 4 Stats Counter Banner Grid (2-by-2 on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-3.5 sm:p-8 backdrop-blur-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-0 sm:pl-4 first:pl-0">
            <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-md">
              <Briefcase size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl font-extrabold text-white font-playfair">2+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-200">Projects Delivered</p>
              <p className="text-[8px] sm:text-[10px] text-slate-400">Across industries</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-0 sm:pl-4">
            <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-md">
              <Users size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl font-extrabold text-white font-playfair">1+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-200">Years Experience</p>
              <p className="text-[8px] sm:text-[10px] text-slate-400">Full-stack & AI</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-0 sm:pl-4">
            <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
              <Rocket size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl font-extrabold text-white font-playfair">10+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-200">Tech Stack Tools</p>
              <p className="text-[8px] sm:text-[10px] text-slate-400">Modern stack</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-0 sm:pl-4">
            <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 shadow-md">
              <Award size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-3xl font-extrabold text-white font-playfair">1+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-200">Awards Won</p>
              <p className="text-[8px] sm:text-[10px] text-slate-400">E-Summit Winner</p>
            </div>
          </div>
        </motion.div>

        {/* Middle Section 3: Tools & Technologies Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-8 backdrop-blur-2xl shadow-xl space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
            <Terminal size={18} className="text-cyan-400 sm:w-5 sm:h-5" />
            <h3 className="text-base sm:text-xl font-bold text-white font-playfair">Tools & Technologies</h3>
          </div>

          {/* Grid of Tech Cards with Official SVG Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-4">
            {[
              { name: 'Python', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
              { name: 'Django', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
              { name: 'Next.js', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
              { name: 'AWS', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
              { name: 'PostgreSQL', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
              { name: 'TensorFlow', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
              { name: 'Docker', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
              { name: 'Redis', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' }
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/80 hover:border-cyan-400/50 transition-all text-center group cursor-pointer shadow-md"
              >
                <div className="h-7 w-7 sm:h-10 sm:w-10 mb-1 sm:mb-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-200 font-playfair">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 5: Bottom CTA Action Buttons Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4"
        >
          {/* Button 1: Get in Touch */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-4 py-2.5 sm:px-6 sm:py-3.5 text-[10px] sm:text-sm font-semibold text-white shadow-lg cursor-pointer"
          >
            <Send size={13} className="sm:w-4 sm:h-4" />
            <span>Get in Touch</span>
          </a>

          {/* Button 2: View My Work */}
          <a
            href="/#projects"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2.5 sm:px-6 sm:py-3.5 text-[10px] sm:text-sm font-semibold text-slate-200 hover:border-cyan-400 transition-all cursor-pointer"
          >
            <span>View My Work</span>
            <ExternalLink size={13} className="sm:w-4 sm:h-4" />
          </a>

          {/* Button 3: My LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ritik-motwani-1385562ba/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2.5 sm:px-6 sm:py-3.5 text-[10px] sm:text-sm font-semibold text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer"
          >
            <Linkedin size={13} className="sm:w-4 sm:h-4" />
            <span>My LinkedIn</span>
          </a>

          {/* Button 4: My GitHub */}
          <a
            href="https://github.com/Ritik-2509"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2.5 sm:px-6 sm:py-3.5 text-[10px] sm:text-sm font-semibold text-slate-200 hover:border-cyan-400 transition-all cursor-pointer"
          >
            <Github size={13} className="sm:w-4 sm:h-4" />
            <span>My GitHub</span>
          </a>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
