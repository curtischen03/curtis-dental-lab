/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure Tailwind processes your files
  ],
  theme: {
    extend: {
      colors: {
        lightblue: {
          500: '#B2FFFF',  // Customize this value to your preferred shade of light blue
        },
        lighterblue: {
          800: '#F0F8FF',
        }
      },
    },
  },
  plugins: [],
}
