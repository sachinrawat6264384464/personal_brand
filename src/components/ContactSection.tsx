'use client';

import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { firebaseApp, firebaseEnabled } from '../firebase';
import { 
  User, 
  Mail, 
  Phone, 
  DollarSign, 
  Edit3, 
  Send, 
  Sparkles, 
  MapPin, 
  Clock, 
  Linkedin, 
  Instagram, 
  Github, 
  Rocket, 
  ChevronRight,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    budget: '',
    message: ''
  });

  const onChange = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (firebaseEnabled && firebaseApp) {
        const db = getFirestore(firebaseApp);
        await addDoc(collection(db, 'contacts'), { 
          ...form, 
          createdAt: new Date().toISOString() 
        });
      }

      const waText = encodeURIComponent(
        `*New Inquiry from R&S Services Website* 🚀\n\n` +
        `👤 *Name:* ${form.first} ${form.last}\n` +
        `✉️ *Email:* ${form.email}\n` +
        `📞 *Phone:* ${form.phone || 'Not provided'}\n` +
        `💼 *Service:* ${form.type}\n` +
        `💰 *Budget:* ${form.budget || 'Not specified'}\n\n` +
        `📝 *Message:*\n${form.message}`
      );

      window.open(`https://wa.me/918319694592?text=${waText}`, '_blank');

      const mailSubject = encodeURIComponent(`New Inquiry: ${form.type} from ${form.first} ${form.last}`);
      const mailBody = encodeURIComponent(
        `Name: ${form.first} ${form.last}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone || 'Not provided'}\n` +
        `Service: ${form.type}\n` +
        `Budget: ${form.budget || 'Not specified'}\n\n` +
        `Message:\n${form.message}`
      );
      window.location.href = `mailto:ritikmotwani18@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      setSuccess(true);
      setForm({ first: '', last: '', email: '', phone: '', type: 'General Inquiry', budget: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Failed to submit form. Please try contacting directly via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-3 sm:px-8 lg:px-16 py-12 sm:py-24 bg-[#050816] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-purple-300 uppercase"
          >
            <User size={12} className="text-purple-400" />
            Let's Connect
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-800 tracking-tight"
          >
            Get in <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-base font-medium"
          >
            Start a conversation about your project.
          </motion.p>
        </div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Form (7 Cols on LG) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl"
          >
            {/* Form Title Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md shrink-0">
                <MessageSquare size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-playfair text-white">Send us a message</h3>
                <p className="text-[10px] sm:text-xs text-slate-400">We'll get back to you within 24 hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Row 1: First name & Last name (2-by-2 on mobile) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">First Name <span className="text-cyan-400">*</span></label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      value={form.first}
                      onChange={(e) => onChange('first', e.target.value)}
                      placeholder="John"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Last Name</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      value={form.last}
                      onChange={(e) => onChange('last', e.target.value)}
                      placeholder="Doe"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone (2-by-2 on mobile) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Email <span className="text-cyan-400">*</span></label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      value={form.email}
                      onChange={(e) => onChange('email', e.target.value)}
                      placeholder="john@co.com"
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Phone</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      value={form.phone}
                      onChange={(e) => onChange('phone', e.target.value)}
                      placeholder="+91 98765"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Service Type & Budget (2-by-2 on mobile) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Service</label>
                  <div className="relative">
                    <select
                      value={form.type}
                      onChange={(e) => onChange('type', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all appearance-none cursor-pointer pr-8"
                    >
                      <option value="General Inquiry" className="bg-slate-950 text-white">General Inquiry</option>
                      <option value="Website Development" className="bg-slate-950 text-white">Web Dev</option>
                      <option value="App Development" className="bg-slate-950 text-white">App Dev</option>
                      <option value="UI/UX & Branding" className="bg-slate-950 text-white">UI/UX</option>
                      <option value="AI & Automation" className="bg-slate-950 text-white">AI & ML</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Budget</label>
                  <div className="relative">
                    <DollarSign size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      value={form.budget}
                      onChange={(e) => onChange('budget', e.target.value)}
                      placeholder="$1k - $5k"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Your Message <span className="text-cyan-400">*</span></label>
                <div className="relative">
                  <Edit3 size={14} className="absolute left-3 top-3 text-slate-400" />
                  <textarea
                    value={form.message}
                    onChange={(e) => onChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    rows={3}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-8 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Area */}
              <div className="pt-2 flex flex-row items-center gap-2.5 justify-between">
                <button
                  disabled={loading}
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 px-6 py-3 text-xs font-semibold text-white shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Send size={13} />
                  <span>{loading ? 'Sending...' : 'Send message'}</span>
                </button>

                <a
                  href="https://wa.me/918319694592"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-3 py-2.5 rounded-full text-xs font-bold text-emerald-400 hover:underline"
                >
                  <span>WhatsApp</span>
                  <Sparkles size={11} />
                </a>
              </div>

              {/* Status Notifications */}
              {success && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-2.5 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Message dispatched to WhatsApp & Email.</span>
                </div>
              )}

              {errorMsg && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 p-2.5 flex items-center gap-2 text-xs text-rose-300 font-semibold">
                  <AlertCircle size={14} className="text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Info (5 Cols on LG, 2-by-2 grid on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              {/* Info Title Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md shrink-0">
                  <User size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-playfair text-white">Contact Information</h3>
                  <p className="text-[10px] sm:text-xs text-slate-400">Have a question? We'd love to hear from you.</p>
                </div>
              </div>

              {/* 2-by-2 Grid for Contact Details on Mobile (grid-cols-2) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* Email */}
                <div className="flex flex-col gap-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Email Us</p>
                    <a href="mailto:ritikmotwani18@gmail.com" className="text-[9px] sm:text-xs text-cyan-300 hover:underline truncate block">
                      ritikmotwani18@gmail.com
                    </a>
                  </div>
                </div>

                {/* Call */}
                <div className="flex flex-col gap-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Call Us</p>
                    <a href="tel:+918319694592" className="text-[9px] sm:text-xs text-slate-300 hover:text-white truncate block">
                      +91 83196 94592
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Location</p>
                    <p className="text-[9px] sm:text-xs text-slate-300 truncate">Indore, MP, India</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col gap-1.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/5 hover:border-pink-500/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Clock size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Working Hours</p>
                    <p className="text-[9px] sm:text-xs text-slate-300 truncate">10 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-1">
                <p className="text-[10px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">Connect with us</p>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.linkedin.com/in/sachin-rawatb"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-lg border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://www.instagram.com/sachin_rawat_7522"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-lg border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={15} />
                  </a>
                  <a
                    href="https://github.com/sachinrawat6264384464/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-lg border border-white/10 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <a 
              href="https://wa.me/918319694592" 
              target="_blank" 
              rel="noreferrer" 
              className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-3 flex items-center justify-between group cursor-pointer hover:border-indigo-500/60 transition-all mt-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shrink-0">
                  <Rocket size={14} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Let's build something amazing</p>
                  <p className="text-[9px] text-slate-400">Turn your ideas into reality.</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
