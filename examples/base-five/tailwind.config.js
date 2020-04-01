const plugin = require('tailwindcss/plugin');
const {
  changeRemValue,
  baseFiveFontSize,
  screenPatch,
  spacingPatch,
  maxWidthPatch,
  gridPatch,
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
    plugin(function ({ addBase, addUtilities, config }) {
      changeRemValue(addBase, config);
      addUtilities(gridPatch);
    }),
  ],
};
