/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/room/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: '#efba6c',
        primary: '#364d59',
        secondary: '#ccc',
        darkshade: '#000',
        lightshade: '#ffffff',
      }),
      fontFamily: ({ theme }) => ({
        primary: 'Raleway, sans-serif',
      }),
    },
  },
  plugins: [],
};
