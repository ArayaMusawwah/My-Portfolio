/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradiate: "animatedgradient 3s ease alternate infinite"
      }
    }
  },
  plugins: []
}
