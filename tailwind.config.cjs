/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit-regular", "sans-serif"],
        outfitLight: ["outfit-light", "sans-serif"],
        outfitMedium: ["outfit-medium", "sans-serif"],
      },
      fontSize: {
        headingLg: "2rem",
        headingMd: "1.5rem",
        headingSm: "1.5rem",
        headingXs: "1.125px",
        bodyMd: "0.9735",
        bodySm: "0.8125",
      },
    },
    colors: {
      red: "#FC4747",
      darkBlue: "#10141E",
      greyishBlue: "#5A698F",
      semiDarkBlue: "#161D2F",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
