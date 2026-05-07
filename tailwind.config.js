/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0a1026',
        border: 'rgba(255, 255, 255, 0.12)',
        text: '#e6ecff',
        muted: '#91a0c6',
        neon: {
          blue: '#38bdf8',
          purple: '#8b5cf6',
          pink: '#d946ef',
          cyan: '#22d3ee',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.18), 0 0 60px rgba(139, 92, 246, 0.16)',
        card: '0 20px 60px rgba(3, 8, 24, 0.45)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at center, rgba(56, 189, 248, 0.12) 0, transparent 42%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'hero-grid': 'auto, 80px 80px, 80px 80px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.72', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        drift: {
          '0%': { transform: 'translate3d(-20px, -12px, 0) scale(1)' },
          '100%': { transform: 'translate3d(28px, 22px, 0) scale(1.16)' },
        },
      },
    },
  },
  plugins: [],
};

