/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futurabold: ['Futura XBlk BT'],
        futura: ['Futura']
      },
      colors: {
        'primary': "#E2E2B6",
        'secondary': "#021526",
        'extra': "#F39F5A"
      },
    },
  },
  plugins: [],
}