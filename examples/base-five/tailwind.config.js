const plugin = require('tailwindcss/plugin');
const {
  changeRemValue,
  baseFiveFontSize,
  screenPatch,
  spacingPatch,
  maxWidthPatch,
} = require('@izznatsir/tailwind-patches');

module.exports = {
  theme: {
    fontSize: baseFiveFontSize,
    extend: {
      screens: screenPatch,
      spacing: spacingPatch,
      maxWidth: maxWidthPatch,
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase }) {
      changeRemValue(addBase);
    }),
  ],
};
