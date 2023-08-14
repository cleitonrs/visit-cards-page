import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} **/
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter']
    },
    extend: {
      animation: {
        'spinSlow': 'spin .5s linear infinite'
      },
      keyframes: {
        spinSlow: {
          '0%, 100%': { transform: 'rotate(360deg)'},
        },
      },
    },
  },
  plugins: [],
}

