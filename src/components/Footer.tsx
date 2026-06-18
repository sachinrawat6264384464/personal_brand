import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/80 pt-16 pb-8 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-cyan-500/10">
                RS
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide text-white">R&S SERVICES</div>
                <div className="text-xs text-cyan-400/80">Premium Digital Solutions</div>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              We craft high-performance digital products and premium brand strategies that elevate ambitious founders and enterprises.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@rsservices.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#home" className="text-sm text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#founders" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Our Results</a>
              </li>
              <li>
                <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Meet the Founders */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Founders</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/founder/ritik" className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  <span>Ritik (CTO)</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </Link>
              </li>
              <li>
                <Link to="/founder/sachin" className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors">
                  <span>Sachin (CCO)</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Core Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>UI/UX Design & Brand Strategy</li>
              <li>Full Stack Web Development</li>
              <li>SaaS & Custom App Architecture</li>
              <li>Digital Strategy & Optimization</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} R&S SERVICES. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="/#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
