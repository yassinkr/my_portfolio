/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {

    extend: {
      fontFamily: {
        bebas: ['Bebas Neue'],
        // Add more custom font families here if needed
      },
      fontSize: {
        '7xl': '65px',
        '29': '29px',
        '83': '83px'
        // Define more custom font sizes as needed
      },
      colors: {
        black:{
          400: "#434343"
        },
        yellow:{
          400: "#FF9900",
          200: "#FFCD81"
        },
        red:{
          400: "#FF003D",
          200: "#FF6E91"
        },
        blue: {
          500: '#5364FF',
          400: '#0085FF',
          200 :"#6FBAFF"
          // Define more shades of blue or other custom colors if needed
        },
      },
    },
  },
  plugins: [],
}

