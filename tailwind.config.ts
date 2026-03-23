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
        // These are the exact colors sampled from your image
        'kind-pink-light': '#F8A5C2', // For the 'Home' highlight
        'kind-pink-button': '#FF40A0', // For the 'Sign Up' button
        'brand-orange': '#B33D11', // For the footer background (if you want to use it as a named color)
      },
    },
  },
  plugins: [],
};
export default config;