/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      screens: {
        'sm-md': '640px', // Custom breakpoint between sm and md
      },
    },
  },  darkMode: "class",
  plugins: [nextui()]
}

