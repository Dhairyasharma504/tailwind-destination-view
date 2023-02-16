/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/room/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: "#efba6c",
        primary: "#364d59",
        secondary: "#ccc",
        darkShade: "#000",
        lightShade: "#ffffff",
      }),
      fontFamily: ({ theme }) => ({
        primary: "Raleway, sans-serif",
      }),
    },
  },
  plugins: [],
};
