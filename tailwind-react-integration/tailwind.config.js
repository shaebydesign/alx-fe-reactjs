/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // This ensures Tailwind looks at your JSX/TSX/HTML files
  ],
  darkMode: 'class', // Use 'media' if you prefer automatic dark mode based on system preferences
  theme: {
    extend: {},
  },
  plugins: [],
};
