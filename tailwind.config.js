module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
