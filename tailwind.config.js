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
        },
        fadeout: {
          '0%': { opacity: 0.5 }
        },
        grow: {
          '0%': {
            transform: 'scale(0.3)',
            opacity: 0.5
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        shrink: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0)'
          }
        },
        from_left: {
          '0%': {
            width: '0px'
          },
          '100%': {
            width: '1.25rem'
          }
        }
      },
      animation: {
        blink: 'blink 1s infinite',
        fadeout: 'fadeout 0.3s linear',
        grow: 'grow 0.4s ease-in-out',
        shrink: 'shrink 0.4s ease-out',
        fromLeft: ' from_left 0.4s ease-out'
      }
    }
  },
  plugins: []
}
