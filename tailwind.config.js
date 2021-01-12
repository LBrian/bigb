module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, var(--tw-grid-auto-fit-min))'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, var(--tw-grid-auto-fit-min))'
      }
    },
    colors: {
      black: '#282a36',
      white: '#f8f8f2',
      'blue-gray': '#6272a4',
      gray: '#44475a',
      'sky-blue': '#8be9fd',
      green: '#50fa7b',
      orange: '#ffb86c',
      pink: '#ff79c6',
      purple: '#bd93f9',
      red: '#ff5555',
      yellow: '#f1fa8c'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
