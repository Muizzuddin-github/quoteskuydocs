/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors : {
        'abu-abu' : "#eee",
        "abu" : "#aeaeae"
      },
      animation : {
        'rotate' : "putar 1.5s linear infinite"
      },
      keyframes : {
        "putar" : {
          '0%' : {
            transform : "rotate(0)"
          },
          '100%' : {
            transform : "rotate(360deg)"
          }
        }
      }
    },
  },
  plugins: [],
}
