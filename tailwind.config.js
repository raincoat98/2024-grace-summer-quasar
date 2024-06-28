/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dongle: ["Dongle", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#EBE6F9",
          200: "#D7CFF3",
          300: "#C2B9ED",
          400: "#DFD8F1",
          500: "#744AEF",
          600: "#6338D1",
          700: "#5226B3",
          800: "#4114A5",
          900: "#8359FF",
        },
        black: {
          25: "#F7F7F7",
          50: "#F0F0F0",
          100: "#E0E0E0",
          200: "#DCDCDC",
          300: "#CCCCCC",
          400: "#BEBEBE",
          500: "#9C9C9C",
          600: "#888888",
          700: "#555555",
          800: "#333333",
          900: "#131313",
        },
      },
    },
  },
  plugins: [],
};
