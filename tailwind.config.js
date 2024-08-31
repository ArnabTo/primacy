/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
 
        primary: '#F2D26D',

        bgColor : '#FEF6ED',

        textColor: '#3D3D3D',
        btnBg: '#F2D26D',

        //hero
        heroHeadline : '#F2D26D',

        //services
        serviceTxtColor: '#F2D26D',

        //about
        abtBgColor: '#FEF6ED',
        aboutTxtColor: '#F2D26D',

        //blogs
        blogHeadTxt: '#F2D26D',
        blogCardBg: '#FEF6ED',
        
        //conact
        conTxtColor: '#f2d26d',
        contactInputBorder: '#F2D26D'
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        tinos: ['Tinos', 'sans'],
      },
    },
  },
  plugins: [],
}

