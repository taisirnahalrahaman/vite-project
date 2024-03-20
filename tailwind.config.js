/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        container:"1600px",
      },
      backgroundImage:{
        Banner: "url('./src/assets/images/Homepage/banner.png')",
      }
    },
  },
  plugins: [],
}

