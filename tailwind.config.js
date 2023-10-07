/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 49%': { background: 'rgba(255, 255, 255, 1)' },
          '50, 60%': { background: 'rgba(255, 255, 255, 0.5)' },
          '61%, 100%': { background: 'transparent' }
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      }
    }
  },
  plugins: []
}
