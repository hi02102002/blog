/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { withTV } = require('tailwind-variants/transformer');
const plugin = require('tailwindcss/plugin');
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
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        marquee: 'marquee 2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({});
      addComponents({});
      addUtilities({
        '.abs-center': {
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          left: '50%',
          top: '50%',
        },
      });
    }),
  ],
});
