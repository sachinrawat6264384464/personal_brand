'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Layers, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layout, 
  HelpCircle,
  FileText
} from 'lucide-react';

export default function Services() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section className="min-h-screen relative px-4 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#050816] text-white overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%)] opacity-90 pointer-events-none" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Back Button */}
        <Link 
          href="/"
          className="relative z-20 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-all mb-8 sm:mb-12 group font-semibold cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 sm:px-4 py-1.5 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-200 font-bold"
          >
            <Sparkles size={12} className="text-cyan-400" />
            Our Architecture & Packages
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 leading-tight"
          >
            What We Deliver
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl font-pro-bold leading-relaxed"
          >
            Complete transparency on package structure, architecture, and page layouts so you know exactly what is included.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* PACKAGE 1: Landing Page */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-2xl transition-all hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(56,189,248,0.08)] group"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md shrink-0">
                <Layout size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-playfair">Landing Page</h3>
                <p className="text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-0.5">High-Converting Single Page</p>
              </div>
            </div>

            <div className="flex-1 py-6 sm:py-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers size={14} className="text-cyan-400" />
                  Structure (6-8 Sections)
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>1. Hero Header:</strong> High-impact title, value proposition, and instant CTA.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>2. Core Problem/Hook:</strong> Addressing user pain points directly.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>3. Solution/Product Intro:</strong> Explaining your key offer.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>4. Features & Benefits:</strong> Visual grid showing value points.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>5. Social Proof / Testimonials:</strong> Trust elements and reviews.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>6. Pricing / Package Offer:</strong> Transparent budget grids.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>7. Interactive FAQs:</strong> Accordion layout answering objections.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>8. CTA / Lead Form:</strong> High conversion contact capture.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Core Technical Features</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-900 border border-white/5 px-2.5 py-1 rounded-full text-slate-300">Responsive Layout</span>
                  <span className="text-xs bg-slate-900 border border-white/5 px-2.5 py-1 rounded-full text-slate-300">Copywriting Guidance</span>
                  <span className="text-xs bg-slate-900 border border-white/5 px-2.5 py-1 rounded-full text-slate-300">SEO Meta Setups</span>
                  <span className="text-xs bg-slate-900 border border-white/5 px-2.5 py-1 rounded-full text-slate-300">Lighthouse Speed Opt</span>
                </div>
              </div>
            </div>

            <a 
              href="/#contact"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.15)] hover:scale-[1.02] transition-all"
            >
              Order Landing Page
            </a>
          </motion.div>

          {/* PACKAGE 2: Full Website */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-2xl transition-all hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-[0_20px_50px_rgba(168,85,247,0.08)] group"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-playfair">Multi-Page Website</h3>
                <p className="text-xs text-violet-400 font-semibold tracking-wider uppercase mt-0.5">Corporate & Agency Solutions</p>
              </div>
            </div>

            <div className="flex-1 py-6 sm:py-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <FileText size={14} className="text-violet-400" />
                  Pages Included (5-8 Pages)
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>Home Page:</strong> Main overview showcasing products & stats.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>About Us Page:</strong> Brand vision, history, and founder details.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>Services Page:</strong> Categorized core offerings (like this page).</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>Portfolio / Case Studies:</strong> Interactive grid of past achievements.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>Dynamic Blog System:</strong> CMS setup to manage news posts.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    <span><strong>Contact Page:</strong> Custom form with interactive maps/details.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Architecture & Tech Stack</h4>
                <div className="space-y-2 text-xs text-slate-400">
                  <p className="flex items-center gap-2">
                    <Cpu size={12} className="text-violet-400 shrink-0" />
                    <strong>Frontend:</strong> React.js, Next.js, or Vite
                  </p>
                  <p className="flex items-center gap-2">
                    <Database size={12} className="text-violet-400 shrink-0" />
                    <strong>Headless CMS:</strong> Contentful, Sanity, or Strapi for blog management
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap size={12} className="text-violet-400 shrink-0" />
                    <strong>Speed Setup:</strong> Server-Side Rendering (SSR) & CDN deployment
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="/#contact"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.15)] hover:scale-[1.02] transition-all"
            >
              Order Custom Website
            </a>
          </motion.div>

          {/* PACKAGE 3: Custom App */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-2xl transition-all hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(56,189,248,0.08)] group"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-950 shadow-md shrink-0">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-playfair">Web & Mobile App</h3>
                <p className="text-xs text-cyan-300 font-semibold tracking-wider uppercase mt-0.5">SaaS & Enterprise Systems</p>
              </div>
            </div>

            <div className="flex-1 py-6 sm:py-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Cpu size={14} className="text-cyan-400" />
                  Architecture & Flow
                </h4>
                <div className="relative border-l border-white/10 pl-4 space-y-4 text-sm text-slate-300">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                    <strong>1. Presentation Layer (Frontend):</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Interactive single-page-app via React / NextJS or native iOS/Android via Flutter.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-violet-400" />
                    <strong>2. Application Logic (Backend API):</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Robust API nodes built with Node.js/Express, Python/Django, or Java/Spring Boot.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                    <strong>3. Data & AI Vector Storage (Database):</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Relational (PostgreSQL) or Document-based (MongoDB). AI pipelines integrate ChromaDB or Qdrant for semantic search & RAG workflows.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Enterprise Functionalities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-cyan-400 shrink-0" /> JWT Auth / RBAC
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-cyan-400 shrink-0" /> Payment Gateways
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-cyan-400 shrink-0" /> Custom Admin Portal
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-cyan-400 shrink-0" /> RAG & AI Agents
                  </li>
                </ul>
              </div>
            </div>

            <a 
              href="/#contact"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.15)] hover:scale-[1.02] transition-all"
            >
              Order Custom Application
            </a>
          </motion.div>

        </div>

        {/* FAQs/Objections Accordion (Visual Helper) */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <HelpCircle size={32} className="mx-auto text-cyan-400 animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair">Got Questions?</h3>
            <p className="text-slate-400 text-sm">We provide end-to-end guidance from conceptualization to final deployment.</p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="rounded-2xl border border-white/6 bg-slate-950/40 p-5 sm:p-6 backdrop-blur-2xl">
              <h4 className="text-base font-semibold text-white font-playfair">How do we start?</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Click any "Order" button or scroll to the contact form to share your details. We will schedule a kickoff session, map out the wireframes, and design your product stage-by-stage.
              </p>
            </div>
            <div className="rounded-2xl border border-white/6 bg-slate-950/40 p-5 sm:p-6 backdrop-blur-2xl">
              <h4 className="text-base font-semibold text-white font-playfair">Can we update the content later?</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Yes. For websites, we configure custom headless CMS hubs so you can update text and images anytime. For apps, we provide a customized admin dashboard.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
