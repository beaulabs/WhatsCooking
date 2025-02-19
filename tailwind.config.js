const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      transitionDuration: {
        'width': 'width'
       },
      colors: {
        fuchsia: colors.fuchsia,
        orange: colors.orange,
        teal: colors.teal,
        rose: colors.rose,'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
        'smoke-darker': 'rgba(0, 0, 0, 0.75)',
        'smoke-dark': 'rgba(0, 0, 0, 0.6)',
        'smoke': 'rgba(0, 0, 0, 0.5)',
        'smoke-light': 'rgba(0, 0, 0, 0.4)',
        'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
        'smoke-lightest': 'rgba(0, 0, 0, 0.1)',
        'mongo': {
          DEFAULT: '#13AA52',
          '50': '#ADF6CB',
          '100': '#96F3BD',
          '200': '#68EEA0',
          '300': '#3AE983',
          '400': '#18D868',
          '500': '#13AA52',
          '600': '#0E7C3C',
          '700': '#094E26',
          '800': '#042010',
          '900': '#000000'
        },
        'tolopea': {  
          DEFAULT: '#1A0145', 
          '50': '#7B30FC',  
          '100': '#6B16FC',  
          '200': '#5303DC',  
          '300': '#4002AA',  
          '400': '#2D0277',  
          '500': '#1A0145',  
          '600': '#070013',  
          '700': '#000000',  
          '800': '#000000',  
          '900': '#000000'
        },
        'deep-cerulean': {
          DEFAULT: '#007CAD',
          '50': '#94E1FF',
          '100': '#7AD9FF',
          '200': '#47CBFF',
          '300': '#14BCFF',
          '400': '#00A1E0',
          '500': '#007CAD',
          '600': '#00577A',
          '700': '#003347',
          '800': '#000E14',
          '900': '#000000'
        },
        'smoky': {
          DEFAULT: '#66507D',
          '50': '#D9D1E2',
          '100': '#CCC1D8',
          '200': '#B3A2C4',
          '300': '#9983B0',
          '400': '#7F649C',
          '500': '#66507D',
          '600': '#4D3C5E',
          '700': '#33283F',
          '800': '#1A1420',
          '900': '#000001'
        },
        'san-juan': {
          DEFAULT: '#2D5274',
          '50': '#A9C4DE',
          '100': '#97B8D6',
          '200': '#729FC8',
          '300': '#4D86BA',
          '400': '#3B6C99',
          '500': '#2D5274',
          '600': '#1F384F',
          '700': '#101E2B',
          '800': '#020406',
          '900': '#000000'
        },
        'night-shadz': {
          DEFAULT: '#A53060',
          '50': '#F0CBDA',
          '100': '#EAB7CC',
          '200': '#DF8FB0',
          '300': '#D36894',
          '400': '#C84078',
          '500': '#A53060',
          '600': '#7D2549',
          '700': '#561932',
          '800': '#2E0E1B',
          '900': '#070204'
        }
      },
      fontFamily:{
        body:['Raleway']
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus", "active"],
      transitionProperty: ["responsive", "hover", "focus", "active"],
      transitionDuration: ["hover", "focus", "active"],
      transitionTimingFunction: ['hover', "active", 'focus']
    },
  },
  plugins: [],
}
