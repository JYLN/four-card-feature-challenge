/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      red: "#EA5454",
      green: "#44D3D2",
      yellow: "#FCAE4A",
      blue: "#549EF2",
      white: "#FFFFFF",
      lotion: "#FAFAFA",
      primary: "#4D4F62",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
