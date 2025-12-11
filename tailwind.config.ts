import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <--- 加上这一行
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "anime-pink": "#ffb7b2",
        // "anime-pink": "#ff0000", //大红色
        "anime-blue": "#0fa3ba",
        "anime-green": "#e2f0cb",
        "anime-cream": "#fdfcf0",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;
