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
      backgroundColor: {
        'danny-grey': '#474350',
        
        'custom-background': '#1E1E34',
        'custom-main': '#FFFF65',
        'custom-second': '#E26D5C',
        'custom-accent': '#B6C2D9'
      },
      colors: {
        'danny-grey': '#474350',

        'custom-background': '#1E1E34',
        'custom-main': '#FFFF65',
        'custom-second': '#E26D5C',
        'custom-accent': '#B6C2D9'
      }
    },
  },
  plugins: [],
};
export default config;
