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
        standard: "#353535",
        white: "#ffffff",
      },
      fontFamily: {
        rachelya: ["Rachelya", "sans-serif"],
        anaheimregular: ["Anaheim-Regular", "sans-serif"],
        anaheimmedium: ["Anaheim-Medium", "sans-serif"],
        anaheimbold: ["Anaheim-Bold", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
