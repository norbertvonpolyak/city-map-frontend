/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmBg: "#f8f6f2",
        warmBorder: "#e7e2da",
        warmAccent: "#c6a27e",
      },
    },
  },
  plugins: [],
}