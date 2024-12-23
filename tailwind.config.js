/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' }
        },
        'pulse-red': {
          '0%': { transform: 'scale(1)', backgroundColor: 'rgb(254 202 202)', opacity: '0.7' },
          '50%': { transform: 'scale(1.5)', backgroundColor: 'rgb(254 202 202)', opacity: '0.2' },
          '100%': { transform: 'scale(1.8)', backgroundColor: 'rgb(254 202 202)', opacity: '0' }
        },
        'pulse-green': {
          '0%': { transform: 'scale(1)', backgroundColor: 'rgb(187 247 208)', opacity: '0.7' },
          '50%': { transform: 'scale(1.5)', backgroundColor: 'rgb(187 247 208)', opacity: '0.2' },
          '100%': { transform: 'scale(1.8)', backgroundColor: 'rgb(187 247 208)', opacity: '0' }
        }
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'pulse-red': 'pulse-red 1s ease-out forwards',
        'pulse-green': 'pulse-green 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}

