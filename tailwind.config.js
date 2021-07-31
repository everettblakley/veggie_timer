const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js}"],
    safelist: [
      "bg-times-15",
      "bg-times-20",
      "bg-times-25",
      "bg-times-30",
      "bg-times-35",
      "bg-times-40",
      "bg-times-45",
      "bg-times-60",
      "bg-times-90",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        times: {
          15: "#64AC94",
          20: "#A1AB4B",
          25: "#FEAD4B",
          30: "#E16424",
          35: "#A05B3A",
          40: "#56362B",
          45: "#9B1D28",
          60: "#AE3271",
          90: "#602042",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
