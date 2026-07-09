/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-neon': '#3B82F6',
        'blue-dark': '#1D4ED8',
        'blue-glow': 'rgba(59,130,246,0.35)',
        'bg-primary': '#030712',
        'bg-secondary': '#070d1e',
        'bg-card': 'rgba(10,25,47,0.45)',
        'glass': 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #60A5FA 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #030712 0%, #070d1e 50%, #030712 100%)',
      },
      boxShadow: {
        'glow': '0 0 25px rgba(59,130,246,0.35)',
        'glow-lg': '0 0 50px rgba(59,130,246,0.25)',
        'card': '0 10px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'aurora': 'aurora 20s ease infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'blink': 'blink 0.8s infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59,130,246,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.6)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
