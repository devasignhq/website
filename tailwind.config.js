/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#fe891f',
        'brand-soft': '#2A1A05',
        'brand-deep': '#b85f10',
        coral: '#FF5D3D',
        amber: '#FFD43D',
        info: '#3DB4FF',
      },
      fontFamily: {
        display: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        body: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            textShadow: '0 0 5px rgba(254, 145, 31, 0.5)' 
          },
          '50%': { 
            opacity: '0.7',
            textShadow: '0 0 20px rgba(254, 145, 31, 1)' 
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
