/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        "alt-green": "rgba(197 248 42 / <alpha-value>)",
        "alt-grey": {
          700: "rgba(51 51 51 / <alpha-value>)",
          800: "rgba(31 31 31 / <alpha-value>)",
          900: "rgba(20 20 20 / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
