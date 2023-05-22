const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f1f8fe',
          100: '#e3effb',
          200: '#c0e0f7',
          300: '#89c7f0',
          400: '#4aabe6',
          500: '#2290d5',
          600: '#1472b5',
          700: '#115b93',
          800: '#134f79',
          900: '#16456a',
          950: '#0e2a43',
        },
        'light-blue': {
          50: '#f2f8fd',
          100: '#e5eff9',
          200: '#c4dff3',
          300: '#90c4e9',
          400: '#479fd8',
          500: '#2f8bc8',
          600: '#206ea9',
          700: '#1b5989',
          800: '#1a4b72',
          900: '#1b405f',
          950: '#12293f',
        },
      },
      fontFamily: {
        sans: ['Roboto Flex', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
