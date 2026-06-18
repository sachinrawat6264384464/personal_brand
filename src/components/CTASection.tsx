import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection(){
  return (
    <section id="cta" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="rounded-3xl border border-white/6 bg-gradient-to-r from-cyan-900/10 to-violet-900/10 p-12 text-center backdrop-blur-2xl">
          <h3 className="text-4xl font-semibold text-white">Ready To Build Something Exceptional?</h3>
          <p className="mt-4 text-slate-300">Let's craft a premium digital product together — from strategy to launch.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md">Start a Project</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90">Schedule a Call</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
