module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'appear': 'appear 1s ease-out forwards',
        'slide-down': 'slide-down 300ms ease-out forwards'
      },
      keyframes: {
        appear: {
          '0%': {transform: 'translateY(3rem)'},
          '100%': {transform: 'translateY(0)'},
        },
        'slide-down': {
          '0%': {transform: 'translateY(-3rem)'},
          '100%': {transform: 'translateY(0)'}
        }
      },
      boxShadow: {
        heavy: '0 1px 18px 10px rgba(0, 0, 0, 0.25)',
      },
      inset: {
        '1/5-vh': '20vh',
        '2/5-vh': '40vh',
        '3/5-vh': '60vh',
        '4/5-vh': '80vh',
        '1/20': '5%',
        'calcLeft': 'calc(50% - 20rem)'
      },
      spacing: {
        '160': '40rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
