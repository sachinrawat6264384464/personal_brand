import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/node.js/339933' },
  { name: 'Django', iconUrl: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql/336791' },
  { name: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Firebase', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Chroma DB', iconUrl: 'https://user-images.githubusercontent.com/891664/227103090-6624bf7d-9524-4e05-9d2c-c28d5d451481.png' },
  { name: 'Qdrant DB', iconUrl: 'https://cdn.simpleicons.org/qdrant/DC244C' },
  { name: 'RAG', iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3A' },
  { name: 'AI/ML', iconUrl: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  { name: 'Flutter', iconUrl: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/spring/6DB33F' },
  { name: 'Jira', iconUrl: 'https://cdn.simpleicons.org/jira/0052CC' },
];

export default function TechStackSection(){
  return (
    <section id="tech" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-4"
        >
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">Technology Stack</h3>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Premium tools and platforms we use to deliver excellence.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((t, i) => (
            <motion.div 
              key={t.name} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -8 }} 
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 text-center backdrop-blur-2xl group cursor-pointer transition-smooth hover:border-white/20"
            >
              <div className={`mb-3 flex items-center justify-center h-12`}> 
                <img src={t.iconUrl} alt={t.name} className="h-10 w-10 object-contain" />
              </div>
              <p className="text-sm font-semibold text-slate-200 font-pro-bold">{t.name}</p>
              <div className="mt-2 h-0.5 w-6 mx-auto bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-white/6 bg-gradient-to-r from-cyan-900/10 to-violet-900/10 p-8 text-center backdrop-blur-2xl"
        >
          <p className="text-slate-300 font-pro-bold">
            We continuously evolve our tech stack to leverage the latest innovations and deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
