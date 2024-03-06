import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-dm-serif-display)",
      secondary: "var(--font-jost)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f8ec",
          hover: "#b88c5d",
          light: "#f4f0ec",
        },
      },
      backgroundImage: {
        hero: "url('/assets/hero/bg.jpg')",
        grid: "url('/assets/grid.png')",
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "50px",
        "6xl": "60px",
      },
    },
  },
  plugins: [],
};
export default config;
