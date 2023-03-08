/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavanderBLush: '#F7EBEC',
        redCrayola: '#F02457',
        roseQuartz: '#AC9FBB',
        raisingBlack: '#1D1E2C',
      }
    },
  },
  plugins: [],
}
