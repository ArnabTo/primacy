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
       
        btnColor: '#1A265A',



        textColor: '#3D3D3D',
        bgClr: '#ffffff',
        btnBg: '#F2D26D',

        //hero
        heroHeadline : '#F2D26D',

        //services
        serviceTxtColor: '#F2D26D'
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'], // Adding Bodoni Moda as a custom font
      },
    },
  },
  plugins: [],
}

