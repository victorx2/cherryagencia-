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
