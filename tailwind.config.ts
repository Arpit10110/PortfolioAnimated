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
        'below-lap': { 'max': '800px' }, 
        'below-tab': { 'max': '600px' }, 
        'below-mob': { 'max': '450px' }, 
        'small-mob': { 'max': '400px' }, 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blog-bg": "var(--blog-bg)",
        "blog-surface": "var(--blog-surface)",
        "blog-surface-hover": "var(--blog-surface-hover)",
        "blog-border": "var(--blog-border)",
        "blog-text": "var(--blog-text)",
        "blog-muted": "var(--blog-muted)",
        "blog-accent": "var(--blog-accent)",
        "blog-accent-soft": "var(--blog-accent-soft)",
      },
      borderRadius: {
        blog: "var(--blog-radius)",
      },
      spacing: {
        "blog-gap": "var(--blog-gap)",
        "blog-nav-x": "var(--blog-nav-pad-x)",
        "blog-card": "var(--blog-card-pad)",
      },
      height: {
        "blog-image": "var(--blog-image-height)",
      },
      transitionDuration: {
        blog: "var(--blog-transition)",
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
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;