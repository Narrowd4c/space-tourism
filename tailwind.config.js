/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '24px',
      center: true
    },
    extend: {
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif']
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}

