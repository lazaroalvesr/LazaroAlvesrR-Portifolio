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
        bg:     "#141414",
        bg2:    "#1A1A1A",
        bg3:    "#202020",
        white:  "#F0EDEA",
        mid:    "#888480",
        dim:    "#4A4744",
        amber:  "#E8943A",
        amber2: "#F5B565",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans:    ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
