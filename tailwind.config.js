/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens : {
      "sm" : "576px",
      "md" : "768px",
      "lg" : "992px",
      "xl" : "1200px",
      "2xl" : "1300px",
      "3xl" : "1550px"
    },
    container : {
      center: true,
      padding: "0.75rem"
    },
    extend: {
      colors: {
        about: {
          DEFAULT: "rgb(13, 24, 32)"
        },
        offer: {
          DEFAULT: "#F5F7FB"
        }
      },
      fontFamily : {
        "Dana-reg" : "Dana Reg",
        "Dana-med" : "Dana Med",
        "Dana-bold" : "Dana Bold"
      }
    },
  },

  plugins: [
    function({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    },
    function ({ addComponents }) {
      addComponents({
        '.container-fluid': {
            width: '100%',
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          '@screen sm': {
            paddingLeft: "2.3rem",
            paddingRight: "2.3rem"
          },
          '@screen lg': {
            paddingLeft: "1.875rem",
            paddingRight: "1.875rem"
          },
          '@screen 3xl': {
            paddingLeft: "6.25rem",
            paddingRight: "6.25rem"
          },
        }
      })
    }
  ],
}

