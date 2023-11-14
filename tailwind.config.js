/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A0C49D',
        secondary: '#C4D7B2',
        third: '#E1ECC8',
        fourth: '#F7FFE5',
        black: '#101010',
        white: '#F6F6F6',
      },
      fontFamily: {
        josef: 'Josefin Sans',
      },
      keyframes: {
        //Our fall animation keyframes
        fall: {
          '0%': { transform: 'translate(0%,-150%)' },
          '100%': { transform: 'translate(0%,0%)' },
        },
        up: {
          '0%': { transform: 'translate(0%,0%)' },
          '100%': { transform: 'translate(0%,-150%)' },
        },
      },

      animation: {
        // You can then reference these keyframes by name in the
        // animation section of your theme configuration
        fall: 'fall 1s ease',
        up: 'up 1s ease',
        // animation shorthand CSS property i.e
        // animation-name | animation-duration | animation-timing-function
        // animation-iteration-count
      },
    },
  },
  plugins: [],
};
