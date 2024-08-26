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
        btnColor: '#1A265A'
      }
    },
  },
  plugins: [],
}

