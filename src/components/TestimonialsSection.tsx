'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'CEO, FinPay',
    company: 'FinPay',
    companyLogo: 'FINPAY',
    logoType: 'fintech',
    text: 'RS Services transformed our idea into a powerful digital platform with great attention to detail.',
    rating: '5.0',
    avatarGradient: 'from-blue-600 to-cyan-500',
    initials: 'RS'
  },
  {
    id: 'priya-mehta',
    name: 'Priya Mehta',
    role: 'PM, Shoply',
    company: 'Shoply',
    companyLogo: 'Shoply.',
    logoType: 'shoply',
    text: 'Professional, responsive, & understood our vision. Exceeded our expectations.',
    rating: '4.8',
    avatarGradient: 'from-purple-600 to-pink-500',
    initials: 'PM'
  },
  {
    id: 'arjun-verma',
    name: 'Arjun Verma',
    role: 'CTO, HealthPlus',
    company: 'HealthPlus',
    companyLogo: 'Health+',
    logoType: 'health',
    text: 'Exceptional team with deep technical expertise. Delivered on time & budget.',
    rating: '4.9',
    avatarGradient: 'from-cyan-500 to-teal-500',
    initials: 'AV'
  },
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'Founder, EduSmart',
    company: 'EduSmart',
    companyLogo: 'EduSmart',
    logoType: 'edusmart',
    text: 'From design to deployment, everything was seamless & high quality.',
    rating: '5.0',
    avatarGradient: 'from-pink-500 to-fuchsia-600',
    initials: 'NK'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-purple-300 uppercase"
          >
            <MessageCircle size={12} className="text-purple-400" />
            Client Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            What Our <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">Clients</span> Say
          </motion.h2>

          {/* Star Rating Summary */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-1.5 pt-0.5"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 sm:w-4.5 sm:h-4.5" />
              ))}
            </div>
            <span className="text-sm sm:text-lg font-bold font-playfair text-cyan-300 ml-1">4.9 / 5</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-semibold">(120+ Reviews)</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-base font-medium"
          >
            Don't just take our word for it — here's what our amazing clients have to say about working with us.
          </motion.p>
        </div>

        {/* 2-by-2 Grid on Mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-3.5 sm:p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/40 group flex flex-col justify-between"
            >
              <div>
                {/* Glowing Quote Icon */}
                <div className="mb-2 sm:mb-4 text-cyan-400 opacity-80 group-hover:scale-110 transition-transform">
                  <Quote size={20} className="rotate-180 fill-cyan-400/20 sm:w-7 sm:h-7" />
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-[10px] sm:text-sm text-slate-300 leading-snug sm:leading-relaxed mb-3 sm:mb-6 font-normal line-clamp-3">
                  "{item.text}"
                </p>

                {/* Rating Stars Row */}
                <div className="flex items-center gap-1 mb-3 sm:mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-200 ml-0.5">{item.rating}</span>
                </div>
              </div>

              {/* Bottom Profile & Company Logo */}
              <div className="pt-2.5 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                {/* Author Info */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className={`h-7 w-7 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-md shrink-0`}>
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[11px] sm:text-sm font-bold text-white font-playfair truncate">{item.name}</h4>
                    <p className="text-[8px] sm:text-[10px] text-slate-400 truncate">{item.role}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
