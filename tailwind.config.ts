/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        adbg: "url('/background/adbg.png')",
        authbg: "url('/background/authbg.png')",
        herobg: "url('/background/svg/hero.svg')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        grey: {
          DEFAULT: "#636978",
          100: "#F6F6F6",
          200: "#F4F4F4",
          300: "#E6ECF5",
          400: "#F7F7F7",
          500: "#F0F0F0",
          600: "#F0F0F0",
          700: "#F7F8FA",
          800: "#55575A",
          900: "#E2E6EA",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#F1F9FF",
          200: "#EEF0F2",
          300: "#2A87FF",
          400: "#1877F2",
          500: "#2964CC",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          100: "#DFDFDF",
          200: "#DFE0EB",
          300: "#B0B8C1",
          400: "#FFEDAD",
          600: "#98A2B3",
          700: "#7D6406",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          100: "#E4E7EB",
          200: "#828589",
          300: "#6D7177",
          400: "#475467",
          500: "#292D32",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      boxShadow: {
        authcardshadow: "0px 1px 4px 0px #0000000D",
        buttonshadow: "0px 1px 0px 2px #334058",
        cardshadow: "0px 1px 4px 0px #0000000F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
