const { nextui, button } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bgHeader: '#EBEBEB',
      basic: '#1A1A1A',
      buttonGroup: '#AFAFAF4D',
      buttonHover: '#BEE0FF',
      ourServicesBtn: '#C3C3C3',
    },
    extend: {
      screens: {
        sm: '391px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },
    },
  },
  plugins: [nextui()],
}
