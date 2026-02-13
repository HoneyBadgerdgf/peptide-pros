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
        primary: '#4A3933',
        secondary: '#6B7655',
        accent: '#D4C4B0',
        cream: '#F5F1EC',
      },
    },
  },
  plugins: [],
};
export default config;
