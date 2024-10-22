import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/images/header.avif") ',
      },
    },
  },
  plugins: [],
};
export default config;
