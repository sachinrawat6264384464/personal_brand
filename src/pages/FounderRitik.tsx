import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function FounderRitik() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen relative px-6 pt-32 pb-16 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_22%)] opacity-90" />
      <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl">
        <motion.button 
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-smooth mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative flex h-[400px] w-[400px] items-center justify-center rounded-full border border-white/10 bg-slate-950/60 shadow-[0_40px_120px_rgba(56,189,248,0.16)] backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/10 blur-xl" />
              <div className="absolute inset-4 rounded-full border border-white/10 bg-slate-950/85 backdrop-blur-xl" />
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(79,212,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_24%)]" />
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 rounded-full px-6 text-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 text-6xl font-semibold text-white/90 backdrop-blur-xl font-playfair">
                  R
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white font-playfair">Ritik</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.28em] text-cyan-200/70">Co-Founder & CTO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-playfair font-800 text-white mb-4">
                Ritik
              </h1>
              <p className="text-xl text-cyan-300 font-pro-bold">Chief Technology Officer</p>
            </div>

            <p className="text-lg leading-8 text-slate-300">
              With 8+ years of experience in full-stack development and architecture, our technical leadership drives the platform vision. We specialize in building scalable, modern applications using React, Node.js, and cloud technologies.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-800 text-white">Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Full-Stack Development', 'System Architecture', 'DevOps & Cloud', 'Database Design', 'Performance Optimization', 'Team Leadership'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-950/50 p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-sm font-pro-bold text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-800 text-white">Achievements</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Led 15+ successful projects across diverse industries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Expert in 5+ technologies and frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>ACM Contributor and Tech Community Leader</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Mentored 5+ junior developers</span>
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(56,189,248,0.22)] hover:-translate-y-1 transition-smooth">
                Get in Touch
              </a>
              <button onClick={() => navigate('/')} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/50 px-8 py-3 text-sm font-semibold text-white/90 hover:brightness-105 transition-smooth">
                Back Home
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
