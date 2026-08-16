/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 20px 90px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.14), transparent 24%)',
      },
    },
  },
  plugins: [],
};
