const changeRemValue = (addBase, config) => {
  addBase({
    html: { fontSize: '20px' },
    body: { fontSize: config('theme.fontSize.base') }
  });
};

const baseFiveFontSize = {
  xs: '0.5rem',
  sm: '0.65rem',
  base: '0.75rem',
  md: '0.85rem',
  lg: '1rem',
  xl: '1.15rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  '4xl': '1.75rem',
  '5xl': '2.5rem',
  '6xl': '3.25rem'
};

const screenPatch = {
  '2xl': '1440px',
  '3xl': '1600px',
  '4xl': '1920px',
  '5xl': '2560px'
};

const spacingPatch = {
  '9': '2.25rem',
  '11': '2.75rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '17': '4.25rem',
  '18': '4.5rem',
  '19': '4.75rem',
  '21': '5.25rem',
  '22': '5.5rem',
  '23': '5.75rem',
  '25': '6.25rem',
  '26': '6.5rem',
  '27': '6.75rem',
  '28': '7rem',
  '29': '7.25rem',
  '30': '7.5rem',
  '31': '7.75rem',
  '33': '8.25rem',
  '34': '8.5rem',
  '35': '8.75rem',
  '36': '9rem',
  '37': '9.25rem',
  '38': '9.5rem',
  '39': '9.75rem',
  '41': '10.25rem',
  '42': '10.5rem',
  '43': '10.75rem',
  '44': '11rem',
  '45': '11.25rem',
  '46': '11.5rem',
  '47': '11.75rem',
  '49': '12.25rem',
  '50': '12.5rem',
  '51': '12.75rem',
  '52': '13rem',
  '53': '13.25rem',
  '54': '13.5rem',
  '55': '13.75rem',
  '57': '14.25rem',
  '58': '14.5rem',
  '59': '14.75rem',
  '60': '15rem',
  '61': '15.25rem',
  '62': '15.5rem',
  '63': '15.75rem',
  '65': '16.25rem',
  '66': '16.5rem',
  '67': '16.75rem',
  '68': '17rem',
  '69': '17.25rem',
  '70': '17.5rem',
  '71': '17.75rem',
  '72': '18rem',
  '73': '18.25rem',
  '74': '18.5rem',
  '75': '18.75rem',
  '76': '19rem',
  '77': '19.25rem',
  '78': '19.5rem',
  '79': '19.75rem',
  '80': '20rem',
  '81': '20.25rem',
  '82': '20.5rem',
  '83': '20.75rem',
  '84': '21rem',
  '85': '21.25rem',
  '86': '21.5rem',
  '87': '21.75rem',
  '88': '22rem',
  '89': '22.25rem',
  '90': '22.5rem',
  '91': '22.75rem',
  '92': '23rem',
  '93': '23.25rem',
  '94': '23.5rem',
  '95': '23.75rem',
  '96': '24rem',
  '97': '24.25rem',
  '98': '24.5rem',
  '99': '24.75rem',
  '100': '25rem'
};

const maxWidthPatch = {
  '7xl': '80rem',
  '8xl': '85rem',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%'
};

const gridPatch = {
  // align-content
  '.align-content-start': { 'align-content': 'start' },
  '.align-content-end': { 'align-content': 'end' },
  '.align-content-center': { 'align-content': 'center' },
  '.align-content-stretch': { 'align-content': 'stretch' },
  '.align-content-between': { 'align-content': 'space-between' },
  '.align-content-around': { 'align-content': 'space-around' },
  '.align-content-evenly': { 'align-content': 'space-evenly' },
  // place-content
  '.place-content-start': { 'place-content': 'start' },
  '.place-content-end': { 'place-content': 'end' },
  '.place-content-center': { 'place-content': 'center' },
  '.place-content-stretch': { 'place-content': 'stretch' },
  '.place-content-between': { 'place-content': 'space-between' },
  '.place-content-around': { 'place-content': 'space-around' },
  '.place-content-evenly': { 'place-content': 'space-evenly' },
  // justify-items
  '.justify-items-start': { 'justify-items': 'start' },
  '.justify-items-end': { 'justify-items': 'end' },
  '.justify-items-center': { 'justify-items': 'center' },
  '.justify-items-stretch': { 'justify-items': 'stretch' },
  // place-items
  '.place-items-start': { 'place-items': 'start' },
  '.place-items-end': { 'place-items': 'end' },
  '.place-items-center': { 'place-items': 'center' },
  '.place-items-stretch': { 'place-items': 'stretch' },
  // justify-self
  '.justify-self-start': { 'justify-self': 'start' },
  '.justify-self-end': { 'justify-self': 'end' },
  '.justify-self-center': { 'justify-self': 'center' },
  '.justify-self-stretch': { 'justify-self': 'stretch' },
  // place-self
  '.place-self-start': { 'place-self': 'start' },
  '.place-self-end': { 'place-self': 'end' },
  '.place-self-center': { 'place-self': 'center' },
  '.place-self-stretch': { 'place-self': 'stretch' }
};

const sourceWireframeKit = {
  fontSize: {
    xxs: '0.5rem',
    xs: '0.65rem',
    sm: '0.75rem',
    base: '0.75rem',
    md: '0.85rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    h7: '0.65rem',
    h6: '1rem',
    h5: '2.5rem',
    h4: '1.75rem',
    h3: '2.25rem',
    h2: '3.25rem',
    h1: '3.5rem',
    hero: '4.75rem'
  }
};

module.exports = {
  changeRemValue,
  baseFiveFontSize,
  screenPatch,
  spacingPatch,
  maxWidthPatch,
  gridPatch,
  sourceWireframeKit
};
