/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "orange-450": "#CB5207",
        "gray-450": "#808080",
      },
      screens: {
        "2sm": "380px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
