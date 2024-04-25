/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import tailwindTypography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradiate: "animatedgradient 3s ease alternate infinite"
      }
    }
  },
  plugins: [daisyui, tailwindTypography]
}
