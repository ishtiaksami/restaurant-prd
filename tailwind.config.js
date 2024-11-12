/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        siteWidth: "1320px",
      },

      colors: {
        navy: "#0A1425",
        yellow: "#FEBF00",
        red: "#B52B1D",
        dark: "#181818",
      },

      backgroundColor: {
        bgColor: "#FBF7F2",
      },

      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      spacing: {
        30: "30px",
      },
      textColor: {
        red: "#BD1F17",
      },

      fontSize: {
        40: "40px",
        62: "62px",
        52: "52px",
        120: "120px",
      },
    },
  },
  plugins: [],
};
