import React from 'react';
import { MotionProps, motion } from 'framer-motion';
import { Code, Palette, Box, Cpu, Server, Smartphone, Layers, BarChart2, Database, GitBranch } from 'lucide-react';

const services = [
  { title: 'Website Development', icon: Code, desc: 'Robust, scalable websites with modern stacks.' },
  { title: 'Premium Website Design', icon: Palette, desc: 'High-fidelity designs and brand systems.' },
  { title: 'End-to-End App Development', icon: Smartphone, desc: 'Mobile & web apps with great UX.' },
  { title: 'Data Analytics', icon: BarChart2, desc: 'Insights and dashboards for decision-making.' },
  { title: 'AI Models & Automation', icon: Cpu, desc: 'AI-driven features and automation.' },
  { title: 'UI/UX Design', icon: Layers, desc: 'Thoughtful product design and prototyping.' },
  { title: 'Branding & Digital Presence', icon: Palette, desc: 'Brand strategy and identity systems.' },
  { title: 'Dashboard Systems', icon: Server, desc: 'Admin dashboards and internal tools.' },
  { title: 'API Integrations', icon: GitBranch, desc: 'Connect and automate with APIs.' },
  { title: 'Custom Software Solutions', icon: Box, desc: 'Tailored software that scales.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative px-6 pb-20 sm:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center space-y-4">
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">What We Deliver</h3>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Comprehensive solutions tailored to elevate your brand.</p>
        </div>

        {/* Scrolling Services */}
        <div className="mb-12 overflow-hidden">
          <motion.div 
            className="flex gap-4"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...services, ...services].map((s, i) => (
              <motion.div
                key={`${s.title}-${i}`}
                className="min-w-max rounded-2xl border border-white/6 bg-gradient-to-br from-cyan-900/20 to-violet-900/20 p-6 backdrop-blur-2xl whitespace-nowrap"
              >
                <p className="text-lg font-semibold text-cyan-300 font-pro-bold">{s.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div 
              key={s.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="rounded-2xl border border-white/6 bg-slate-950/50 p-6 backdrop-blur-2xl transition-smooth hover:shadow-[0_20px_80px_rgba(56,189,248,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-3 flex-shrink-0">
                  <s.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white font-playfair">{s.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
