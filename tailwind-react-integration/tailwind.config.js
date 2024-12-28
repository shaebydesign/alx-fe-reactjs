/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to match your file types
  ],
  darkMode: 'class', // Or 'media' if you prefer the system theme
  theme: {
    extend: {},
  },
  plugins: [],
};
