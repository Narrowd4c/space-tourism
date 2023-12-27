/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "24px",
      center: true
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"]
      },
      colors: {
        secondary: '#D0D6F9',
      },
      animation: {
        "custom-ping": "shadow 1.5s ease-in-out infinite"
      },
      keyframes: {
        shadow: {
          "0%, 30%": { "box-shadow": "0px 0px 0px 0px rgba(255, 255,255, 0.1)" },
          "20%": { "box-shadow": "0px 0px 0px 6px rgba(255, 255,255, 0.2)" },
          "50%": { "box-shadow": "0px 0px 0px 10px rgba(255, 255,255, 0.4)" }
        }
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};
