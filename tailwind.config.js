/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      Source: ["Source Sans Pro"],
    },
    extend: {
      fontFamily: {
        titilium: "Titillium Web",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
