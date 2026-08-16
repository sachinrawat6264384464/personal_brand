'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Monitor, 
  Server, 
  Database, 
  Cpu, 
  Wrench
} from 'lucide-react';

const techItems = [
  {
    name: 'React',
    desc: 'UI Library',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    borderColor: 'hover:border-cyan-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(97,218,251,0.2)]'
  },
  {
    name: 'Next.js',
    desc: 'Full-stack React',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    borderColor: 'hover:border-slate-300/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]'
  },
  {
    name: 'TypeScript',
    desc: 'Typed JS',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    borderColor: 'hover:border-blue-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(49,120,198,0.2)]'
  },
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    borderColor: 'hover:border-sky-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]'
  },
  {
    name: 'Node.js',
    desc: 'JS Runtime',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    borderColor: 'hover:border-emerald-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(51,153,51,0.2)]'
  },
  {
    name: 'Django',
    desc: 'Python Web',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
    borderColor: 'hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(9,46,32,0.25)]'
  },
  {
    name: 'Python',
    desc: 'Backend & ML',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    borderColor: 'hover:border-amber-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,212,59,0.2)]'
  },
  {
    name: 'PostgreSQL',
    desc: 'SQL Database',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    borderColor: 'hover:border-blue-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(65,105,225,0.2)]'
  },
  {
    name: 'MongoDB',
    desc: 'NoSQL Database',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    borderColor: 'hover:border-emerald-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(71,162,72,0.2)]'
  },
  {
    name: 'Firebase',
    desc: 'Backend Platform',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
    borderColor: 'hover:border-amber-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,202,40,0.2)]'
  },
  {
    name: 'Chroma DB',
    desc: 'Vector DB',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    borderColor: 'hover:border-indigo-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]'
  },
  {
    name: 'Qdrant DB',
    desc: 'Vector Search',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    borderColor: 'hover:border-rose-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(220,36,76,0.2)]'
  },
  {
    name: 'RAG',
    desc: 'AI Generation',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    borderColor: 'hover:border-cyan-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]'
  },
  {
    name: 'AI/ML',
    desc: 'Deep Learning',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    borderColor: 'hover:border-orange-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,111,0,0.2)]'
  },
  {
    name: 'Flutter',
    desc: 'Cross-platform',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
    borderColor: 'hover:border-sky-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(2,86,155,0.2)]'
  },
  {
    name: 'Spring Boot',
    desc: 'Java Framework',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
    borderColor: 'hover:border-emerald-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(109,179,63,0.2)]'
  },
  {
    name: 'FastAPI',
    desc: 'Python API',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
    borderColor: 'hover:border-teal-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(0,150,136,0.2)]'
  },
  {
    name: 'Docker',
    desc: 'Containers',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    borderColor: 'hover:border-blue-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(36,150,237,0.2)]'
  },
  {
    name: 'AWS',
    desc: 'Cloud Platform',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    borderColor: 'hover:border-amber-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,153,0,0.2)]'
  },
  {
    name: 'Git',
    desc: 'Version Control',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    borderColor: 'hover:border-orange-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(240,80,50,0.2)]'
  },
  {
    name: 'Redis',
    desc: 'In-Memory Cache',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
    borderColor: 'hover:border-red-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(220,56,45,0.2)]'
  },
  {
    name: 'Jira',
    desc: 'Project Tracking',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
    borderColor: 'hover:border-blue-500/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(0,82,204,0.2)]'
  },
  {
    name: 'Figma',
    desc: 'UI/UX Design',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
    borderColor: 'hover:border-purple-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(242,78,30,0.2)]'
  },
  {
    name: 'VS Code',
    desc: 'Code Editor',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
    borderColor: 'hover:border-sky-400/50',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(0,122,204,0.2)]'
  }
];

export default function TechStackSection() {
  return (
    <section id="tech" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Background Radial Subtle Lighting Glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            Technology <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xs sm:text-base font-medium"
          >
            Premium tools and platforms we use to deliver excellence.
          </motion.p>

          <div className="flex justify-center items-center gap-1.5 pt-0.5">
            <div className="h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          </div>
        </div>

        {/* 24 Cards Grid (3 Columns on Mobile for Horizontal Compact Layout) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {techItems.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02, duration: 0.3 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/70 p-2.5 sm:p-5 backdrop-blur-2xl transition-all duration-300 ${tech.borderColor} ${tech.glowColor} group flex flex-col items-center text-center justify-between cursor-pointer`}
            >
              {/* Icon Container */}
              <div className="mb-2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-slate-900/90 border border-white/10 group-hover:scale-110 transition-transform shadow-md p-1.5 sm:p-2.5">
                <img 
                  src={tech.iconUrl} 
                  alt={tech.name} 
                  className="h-full w-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-0.5">
                <h4 className="text-[11px] sm:text-sm font-bold text-white font-playfair group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {tech.name}
                </h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight line-clamp-1">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Category Summary Pillars Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl border border-indigo-500/30 bg-slate-950/80 p-4 sm:p-6 backdrop-blur-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Pillar 1: Frontend */}
            <div className="flex flex-col gap-1 sm:px-3 pt-2 sm:pt-0 first:pt-0">
              <div className="flex items-center gap-1.5 text-cyan-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Monitor size={13} />
                <span>Frontend</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">React, Next.js, Tailwind, Flutter</p>
            </div>

            {/* Pillar 2: Backend */}
            <div className="flex flex-col gap-1 sm:px-3 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-purple-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Server size={13} />
                <span>Backend</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Node.js, Django, FastAPI, Spring Boot</p>
            </div>

            {/* Pillar 3: Databases */}
            <div className="flex flex-col gap-1 sm:px-3 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Database size={13} />
                <span>Databases</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">PostgreSQL, MongoDB, Redis, Firebase</p>
            </div>

            {/* Pillar 4: AI / ML */}
            <div className="flex flex-col gap-1 sm:px-3 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Cpu size={13} />
                <span>AI / ML</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Python, TensorFlow, RAG, ChromaDB</p>
            </div>

            {/* Pillar 5: DevOps / Tools */}
            <div className="flex flex-col gap-1 sm:px-3 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-pink-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Wrench size={13} />
                <span>DevOps / Tools</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Docker, AWS, Git, Jira, VS Code</p>
            </div>

          </div>
        </motion.div>

        {/* Bottom Rocket Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-6 backdrop-blur-2xl shadow-xl flex flex-row items-center justify-center gap-3 sm:gap-4 text-left"
        >
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md shrink-0">
            <Rocket size={18} className="-rotate-12" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-slate-200">
              We continuously evolve our tech stack to leverage innovations.
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-purple-400 mt-0.5">
              Always learning. Always building. Always delivering.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
