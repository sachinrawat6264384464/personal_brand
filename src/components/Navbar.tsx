'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-3 sm:top-4 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-950/80 shadow-2xl' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6 rounded-full border border-white/10 bg-slate-950/60 p-2.5 px-4 sm:px-6 backdrop-blur-2xl shadow-xl">
          
          {/* Left Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="h-full w-full rounded-[10.5px] bg-slate-950 flex items-center justify-center text-xs font-bold text-white font-mono tracking-tighter">
                SR
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm font-semibold font-playfair tracking-wide text-white">SR SERVICES</span>
              <span className="text-[10px] sm:text-xs text-slate-300">Premium Digital Solutions</span>
            </div>
          </Link>

          {/* Center Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a 
              href="/#home" 
              className={`text-xs sm:text-sm transition-all relative py-1 ${
                pathname === '/' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              )}
            </a>
            <a href="/#founders" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-all">About Us</a>
            <a href="/#projects" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-all">Our Results</a>
            <Link href="/services" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-all">Services</Link>
            <a href="/#contact" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-all">Contact</a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/#contact"
              className="hidden rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_25px_rgba(56,189,248,0.25)] hover:shadow-[0_12px_35px_rgba(56,189,248,0.4)] hover:scale-[1.02] lg:inline-flex items-center gap-1.5 transition-all"
            >
              <span>Start Project</span>
              <ArrowRight size={14} />
            </a>

            <button className="lg:hidden p-1.5 text-slate-200 hover:text-white" onClick={() => setOpen((s) => !s)} aria-label="Toggle navigation menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-3xl border border-white/10 bg-slate-950/95 p-6 backdrop-blur-3xl lg:hidden shadow-2xl">
            <div className="flex flex-col gap-4">
              <a onClick={() => setOpen(false)} href="/#home" className="text-sm font-medium text-slate-200 hover:text-cyan-300">Home</a>
              <a onClick={() => setOpen(false)} href="/#founders" className="text-sm font-medium text-slate-200 hover:text-cyan-300">About Us</a>
              <a onClick={() => setOpen(false)} href="/#projects" className="text-sm font-medium text-slate-200 hover:text-cyan-300">Our Results</a>
              <Link onClick={() => setOpen(false)} href="/services" className="text-sm font-medium text-slate-200 hover:text-cyan-300">Services</Link>
              <a onClick={() => setOpen(false)} href="/#contact" className="text-sm font-medium text-slate-200 hover:text-cyan-300">Contact</a>
              <a onClick={() => { setOpen(false); }} href="/#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md">
                <span>Start Project</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
