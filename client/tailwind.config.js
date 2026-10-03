/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        logo: ["Courgette", "cursive"],
      },
      colors: {
        ink: { 950: "#100c0a", 900: "#17120f", 800: "#211a16", 700: "#2e2520" },
      },
    },
  },
  plugins: [],
};
