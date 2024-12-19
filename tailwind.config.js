/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        primary: "#6e7e22",
      },
      fontSize: {
        // xs: ['12px', '16px'],
      },
      backgroundImage: {
        // 'arrow-down': "url('/public/assets/images/icon-arrow-down.svg')",
        // 'report': "url('/public/assets/images/report.png')",
      },
      screens: {
        // xs: '375px',
        // '2xl': '1440px',
        // '3xl': '1536px',
        // => @media (min-width: 1440px) { ... }
      }
    },
  },
  plugins: [],
};
