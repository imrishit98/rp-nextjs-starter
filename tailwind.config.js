/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#00455F',
        cobalt: '#115C89',
        teal: '#00EBF4',
        cyan: '#00AEEF',
        'light-blue': '#D6EBF4',
        'cool-grey': '#EBF3F9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
