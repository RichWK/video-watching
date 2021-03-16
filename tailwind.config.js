module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [ 'Lato', 'ui-sans-serif', 'system-ui', 'sans-serif' ],
      'serif': [ 'Merriweather', 'ui-serif', 'serif' ]
    },
    extend: {
      colors: {
        'rebgv-green': '#1fad58',
        'rebgv-pale-green': '#e7fff0',
        'rebgv-yellow': '#f8e729',
        'rebgv-gray': '#465451'
      },
      screens: {
        'xs': '500px',
        'xxl': '1440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

