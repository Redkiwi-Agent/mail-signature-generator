/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E30613'
        }
      }
    },
  },
  plugins: [],
}

