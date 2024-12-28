/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this points to the right files in your src folder
  ],
  darkMode: 'class', // You can set it to 'media' if you want automatic dark mode based on system preference
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
