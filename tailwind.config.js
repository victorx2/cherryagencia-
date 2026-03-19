/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cherry-red': '#800020',
        'cherry-dark': '#600018',
        'cherry-light': '#a3324d',
        'cherry-gold': '#D4AF37',
        'cream-white': '#fdfcfa',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cherry-gradient': 'linear-gradient(135deg, #600018 0%, #800020 100%)',
        'cherry-gradient-soft': 'linear-gradient(135deg, rgba(96,0,24,0.06) 0%, rgba(128,0,32,0.12) 100%)',
        'section-cherry': 'linear-gradient(180deg, #fdf8f9 0%, #fceef1 35%, #fae5ea 70%, #f8dce3 100%)',
        'hero-dark': 'linear-gradient(105deg, #500014 0%, #450012 25%, #2d000c 50%, #1a0008 75%, #0a0a0a 100%)',
        'hero-dark-radial': 'radial-gradient(ellipse 100% 80% at 20% 50%, rgba(80,0,20,0.4) 0%, transparent 55%)',
      },
      boxShadow: {
        'soft': '0 25px 50px -12px rgba(128, 0, 32, 0.08)',
        'soft-lg': '0 32px 64px -12px rgba(128, 0, 32, 0.12)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
