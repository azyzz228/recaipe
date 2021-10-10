module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lufga: 'Lufga-regular'
      },
      colors: {
        'bGreen': '#45D0B5',
        'bBlue': '#B680D0',
        'bgoogle': '#3984A4',
        'rpink': '#FFF1DF',
        'cgreen': '#6F924C',
        'scrollBackground': '#FDF6EB'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
