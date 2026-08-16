import type { Metadata } from 'next';
import { Playfair_Display, Poppins, Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SwastikCursorFollower from '../components/SwastikCursorFollower';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SR SERVICES | Premium Digital Solutions & Branding',
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
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${merriweather.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#050816] text-[#f8fafc] antialiased">
        <SwastikCursorFollower />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
