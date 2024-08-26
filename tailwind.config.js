/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor : '#FEF6ED',
        primaryColor : '#9DBA94',
        secondaryColor : '#AFAFAF',
        textColor: '#3D3D3D',
        btnColor: '#1A265A',



        textClr: '#00000',
        bgClr: '#ffffff',
        btnBg: '#01DC71',

        //hero
        heroHeadline : '#01DC71',
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'], // Adding Bodoni Moda as a custom font
      },
    },
  },
  plugins: [],
}

