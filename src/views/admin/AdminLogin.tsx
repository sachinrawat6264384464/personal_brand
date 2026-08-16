'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firebaseEnabled } from '../../firebase';
import { useRouter } from 'next/navigation';

export default function AdminLogin(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const router = useRouter();

  const submit = async (e:React.FormEvent)=>{
    e.preventDefault();
    if (!firebaseEnabled || !auth) {
      // Fallback local admin mode when Firebase isn't configured
      localStorage.setItem('adminAuth', 'local');
      router.push('/admin/dashboard');
      return;
    }
    try{
      await signInWithEmailAndPassword(auth as any,email,password);
      // mark session so dashboard can accept this login
      localStorage.setItem('adminAuth', 'firebase');
      router.push('/admin/dashboard');
    }catch(err){
      alert('Login failed');
    }
  }

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-white/6 bg-slate-950/50 p-8 backdrop-blur-2xl">
        <h3 className="text-2xl font-semibold text-white mb-4">Admin Login</h3>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="mb-3 w-full rounded-lg border border-white/10 bg-transparent p-3" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="mb-3 w-full rounded-lg border border-white/10 bg-transparent p-3" />
        <div className="flex justify-end">
          <button className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 font-semibold text-slate-900">Sign in</button>
        </div>
        {!firebaseEnabled && (
          <p className="mt-4 text-sm text-yellow-300">Firebase not configured — using local admin mode (changes stored locally).</p>
        )}
      </form>
    </div>
  );
}
