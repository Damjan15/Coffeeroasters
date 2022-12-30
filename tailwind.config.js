/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "#0E8784",
        darkGreyBlue: "#333D4B",
        paleOrange: "#FDD6BA",
        lightCream: "#FEFCF7",
        grey: "#83888F"
      },
      fontFamily: {
        "fraunces": ['Fraunces', 'serif'],
        "barlow": ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}
