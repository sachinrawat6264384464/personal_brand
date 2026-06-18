import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { title: 'Fintech Dashboard', category: 'Dashboard Systems', tech: ['React', 'Node'], img: '', link: '#', github: '#' },
  { title: 'AI Assistant', category: 'AI Solutions', tech: ['Python', 'ML'], img: '', link: '#', github: '#' },
  { title: 'E‑commerce Redesign', category: 'Web Development', tech: ['React', 'Tailwind'], img: '', link: '#', github: '#' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-4"
        >
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">Our Results</h3>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Proven success stories from brands we've elevated.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: idx * 0.15
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -12, scale: 1.05 }} 
              className="rounded-2xl border border-white/6 bg-slate-950/50 overflow-hidden backdrop-blur-2xl group"
            >
              <div className="h-44 rounded-t-2xl bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 group-hover:from-cyan-400/40 group-hover:to-violet-500/40 transition-smooth" />
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white font-playfair">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{p.category} • {p.tech.join(', ')}</p>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a 
                    href={p.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4)] transition-smooth"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a 
                    href={p.github}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.4)] transition-smooth"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
