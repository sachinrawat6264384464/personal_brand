'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Home,
  Users,
  Trophy,
  Briefcase,
  Phone,
  PenTool,
  Code,
  Box,
  TrendingUp,
  Send
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#050816] text-white pt-16 pb-8 overflow-hidden">
      {/* Top Gradient Accent Border Line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 space-y-12">

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">

          {/* Column 1: Brand Info & Socials (4 Cols on LG) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-cyan-500/20">
                SR
              </div>
              <div>
                <h3 className="text-base font-bold font-playfair tracking-wide text-white">SR SERVICES</h3>
                <p className="text-xs text-purple-400 font-medium">Premium Digital Solutions</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              We craft high-performance digital products and premium brand strategies that elevate ambitious founders and enterprises.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">Let's Connect</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sachinrawat6264384464/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-white/10 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sachin-rawatb"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-white/10 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:srservices0826@gmail.com"
                  className="h-10 w-10 rounded-xl border border-white/10 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                  aria-label="Email Us"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Navigation (2.5 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-cyan-400 pb-1 inline-block">
              Explore
            </h4>
            <ul className="space-y-3 pt-1 text-xs font-medium">
              <li>
                <a href="/#home" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Home size={15} className="text-slate-400" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/#founders" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Users size={15} className="text-slate-400" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/#projects" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Trophy size={15} className="text-slate-400" />
                  <span>Our Results</span>
                </a>
              </li>
              <li>
                <Link href="/services" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Briefcase size={15} className="text-slate-400" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <a href="/#contact" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone size={15} className="text-slate-400" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Founders Cards (3 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-purple-500 pb-1 inline-block">
              Founders
            </h4>
            <div className="space-y-3 pt-1">
              {/* Sachin Card */}
              <Link
                href="/founder/sachin"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3 hover:border-purple-400/50 hover:bg-slate-900 transition-all cursor-pointer shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-purple-950 border border-purple-500/30 flex items-center justify-center font-bold text-purple-400 text-xs font-playfair shrink-0">
                    S
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white font-playfair group-hover:text-purple-300 transition-colors">Sachin (CTO)</h5>
                    <p className="text-[10px] text-slate-400">Chief Technology Officer</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Ritik Card */}
              <Link
                href="/founder/ritik"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3 hover:border-cyan-400/50 hover:bg-slate-900 transition-all cursor-pointer shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-xs font-playfair shrink-0">
                    R
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white font-playfair group-hover:text-cyan-300 transition-colors">Ritik (CMO)</h5>
                    <p className="text-[10px] text-slate-400">Chief Marketing Officer</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 4: Core Services List (2.5 Cols on LG) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white border-b-2 border-purple-500 pb-1 inline-block">
              Core Services
            </h4>
            <ul className="space-y-3 pt-1 text-xs font-medium">
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="h-7 w-7 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <PenTool size={13} />
                </div>
                <span>UI/UX Design & Brand Strategy</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="h-7 w-7 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Code size={13} />
                </div>
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="h-7 w-7 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Box size={13} />
                </div>
                <span>SaaS & Custom App Architecture</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="h-7 w-7 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <TrendingUp size={13} />
                </div>
                <span>Digital Strategy & Optimization</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Subscription Bar ("Stay Updated") */}
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md shrink-0">
              <Send size={20} className="-rotate-12" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-playfair">Stay Updated</h4>
              <p className="text-xs text-slate-400">Subscribe to get insights, updates and offers delivered to your inbox.</p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-72 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-7 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition-all cursor-pointer shrink-0"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Bottom Copyright & Policy Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-white/5">
          <p>© 2026 <span className="text-purple-400 font-bold">SR SERVICES</span>. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="/#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
