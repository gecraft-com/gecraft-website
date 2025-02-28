/** @type {import('tailwindcss').Config} */

import { black, green, red, transparent, white } from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white,
      black,
      red,
      green,
      transparent,
      primary: {
        100: '#F6F6F6',
        200: '#D1D1D1',
        300: '#888888',
        400: '#DAF1DE',
        500: '#25904A',
        550: '#3D3D3D',
        600: '#6D6D6D',
        650: '#55B272',
        700: '#1C6036',
        750: '#B0B0B0',
        800: '#237842',
        850: '#001D1F',
        900: '#E7E7E7',
        950: '#0B2315',
      },
    },
    extend: {
      fontFamily: {
        readexPro: ['Readex Pro', 'sans-serif'],
      },
      screens: {
        '1366': '1366px',
        '1440': '1440px',
        '1536': '1536px',
        '1680': '1680px',
        '2xl': '1920px',
        '3xl': '2000px',
        '4xl': '2500px',
      },
      keyframes: {
        emergence: {
          '0%': { opacity: '0', scale: '0.7' },
          '100%': { opacity: '1', scale: '1' },
        },
      },
      animation: {
        emergence: 'emergence 200ms ease',
      },
    },
  },
}
