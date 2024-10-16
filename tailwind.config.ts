import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF54D3",
        secondary: "#FFA1EA",
      },
      container:{
        center: true,
        padding: '3.500rem',
      },
    },
  },
  plugins: [],
};
export default config;
