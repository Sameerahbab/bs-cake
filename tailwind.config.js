/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center:true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem'
        }
      },
      colors:{
        "primary-color":"#F7418F",
        "primary-color-dark":"#FC819E",
        "secondary-color-light":"#FEC7B4",
        "off-white":"#FFF3C7",
      },
    },
  },
  plugins: [],
}

