/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // adjusted to match `logo.png` colors
        comandoRed: '#E21B23',
        comandoYellow: '#FFD200',
        comandoBlack: '#000000'
      }
    }
  },
  plugins: []
}
