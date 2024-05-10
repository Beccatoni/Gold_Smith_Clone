/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
       
      },
      backgroundImage:{
        'library':"url('/assets/Students-outside-the-CCA_19427-(1).jpg')",
        'scholarship': "url('/assets/Scholarship_homepage.jpg')",
        'vrLatham':"url('/assets/VRLatham_homepage.jpg')",
      }
    },
  },
  plugins: [],
}