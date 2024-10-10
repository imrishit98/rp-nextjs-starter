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
        red: {
          r900: '#05515D',
          r800: '#1F2A37',
          r700: '#374151',
          r600: '#4B5563',
          500: '#6B7280',
          r400: '#9CA3AF',
          r300: '#D1D5DB',
          // r200: '#6B6F7C',
          r100: '#C1C5D2',
          r50: '#EBECF0',
        },
        orange: {
          or900: '#05515D',
          or800: '#1F2A37',
          or700: '#374151',
          or600: '#4B5563',
          or500: '#6B7280',
          or400: '#9CA3AF',
          or300: '#D1D5DB',
          or200: '#6B6F7C',
          or100: '#C1C5D2',
          or50: '#EBECF0',
        },
        'deep-blue': '#00455F',
        cobalt: '#115C89',
        teal: '#00EBF4',
        cyan: '#00AEEF',
        'light-blue': '#D6EBF4',
        'cool-grey': '#EBF3F9',

        'red-dark': '#9CA3AF', // can't read it
      },

      backgroundImage: {
        noise: "url('/images/bg-noise.webp')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /(bg|text)/,
    },
  ],
};
