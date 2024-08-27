/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        primary: '',

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

        //conact
        conTxtColor: '#564100',
        contactInputBorder: '#F2D26D'
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

