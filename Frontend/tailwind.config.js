/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
    
     colors:{
      blue2:"#000066",
      DrakPurple:"#660066",
      purple:"#9900CC",
      Darkblue:"#000099",
      blue:"#0033CC",
      red:"#ff0000",
      Pink:"#CC00CC",
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow:{
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 100px 2000px 150px rgba(240, 169, 79, 0.5)",
        pinkMediumShadow:"10px 10px 2000px 200px rgba(255, 105, 180, 0.5)",
        RedMedianshadow:"10px 10px 2000px 200px rgba(255,0,0,0.5)",
        BlueMedianshadow:"10px 10px 2000px 200px rgba(0,0,139,0.7)",
      }
    },
    fontFamily :{
      body: ["prabodha Jayawardhana"],
      special: ["Roboto"],
    }
  },
  plugins: [],
}

