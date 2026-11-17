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
        orange: {
          DEFAULT: "#FF5C00",
          light: "#FF7A2B",
          pale: "#FFF0E8",
          dark: "#CC4900",
        },
        cream: {
          DEFAULT: "#FBF7F2",
          deep: "#F5EEE5",
        },
        ink: {
          DEFAULT: "#16130F",
          soft: "#3A342D",
        },
        muted: "#6E665D",
        line: "#ECE3D8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 19, 15, 0.04), 0 8px 24px -8px rgba(22, 19, 15, 0.08)",
        lift: "0 2px 4px rgba(22, 19, 15, 0.04), 0 24px 48px -16px rgba(22, 19, 15, 0.14)",
        glow: "0 10px 30px -10px rgba(255, 92, 0, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
