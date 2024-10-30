/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'DM ': ['DM Sans']
      },
      maxWidth:{
        headerContainer:"1320px"
      
      },
    },
  },
  plugins: [],
}

