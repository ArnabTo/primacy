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
        btnBg: '#ffb703',

        //hero
        heroHeadline : '#ffb703',

        //services
        serviceTxtColor: '#ffb703',

        //about
        abtBgColor: '#FEF6ED',
        aboutTxtColor: '#ffb703',

        //conact
        conTxtColor: '#ffb703',
        contactInputBorder: '#ffb703'
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

