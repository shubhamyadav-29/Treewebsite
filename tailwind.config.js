/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1180px",
    },
    extend: {},
    
    keyframes: {
      move:{
        "50%":{ transfrom: "translateY(-1rem)" }
      },
      rotate: {
        "0%":{ transfrom: "rotate(0deg)" },
        "100%":{ transfrom: "rotate(360deg)" },
      },
      scaleUp:{
        "0%":{ transfrom: "scale(0.8)" },
        "50%":{ transfrom: "scale(1.2)" },
        "100%":{ transfrom: "scale(0.8)" },
       
      }
    },
    animation:{
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "sacleUp 3s linear infinite",
    },
    
    fontFamily:{
       Jost:["Jost","sans-serif"],
       Lobster:["Lobster","sans-serif"],
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"12px",
        md:"32px"
      }
   
    },
    
  },
  plugins: [],
}

