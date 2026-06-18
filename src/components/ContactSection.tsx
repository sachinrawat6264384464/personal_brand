import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { firebaseApp, firebaseEnabled } from '../firebase';

export default function ContactSection(){
  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [form,setForm] = useState({first:'',last:'',email:'',phone:'',type:'General',budget:'',message:''});

  const onChange = (k:string,v:string)=> setForm(prev=>({...prev,[k]:v}));

  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault();
    if (!firebaseEnabled || !firebaseApp) {
      // Fallback to mailto link if Firebase is not configured
      const subject = encodeURIComponent(`Project Inquiry: ${form.type}`);
      const body = encodeURIComponent(
        `Name: ${form.first} ${form.last}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone || 'Not provided'}\n` +
        `Estimated Budget: ${form.budget || 'Not specified'}\n\n` +
        `Message:\n${form.message}`
      );
      window.location.href = `mailto:hello@rsservices.com?subject=${subject}&body=${body}`;
      setSuccess(true);
      setForm({first:'',last:'',email:'',phone:'',type:'General',budget:'',message:''});
      return;
    }

    setLoading(true);
    try{
      const db = getFirestore(firebaseApp);
      await addDoc(collection(db,'contacts'),{...form,createdAt:new Date().toISOString()});
      setSuccess(true);
      setForm({first:'',last:'',email:'',phone:'',type:'General',budget:'',message:''});
    }catch(err){
      console.error(err);
      alert('Submission failed');
    }finally{setLoading(false)}
  }

  return (
    <section id="contact" className="relative px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold text-white">Get in touch</h3>
          <p className="mt-2 text-slate-300">Start a conversation about your project.</p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-white/6 bg-slate-950/50 p-8 backdrop-blur-2xl">
          {!firebaseEnabled && (
            <div className="mb-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-100">
              Contact submission is disabled because Firebase is not configured correctly. Add valid Firebase env vars in `.env`, then restart the server.
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input value={form.first} onChange={(e)=>onChange('first',e.target.value)} placeholder="First name" className="rounded-lg border border-white/10 bg-transparent p-3" required />
            <input value={form.last} onChange={(e)=>onChange('last',e.target.value)} placeholder="Last name" className="rounded-lg border border-white/10 bg-transparent p-3" />
            <input value={form.email} onChange={(e)=>onChange('email',e.target.value)} placeholder="Email" type="email" className="rounded-lg border border-white/10 bg-transparent p-3" required />
            <input value={form.phone} onChange={(e)=>onChange('phone',e.target.value)} placeholder="Mobile number" className="rounded-lg border border-white/10 bg-transparent p-3" />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <select 
              value={form.type} 
              onChange={(e)=>onChange('type',e.target.value)} 
              className="rounded-lg border border-white/10 bg-slate-950 text-white p-3 focus:outline-none focus:border-cyan-500"
            >
              <option className="bg-slate-950 text-white">General</option>
              <option className="bg-slate-950 text-white">Website</option>
              <option className="bg-slate-950 text-white">App</option>
              <option className="bg-slate-950 text-white">Landing page</option>
            </select>
            <input value={form.budget} onChange={(e)=>onChange('budget',e.target.value)} placeholder="Estimated budget" className="rounded-lg border border-white/10 bg-transparent p-3 focus:outline-none focus:border-cyan-500" />
          </div>

          <textarea value={form.message} onChange={(e)=>onChange('message',e.target.value)} placeholder="Tell us about your idea" className="mt-4 h-32 w-full rounded-lg border border-white/10 bg-transparent p-3" />

          <div className="mt-6 flex items-center gap-4">
            <button disabled={loading} type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md">{loading? 'Sending...':'Send message'}</button>
            <div className="text-sm text-slate-300">Or reach us via <a className="text-cyan-300 hover:underline" href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noreferrer">WhatsApp</a></div>
          </div>

          {success && <div className="mt-4 text-sm text-cyan-300">Thanks — we'll be in touch shortly.</div>}
        </motion.form>
      </div>
    </section>
  );
}
