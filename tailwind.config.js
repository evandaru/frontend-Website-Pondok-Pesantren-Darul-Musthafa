/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        'brwn': "#9A693B",
        'coklattua': "#DB9E30",
        'coklatmuda': '#D9CBBD'
      }
    },
  },
  plugins: [],
}

