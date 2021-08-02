module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'appear': '1s ease-out forwards'
      },
      keyframes: {
        appear: {
          '0%': {transform: 'translateY(3rem)'},
          '100%': {transform: 'translateY(0)'},
        }
      },
      boxShadow: {
        heavy: '0 1px 18px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
