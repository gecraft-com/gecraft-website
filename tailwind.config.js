/** @type {import('tailwindcss').Config} */

import { black, green, red, transparent, white } from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white,
      black,
      red,
      green,
      transparent,
      bgHeader: '#EBEBEB',
      basic: '#1A1A1A',
      buttonGroup: '#AFAFAF4D',
      buttonHover: '#BEE0FF',
      ourServicesBtn: '#C3C3C3',
      cursor: '#1A1A1ACC',
      cursorHover: '#1A1A1A99',
    },
    extend: {
      screens: {
        sm: '391px',
        md: '769px',
        lg: '1134px',
        '1024': '1025px',
        '2xl': '1923px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },
      keyframes: {
        appear: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
    },
  },
}
