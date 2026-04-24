/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        bg: '#050505',
        surface: '#0d0d0d',
        border: '#1c1c1c',
        'border-strong': '#2e2e2e',
        text: '#f0ece4',
        'text-mid': 'rgba(240,236,228,0.55)',
        'text-dim': 'rgba(240,236,228,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '0.8', transform: 'scaleY(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
