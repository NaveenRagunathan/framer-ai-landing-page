/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elite-gold': '#D4AF37',
        'soft-black': '#121212',
        'dark-gray': '#2A2A2A',
        'light-gray': '#F5F5F5',
        'off-white': '#FAFAFA',
        'deep-navy': '#0F2E4C',
        'charcoal': '#333333',
        'muted-gold': '#E8D6A4',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      gradientColorStops: {
        'hero-start': '#FAFAFA',
        'hero-end': '#F0EAD6',
        'cta-start': '#D4AF37',
        'cta-end': '#BF9B30',
      },
    },
  },
  plugins: [],
}
