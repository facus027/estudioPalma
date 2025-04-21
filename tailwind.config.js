/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
      'blueheader': '#282846',
      'ocre': "#d0ad6c",
      'graylight': "#f2f3ed",
      'whitelight': "#fcfcfe",
    },
    screens: {
      'xs': '480px',  // Nuevo punto de interrupción
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      cambria: ["Cambria", "serif"],
    },
    animation: {
      fadeIn: "fadeIn 5s ease-in-out",
      fadeIn2: "fadeIn 9s ease-in-out",
      fadeInLogo: "fadeIn2 12s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "50%": { opacity: "2" },
        "75%": { opacity: "3" },
        "100%": { opacity: "4" },
      },
      fadeIn2: {
        "0%": { opacity: "0" },
        "100%": { opacity: "4" },
      }
    },
    backgroundImage: {
      'hero-1': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto/v1744403235/Abogados/ybwq6hrfu0cvjxtaoxrb.png')",
      'hero-2': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto/v1744403235/Abogados/jelfsegsusfvbieg9k5a.png')",
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    keyframes: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
    transform: ['responsive', 'hover', 'group-hover'],
    scale:['responsive', 'hover', 'group-hover'],    
  },
  plugins: [],
}

