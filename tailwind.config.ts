import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

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
        
        'custom-background': '#07102F',
        'custom-main': '#FFFF65',
        'custom-second': '#E26D5C',
        'custom-accent': '#141D3C'
      },
      colors: {
        'danny-grey': '#474350',

        'custom-background': '#07102F',
        'custom-main': '#FFFF65',
        'custom-second': '#E26D5C',
        'custom-accent': '#141D3C'
      },
      spacing: {
        '3/2': '150%'
      },
      fontFamily: {
        mulish: ['Mulish', fontFamily.sans],
        'bebas-neue': ['Bebas Neue', fontFamily.sans]
      },
    },
  },
  plugins: [],
};
export default config;
