/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: '#fca801',
        primary: '#57b8b6',
        secondary: '#346f9d',
        darkshade: '#3f1f38',
        lightshade: '#ffffff',
      }),
      fontFamily: ({ theme }) => ({
        primary: 'Roboto, sans-serif',
        secondary: 'Satisfy, cursive',
      }),
    },
  },
  plugins: [],
};
