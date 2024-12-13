import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": "1536px",

      "xl": "1320px",

      "lg": "1100px",

      "md": "924px",

      "sm": "700px",
    },

    extend: {
      colors: {
        primary: "#FE891F",
      },
    },
  },
  plugins: [],
} satisfies Config;
