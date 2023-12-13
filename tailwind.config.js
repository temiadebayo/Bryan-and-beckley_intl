const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      //=> @media (min-width : 640px) {...}
      md: '768px',
      //=> @media (min-width : 640px) {...}
      lg: '1024px',
      //=> @media (min-width : 640px) {...}
      xl: '1280px',
      //=> @media (min-width : 640px) {...}
      '2xl': '1536px',
      //=> @media (min-width : 1536px) {...}
    },
   
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      width: {
        92: '368px',
      },
      minWidth: {
        92: '368px',
      },
    },
  },
  plugins: [],
};
