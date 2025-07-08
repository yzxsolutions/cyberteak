// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,jsx,mjs}', // Updated for .jsx and .mjs
  './pages/**/*.{js,jsx,mjs}', // Updated for .jsx and .mjs
  './components/**/*.{js,jsx,mjs}', // Updated for .jsx and .mjs
  './src/**/*.{js,jsx,mjs}', // Updated for .jsx and .mjs
];
export const theme = {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Example for Inter font
    },
    animation: {
        'spin-slow': 'spin 6s linear infinite',
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(-50%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
  },
};
export const plugins = [];