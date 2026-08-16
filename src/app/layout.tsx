import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SwastikCursorFollower from '../components/SwastikCursorFollower';

export const metadata: Metadata = {
  title: 'R&S SERVICES | Premium Digital Solutions & Branding',
  description: 'We craft high-performance digital products and premium brand strategies that elevate ambitious founders and enterprises.',
  keywords: ['Digital Services', 'Web Development', 'UI/UX Design', 'Personal Branding', 'SaaS Architecture'],
  authors: [{ name: 'Ritik & Sachin' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-[#f8fafc] antialiased">
        <SwastikCursorFollower />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
