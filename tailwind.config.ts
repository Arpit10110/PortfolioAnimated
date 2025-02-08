import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-lap': { 'max': '800px' }, // custom breakpoint for below 600px
        'below-tab': { 'max': '650px' }, // custom breakpoint for below 600px
        'below-mob': { 'max': '350px' }, // custom breakpoint for below 600px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
