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
        'blue-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Add this line
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
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
