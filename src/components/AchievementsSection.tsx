import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Rocket, Code2, Target } from 'lucide-react';

const items = [
  { title: 'Industry Recognition', desc: 'Starting strong', icon: Award, color: 'from-yellow-500 to-orange-500' },
  { title: 'Technical Excellence', desc: 'Modern Architecture', icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { title: 'Portfolio Success', desc: '15+ Projects Delivered', icon: Rocket, color: 'from-pink-500 to-red-500' },
  { title: 'Years of Expertise', desc: '1+ Years Experience', icon: Target, color: 'from-green-500 to-emerald-500' },
  { title: 'Team Strength', desc: 'Expert Developer Network', icon: Users, color: 'from-purple-500 to-indigo-500' },
  { title: 'Innovation Drive', desc: 'Cutting-Edge Solutions', icon: Zap, color: 'from-cyan-500 to-violet-500' },
];

export default function AchievementsSection(){
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [techCount, setTechCount] = useState(0);

  useEffect(() => {
    let p = 0, c = 0, t = 0;
    const ip = setInterval(() => { p += 1; if (p >= 15) { p = 15; clearInterval(ip); } setProjectsCount(p); }, 50);
    const ic = setInterval(() => { c += 1; if (c >= 15) { c = 15; clearInterval(ic); } setClientsCount(c); }, 50);
    const it = setInterval(() => { t += 1; if (t >= 5) { t = 5; clearInterval(it); } setTechCount(t); }, 150);
    return () => { clearInterval(ip); clearInterval(ic); clearInterval(it); };
  }, []);
  return (
    <section id="achievements" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-4"
        >
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">Our Achievements</h3>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Milestones that define our journey of excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i)=> (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20, scale: 0.9 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="rounded-2xl border border-white/6 bg-slate-950/50 p-8 backdrop-blur-2xl text-center group transition-smooth cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white font-playfair">{item.title}</h4>
              <p className="mt-3 text-sm text-slate-300">{item.desc}</p>
              <div className={`mt-4 h-1 w-8 mx-auto rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-white/6 bg-gradient-to-br from-slate-950/50 to-slate-900/30 p-8 backdrop-blur-2xl"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-800 text-cyan-400">{projectsCount}+</p>
            <p className="mt-2 text-sm text-slate-400 font-pro-bold">Successful Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-800 text-violet-400">{clientsCount}+</p>
            <p className="mt-2 text-sm text-slate-400 font-pro-bold">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-800 text-cyan-400">{techCount}+</p>
            <p className="mt-2 text-sm text-slate-400 font-pro-bold">Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-800 text-violet-400">5.0★</p>
            <p className="mt-2 text-sm text-slate-400 font-pro-bold">Avg Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
