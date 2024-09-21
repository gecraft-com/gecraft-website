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
    },
    extend: {
      screens: {
        sm: '391px',

        '2xl': '1922px',
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
