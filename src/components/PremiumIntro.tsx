'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumIntro() {
  return (
    <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl border border-white/6 bg-slate-950/40 p-12 backdrop-blur-2xl text-center">
          <h3 className="text-6xl font-bold leading-tight tracking-tight text-white/95">We design premium web experiences for creators, startups, and modern businesses.</h3>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">Our approach combines product thinking, award-winning design, and polished engineering to craft digital products that convert and delight.</p>
        </motion.div>
      </div>
    </section>
  );
}
