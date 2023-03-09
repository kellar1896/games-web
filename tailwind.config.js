/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavanderBlush: 'rgb(var(--lavander-blush))',
        redCrayola: 'rgb(var(--red-crayola))',
        roseQuartz: 'rgb(var(--rose-quartz))',
        raisingBlack: 'rgb(var(--raising-black))',
      }
    },
  },
  plugins: [],
}
