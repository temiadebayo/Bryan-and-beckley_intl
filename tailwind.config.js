const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ], 
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          trueGray: colors.neutral,
        },
      },
    },
  plugins: [],
}
