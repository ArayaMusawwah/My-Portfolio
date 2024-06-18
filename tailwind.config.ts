/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate"
import daisyui from "daisyui"
import tailwindTypography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

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
        },
        floating: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradiate: "animatedgradient 3s ease alternate infinite",
        spin2: "backgroundSpin 3s linear infinite",
        floating: "floating 3s ease-in-out infinite"
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [
    daisyui,
    tailwindTypography,
    tailwindcssAnimate,
    addVariablesForColors
  ]
}

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars
  })
}
