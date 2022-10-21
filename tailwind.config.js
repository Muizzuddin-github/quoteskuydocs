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
        'rotate' : "putar 1.5s linear infinite",
        "muncul" : "tampil 1.5s linear forwards"
      },
      keyframes : {
        "putar" : {
          '0%' : {
            transform : "rotate(0)"
          },
          '100%' : {
            transform : "rotate(360deg)"
          }
        },
        "tampil" : {
          '0%' : {
            opacity : "0"
          },
          '100%' : {
            opacity : "1"
          }
        }
      }
    },
  },
  plugins: [],
}
