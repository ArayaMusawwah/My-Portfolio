/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate"
import daisyui from "daisyui"
import tailwindTypography from "@tailwindcss/typography"
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradiate: "animatedgradient 3s ease alternate infinite",
        spin2: "backgroundSpin 3s linear infinite"
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [daisyui, tailwindTypography, tailwindcssAnimate]
}
