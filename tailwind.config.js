/** @type {import('tailwindcss').Config} */

import { black, transparent, white } from 'tailwindcss/colors'

const { nextui, button } = require('@nextui-org/react')

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
        '357': '357px',
        sm: '391px',
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '900': '900px',
        '1076': '1076px',
        lg: '1133px',
        '1400': '1400px',
        '1500': '1500px',
        '1600': '1600px',
        '2xl': '1923px',
        '3xl': '2620px',
        '4xl': '3230px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },
    },
  },
  plugins: [nextui()],
}
