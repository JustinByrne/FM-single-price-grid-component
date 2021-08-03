module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        bYellow: 'hsl(71, 73%, 54%)',
        lGray: 'hsl(204, 43%, 93%)',
        gBlue: 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        karla: 'Karla, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
