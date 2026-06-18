import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-4 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/40 shadow-lg' : ''}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/6 bg-gradient-to-b from-transparent to-transparent p-3">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-1 shadow-md">
                <div className="h-full w-full rounded-full bg-slate-950/60 flex items-center justify-center text-sm font-bold">RS</div>
              </div>
              <div className="hidden flex-col leading-tight sm:flex">
                <span className="text-sm font-semibold font-playfair">R&S SERVICES</span>
                <span className="text-xs text-slate-300">Premium Digital Solutions</span>
              </div>
            </button>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a href="/#home" className="text-sm text-slate-200 hover:text-white transition-smooth">Home</a>
            <a href="/#founders" className="text-sm text-slate-200 hover:text-white transition-smooth">About Us</a>
            <a href="/#projects" className="text-sm text-slate-200 hover:text-white transition-smooth">Our Results</a>
            <Link to="/services" className="text-sm text-slate-200 hover:text-white transition-smooth">Services</Link>
            <a href="/#contact" className="text-sm text-slate-200 hover:text-white transition-smooth">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.12)] hover:scale-[1.01] lg:inline-flex transition-smooth"
            >
              Start Project
            </a>

            <button className="lg:hidden" onClick={() => setOpen((s) => !s)} aria-label="menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-3 rounded-2xl bg-slate-950/60 p-6 backdrop-blur-3xl lg:hidden">
            <div className="flex flex-col gap-4">
              <a onClick={() => setOpen(false)} href="/#home" className="text-lg">Home</a>
              <a onClick={() => setOpen(false)} href="/#founders" className="text-lg">About Us</a>
              <a onClick={() => setOpen(false)} href="/#projects" className="text-lg">Our Results</a>
              <Link onClick={() => setOpen(false)} to="/services" className="text-lg">Services</Link>
              <a onClick={() => setOpen(false)} href="/#contact" className="text-lg">Contact</a>
              <a onClick={() => navigate('/admin')} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md">Admin</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
