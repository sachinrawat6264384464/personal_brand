'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white p-6 text-center">
      <h1 className="text-5xl font-playfair font-800 text-rose-400 mb-4">Something went wrong!</h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="rounded-full border border-white/20 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/40 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
