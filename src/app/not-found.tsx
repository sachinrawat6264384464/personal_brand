import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white p-6 text-center">
      <h1 className="text-6xl font-playfair font-800 text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold font-playfair mb-2">Page Not Found</h2>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
