/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: {
          primary1: '#f0f2f5',
          secondary: '#efeae2'
        },
        dark : {
          primary1: '#202c33',
          primary2: '#111b21',
          secondary: '#0b141a'
        },
        green_dark: '#005c4b',
        green_light: '#d9fdd3'
      }
    },
  },
  plugins: [],
}
