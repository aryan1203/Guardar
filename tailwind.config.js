/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Ensure this includes all folders where you use Tailwind
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
