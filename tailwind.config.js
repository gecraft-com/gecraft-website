const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '391px',
      },

      fontFamily: {
        sans: 'Be Vietnam Pro',
      },

      from: {
        first: 'rgb(210, 142, 160)',
        second: 'rgb(224, 121, 116)',
      },
    },
  },
  plugins: [nextui()],
}
