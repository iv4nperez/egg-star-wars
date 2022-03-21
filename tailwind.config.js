module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      publicSans: ["Public Sans"],
    },
    extend: {
      screens: {
        'sm-h': {'raw': '(max-height: 560px)'}
      }
    },

  },
  plugins: [],
}
