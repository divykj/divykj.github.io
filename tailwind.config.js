const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "helpers/**/*.{js,ts,jsx,tsx}",
    "constants/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors,
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["hover", "focus"],
    },
  },
  plugins: [],
};
