/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      backgroundImage: {
        cityBg: "url(src/assets/background.png)",
      },
      colors: {
        gray: {
          400: "#202020",
          500: "#0e0e0e",
          600: "#131313",
        },
        red: {
          500: "#cd5c5c",
        },
      },
    },
  },
  plugins: [],
};
