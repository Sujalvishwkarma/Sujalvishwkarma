const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fade 1s ease-in-out infinite',
        rotate: 'rotate .25s linear infinite',
        rotaterev: 'rotate .25s linear infinite reverse',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade : {
          '0%,100%':{
            opacity : .5,
            transform : 'rotate(0deg)'
          },
          '50%' : {
            opacity : 1 ,
            transform : 'rotate(30deg)'
          }
        },
        rotate : {
          '0%':{
            transform : 'rotate(0deg)',
          },
          '100%' : {
            transform : 'rotate(180deg)'
          }
        }
      },
      spacing: {
        'delay-0': '0s',
        'delay-1': '0.5s',
        'delay-2': '1s'
      }
    },
  },
  plugins: [],
};
