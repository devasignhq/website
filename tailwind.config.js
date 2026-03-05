/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
