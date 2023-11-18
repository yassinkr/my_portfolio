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
        '42': '42px',
        '29': '29px',
        '83': '83px'
        // Define more custom font sizes as needed
      },
      colors: {
        grey:{
          400: "#E7E7E7"
        },
        black:{
          400: "#434343"
        },
        yellow:{
          400: "#FF9900",
          300:"#FFCD81",
          200: "#FFCD81"
        },
        red:{
          400: "#FF003D",
          300:"#FF0F49",
          200: "#FF4B76"
        },
        blue: {
          500: '#5364FF',
          400: '#0085FF',
          300:"#1C92FF",
          200 :"#6FBAFF"
          // Define more shades of blue or other custom colors if needed
        },
      },
    },
  },
  plugins: [],
}

