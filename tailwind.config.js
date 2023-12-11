/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        striger: ['Striger', 'regular'],
        impact: ['Impact', 'regular'],
        poppins: ['Poppins', 'regular'],
        roboto: ['Roboto', 'regular'],
      },
      colors:{
        coal: '#0D0D0D',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}