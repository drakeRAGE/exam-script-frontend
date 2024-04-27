/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js.tsx,ts}'],
  theme: {
    extend: {
      screens: {
        max950: { max: '950px' },
        max980: { max: '980px' },
        max850: { max: '850px' },
        min536: { min: '536px' },
        min800: { min: '800px' },
        min1050: { min: '1050px' },
        max1008: { max: '1008px' },
        max478: { max: '478px' },
        max450: { max: '450px' },
        max406: { max: '406px' },

        max500: { max: '500px ' },
        max550: { max: '550px ' },
        max600: { max: '600px' },
        max670: { max: '670px' },
        max767: { max: '767px' },
        min600: { min: '600px' },
        max1050: { max: '1050px' },
        min1150: { min: '1150px' },
        max1250: { max: '1250px' },
        max1320: { max: '1320px' },
        max1920: { max: '1920px' },
        max1078: { max: '1078px' },
        max1300: { max: '1300px' },
        max800: { max: '800px' },
        max536: { max: '536px' },
        max375: { max: '375px' },
        max1414: { max: '1414px' },
        xs: '1000px',
      },
      colors: {
        white: '#fff',
        black: '#000',
        gray: {
          100: '#101d34',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(255, 255, 255, 0.5)',
        },
        steelblue: '#404e7c',
        darkslategray: '#282c4b',
        gainsboro: '#e5d8d8',
        dimgray: '#585858',
        darkgray: '#a9a9a9',
        darkseagreen: {
          100: '#86cb92',
          200: '#71b48d',
          300: 'rgba(113, 180, 141, 0.22)',
        },
        indianred: '#dd5471',
        darkslateblue: { 100: '#3e54ac', 200: 'rgba(62, 84, 172, 0.28)' },
        mediumslateblue: 'rgba(52, 90, 243, 0.11)',
      },
      fontFamily: {
        poppins: 'Poppins',
        russo: 'Russo One',
        oxygen: 'Oxygen',
        'bebas-neue': "'Bebas Neue'",
        gidugu: 'Gidugu',
        ubuntu: 'Ubuntu',
        montserrat: 'Montserrat',
        'noto-serif-tamil-slanted': "'Noto Serif Tamil Slanted'",
        inter: 'Inter',
        federo: 'Federo',
      },
      borderRadius: {
        '301xl': '320px',
        '30xl': '49px',
        '6xl': '25px',
        '11xl': '30px',
        '13xl': '32px',
        '3xs': '10px',
        '81xl': '100px',
        '981xl': '1000px',
        lg: '18px',
        '10xl': '29px',
        '3xl': '22px',
        '112xl': '131px',
      },
    },
    fontSize: {
      xs: '0.75rem',
      xl: '1.25rem',
      base: '1rem',
      '36xl': '3.44rem',
      '17xl': '2.25rem',
      '53xl': '4.5rem',
      '15xl': '2.13rem',
      '4xl': '1.44rem',
      '38xl': '3.56rem',
      mini: '0.94rem',
      '2xl': '1.31rem',
      '33xl': '3.25rem',
      '5xl': '1.5rem',
      '63xl': '5.13rem',
      '3xl': '1.38rem',
      '31xl': '3.13rem',
      '11xl': '1.88rem',
      '51xl': '4.38rem',
      '7xl': '1.63rem',
      smi: '0.81rem',
      '61xl': '5rem',
      '13xl': '2rem',
      lg: '1.13rem',
      lgi: '1.19rem',
      '37xl': '3.5rem',
      sm: '0.88rem',
      '3xs': '0.63rem',
      '9xl': '1.75rem',
      '21xl': '2.5rem',
      '77xl': '6rem',
      mid: '1.06rem',
      '18xl': '2.31rem',
      '107xl': '7.88rem',
    },
  },
  plugins: [],
}
