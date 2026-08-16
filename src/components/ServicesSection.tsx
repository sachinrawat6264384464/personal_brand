'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Gem, 
  Smartphone, 
  Bot, 
  BarChart3, 
  PenTool, 
  Megaphone, 
  LayoutGrid, 
  Link as LinkIcon, 
  ShoppingCart, 
  Box, 
  Headphones, 
  ArrowRight,
  Sparkles,
  Palette,
  Check
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Services', icon: Sparkles },
  { id: 'web', label: 'Web Development', icon: Code2 },
  { id: 'design', label: 'UI/UX Design', icon: PenTool },
  { id: 'ai', label: 'AI & Automation', icon: Bot },
  { id: 'analytics', label: 'Data Analytics', icon: BarChart3 },
  { id: 'branding', label: 'Branding', icon: Palette },
  { id: 'dashboard', label: 'Dashboard Systems', icon: LayoutGrid },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'api', label: 'API Integrations', icon: LinkIcon },
  { id: 'custom', label: 'Custom Solutions', icon: Box },
];

const servicesData = [
  {
    id: 'web-dev',
    category: 'web',
    title: 'Website Development',
    desc: 'Robust, scalable & high-performance websites.',
    icon: Code2,
    gradient: 'from-blue-600 to-cyan-500',
    btnBg: 'bg-blue-600',
    checkColor: 'text-blue-400',
    features: [
      'Responsive & SEO',
      'Fast Performance',
      'Scalable Stack'
    ]
  },
  {
    id: 'web-design',
    category: 'design',
    title: 'Premium Website Design',
    desc: 'High-fidelity, modern & conversion-focused designs.',
    icon: Gem,
    gradient: 'from-purple-600 to-indigo-500',
    btnBg: 'bg-purple-600',
    checkColor: 'text-purple-400',
    features: [
      'Custom UI/UX Design',
      'Brand Layouts',
      'Interactive Micro-UI'
    ]
  },
  {
    id: 'app-dev',
    category: 'mobile',
    title: 'App Development',
    desc: 'Mobile & web applications with seamless UX.',
    icon: Smartphone,
    gradient: 'from-blue-500 to-indigo-600',
    btnBg: 'bg-blue-500',
    checkColor: 'text-blue-400',
    features: [
      'iOS & Android Apps',
      'Cross-platform',
      'User-centric UX'
    ]
  },
  {
    id: 'ai-automation',
    category: 'ai',
    title: 'AI & Automation',
    desc: 'AI solutions & automation to boost productivity.',
    icon: Bot,
    gradient: 'from-fuchsia-600 to-pink-500',
    btnBg: 'bg-fuchsia-600',
    checkColor: 'text-fuchsia-400',
    features: [
      'Custom AI Models',
      'Workflow Automation',
      'Smart Integrations'
    ]
  },
  {
    id: 'data-analytics',
    category: 'analytics',
    title: 'Data Analytics',
    desc: 'Transform raw data into actionable insights.',
    icon: BarChart3,
    gradient: 'from-cyan-500 to-teal-400',
    btnBg: 'bg-cyan-500',
    checkColor: 'text-cyan-400',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Insights'
    ]
  },
  {
    id: 'ui-ux',
    category: 'design',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive designs users love.',
    icon: PenTool,
    gradient: 'from-purple-500 to-violet-600',
    btnBg: 'bg-purple-500',
    checkColor: 'text-purple-400',
    features: [
      'User Research',
      'Wireframing & Prototypes',
      'Usability Testing'
    ]
  },
  {
    id: 'branding',
    category: 'branding',
    title: 'Branding & Digital Presence',
    desc: 'Strong brand identity & digital presence.',
    icon: Megaphone,
    gradient: 'from-pink-500 to-rose-500',
    btnBg: 'bg-pink-500',
    checkColor: 'text-pink-400',
    features: [
      'Brand Strategy',
      'Logo & Identity',
      'Social Presence'
    ]
  },
  {
    id: 'dashboard-systems',
    category: 'dashboard',
    title: 'Dashboard Systems',
    desc: 'Powerful admin dashboards & internal systems.',
    icon: LayoutGrid,
    gradient: 'from-emerald-500 to-green-500',
    btnBg: 'bg-emerald-500',
    checkColor: 'text-emerald-400',
    features: [
      'Custom Admin Panels',
      'Real-time Insights',
      'Role-based Access'
    ]
  },
  {
    id: 'api-integrations',
    category: 'api',
    title: 'API Integrations',
    desc: 'Seamlessly connect systems with powerful APIs.',
    icon: LinkIcon,
    gradient: 'from-amber-500 to-orange-500',
    btnBg: 'bg-amber-500',
    checkColor: 'text-amber-400',
    features: [
      'RESTful APIs',
      'Third-party APIs',
      'Secure & Scalable'
    ]
  },
  {
    id: 'e-commerce',
    category: 'web',
    title: 'E-Commerce Solutions',
    desc: 'Complete e-commerce platforms to grow & scale.',
    icon: ShoppingCart,
    gradient: 'from-blue-600 to-cyan-500',
    btnBg: 'bg-blue-600',
    checkColor: 'text-blue-400',
    features: [
      'Product Management',
      'Secure Payments',
      'Order & Inventory'
    ]
  },
  {
    id: 'custom-software',
    category: 'custom',
    title: 'Custom Software',
    desc: 'Tailored software for unique business challenges.',
    icon: Box,
    gradient: 'from-yellow-500 to-amber-500',
    btnBg: 'bg-amber-500',
    checkColor: 'text-amber-400',
    features: [
      'Enterprise Solutions',
      'Scalable & Secure',
      'Ongoing Support'
    ]
  },
  {
    id: 'maintenance-support',
    category: 'custom',
    title: 'Maintenance & Support',
    desc: 'Reliable support to keep systems running.',
    icon: Headphones,
    gradient: 'from-indigo-500 to-blue-500',
    btnBg: 'bg-indigo-500',
    checkColor: 'text-indigo-400',
    features: [
      'Bug Fixes & Updates',
      'Performance Monitoring',
      '24/7 Support'
    ]
  }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Mesh Background Glow */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_top_center,rgba(168,85,247,0.12),transparent_45%),radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            What We <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Deliver</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cyan-300 font-semibold text-xs sm:text-xl font-pro-bold"
          >
            Comprehensive digital solutions tailored to elevate your brand
          </motion.p>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max justify-start md:justify-center px-1">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/40 to-cyan-500/40 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                      : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <IconComp size={14} className={isActive ? 'text-cyan-300' : 'text-slate-400'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-by-2 Cards Grid on Mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredServices.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-4">
                    <div className={`h-8 w-8 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                      <ServiceIcon size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold font-playfair leading-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed mb-3 line-clamp-2">
                    {service.desc}
                  </p>

                  {/* Features List with Checkmarks */}
                  <ul className="space-y-1 sm:space-y-2 mb-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5 text-[9px] sm:text-xs text-slate-300">
                        <Check size={12} className={`${service.checkColor} shrink-0`} />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Right Arrow Button */}
                <div className="flex justify-end pt-1">
                  <a
                    href="#contact"
                    className={`h-7 w-7 sm:h-9 sm:w-9 rounded-full ${service.btnBg} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
