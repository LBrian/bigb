module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: "#3887be",
      "blue-gray": "#1E293B",
      yellow: "#fbb03b",
      green: "#56b881",
      turquoi: "#41afa5",
      red: "#e55e5e",
      pink: "#ed6498",
      purple: "#8a8acb",
      gray: "#5d5c5d"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
