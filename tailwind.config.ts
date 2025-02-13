// @import url("https://fonts.cdnfonts.com/css/sf-mono")
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "rgb(103, 232, 249)",
      },
      keyframes: {
        marque: {
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        marquee: "marque 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
