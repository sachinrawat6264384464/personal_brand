import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  { name: 'Alex Doe', company: 'FinCorp', text: 'Transformed our product delivery — exceptional quality and professionalism throughout.', rating: 5 },
  { name: 'Jane Roe', company: 'RetailX', text: 'Outstanding design execution and engineering excellence. Highly recommend!', rating: 4.5 },
  { name: 'John Smith', company: 'TechFlow', text: 'The team delivered beyond expectations. Perfect communication and results.', rating: 5 },
  { name: 'Sarah Chen', company: 'InnovateLabs', text: 'Premium quality work with attention to every detail. Worth every investment.', rating: 4.5 },
];

export default function TestimonialsSection(){
  const avgRating = 4.5;

  return (
    <section id="testimonials" className="relative px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center space-y-6"
        >
          <h3 className="text-4xl md:text-5xl font-playfair font-800 text-white">What Our Clients Say</h3>
          <div className="flex justify-center items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < Math.floor(avgRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-600 text-slate-600'}
                />
              ))}
            </div>
            <p className="text-xl font-playfair font-800 text-cyan-300">{avgRating} / 5.0</p>
          </div>
          <p className="mt-2 text-slate-300 text-lg font-pro-bold">Trusted by leading brands and founders worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((it, i)=> (
            <motion.div 
              key={it.name} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/6 bg-slate-950/50 p-6 backdrop-blur-2xl transition-smooth"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className={idx < Math.floor(it.rating) ? 'fill-yellow-400 text-yellow-400' : idx < it.rating ? 'fill-yellow-300 text-yellow-300' : 'fill-slate-600 text-slate-600'}
                  />
                ))}
              </div>
              <p className="text-slate-300 italic">"{it.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-sm font-semibold font-playfair">{it.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-white font-playfair">{it.name}</div>
                  <div className="text-xs text-slate-400">{it.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
