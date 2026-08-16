'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, Settings, FileText, Image, Link2, Zap } from 'lucide-react';
import { firebaseEnabled } from '../../firebase';

const sections = [
  { id: 'hero', title: 'Hero Section', icon: Zap, color: 'from-cyan-500 to-blue-600', fields: ['Title', 'Subtitle', 'CTA Button Text', 'CTA Button Link'] },
  { id: 'services', title: 'Services Content', icon: FileText, color: 'from-purple-500 to-pink-600', fields: ['Service Title', 'Service Description', 'Service Icon'] },
  { id: 'projects', title: 'Projects/Results', icon: Link2, color: 'from-orange-500 to-red-600', fields: ['Project Name', 'Project Description', 'Project Links'] },
  { id: 'testimonials', title: 'Client Testimonials', icon: FileText, color: 'from-green-500 to-emerald-600', fields: ['Client Name', 'Company', 'Testimonial Text', 'Rating'] },
  { id: 'team', title: 'Team Members', icon: Settings, color: 'from-blue-500 to-indigo-600', fields: ['Team Member Name', 'Role', 'Bio', 'Profile Image'] },
  { id: 'settings', title: 'Site Settings', icon: Settings, color: 'from-slate-600 to-slate-700', fields: ['Site Title', 'Meta Description', 'Contact Email', 'Phone Number'] },
];

export default function AdminDashboard(){
  const router = useRouter();
  useEffect(() => {
    const authLocal = typeof window !== 'undefined' ? localStorage.getItem('adminAuth') : null;
    if (!authLocal) {
      // Not authenticated locally — redirect to login
      router.push('/admin');
    }
  }, [router]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (sectionId: string) => {
    localStorage.setItem(`section_${sectionId}`, JSON.stringify(formData));
    alert(`${sectionId} content saved successfully!`);
    setFormData({});
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-playfair font-800 text-white">Admin Dashboard</h1>
            <p className="mt-2 text-slate-300 font-pro-bold">Manage all website content and settings</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-smooth"
          >
            <LogOut size={18} />
            Logout
          </button>
        </motion.div>

        {/* Content Management Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {sections.map((section, idx) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveSection(section.id)}
              className="group rounded-2xl border border-white/6 bg-slate-950/50 p-6 backdrop-blur-2xl text-left transition-smooth hover:border-white/10 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} mb-4 group-hover:scale-110 transition-transform`}>
                <section.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white font-playfair">{section.title}</h3>
              <p className="mt-1 text-sm text-slate-400">Edit and manage content</p>
            </motion.button>
          ))}
        </div>

        {/* Modal Editor */}
        {activeSection && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="rounded-2xl border border-white/6 bg-slate-950 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-playfair font-800 text-white mb-6">
                Edit {sections.find(s => s.id === activeSection)?.title}
              </h2>

              <div className="space-y-4 mb-8">
                {sections.find(s => s.id === activeSection)?.fields.map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-pro-bold text-slate-300 mb-2">{field}</label>
                    <input
                      type={field.toLowerCase().includes('email') ? 'email' : field.toLowerCase().includes('image') ? 'file' : 'text'}
                      value={formData[field] || ''}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder={`Enter ${field.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleSave(activeSection)}
                  className="flex-1 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:shadow-xl transition-smooth"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setActiveSection(null)}
                  className="flex-1 rounded-full border border-white/10 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-smooth"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-white/6 bg-gradient-to-r from-slate-950/50 to-slate-900/30 p-8 backdrop-blur-2xl"
        >
          <h3 className="text-lg font-playfair font-800 text-white mb-6">Site Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-playfair font-800 text-cyan-400">98+</p>
              <p className="mt-2 text-sm text-slate-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-playfair font-800 text-violet-400">500+</p>
              <p className="mt-2 text-sm text-slate-400">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-playfair font-800 text-cyan-400">4.9★</p>
              <p className="mt-2 text-sm text-slate-400">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-playfair font-800 text-violet-400">24+</p>
              <p className="mt-2 text-sm text-slate-400">Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6"
        >
          <h4 className="font-playfair font-800 text-cyan-300 mb-2">Content Management System</h4>
          <p className="text-sm text-slate-300">
            All changes you make in this dashboard will be reflected on your live website. You have complete control over every section's content, from hero text to project details and testimonials.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
