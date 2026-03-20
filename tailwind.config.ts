import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf9f7",
          100: "#f5f3ef",
          200: "#e8e4dc",
          300: "#d4cdc0",
          400: "#b8ad9a",
          500: "#9d8f7a",
        },
        sage: {
          50: "#f4f6f3",
          100: "#e8ebe5",
          200: "#d1d9cb",
          300: "#a8b89e",
          400: "#7d9470",
        },
        clay: {
          50: "#f7f5f2",
          100: "#ebe7e1",
          200: "#d4cbc2",
          300: "#b8a99a",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
