/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'shine-green': '#65f003',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
