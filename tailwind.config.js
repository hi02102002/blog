/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { withTV } = require('tailwind-variants/transformer');
module.exports = withTV({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        header: '3.75rem',
      },
      colors: {
        bg: 'var(--bg-body)',
        text: 'var(--text)',
        subtext: 'var(--subtext)',
        border: 'var(--border-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
});
