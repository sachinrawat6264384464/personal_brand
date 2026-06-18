import React from 'react';
import { motion } from 'framer-motion';

const steps = ['Market Research','Planning','Design','Development','Testing','Deployment','Support'];

export default function ProcessSection(){
  return (
    <section id="process" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-4"
        >
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">Our Path to Deliver Your Product</h3>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Structured, transparent, and results-focused methodology.</p>
        </motion.div>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div 
                key={s} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i*0.08, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="rounded-2xl border border-white/6 bg-slate-950/50 p-6 backdrop-blur-2xl text-center transition-smooth group cursor-pointer"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-900 font-semibold text-xl font-playfair group-hover:shadow-[0_20px_60px_rgba(56,189,248,0.4)] transition-smooth">
                  {i+1}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white font-playfair">{s}</h4>
                <p className="mt-2 text-sm text-slate-400">
                  {i === 0 && "Understanding your market and audience"}
                  {i === 1 && "Strategic planning and roadmapping"}
                  {i === 2 && "Beautiful, user-centric design"}
                  {i === 3 && "Robust and scalable implementation"}
                  {i === 4 && "Rigorous quality assurance"}
                  {i === 5 && "Seamless launch and deployment"}
                  {i === 6 && "Ongoing support and optimization"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
