import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0D1B4B',
          yellow: '#E8001C',
          red: '#E8001C',
          white: '#FFFFFF',
          light: '#F4F4F4',
          gray: '#666666',
        },
      },
    },
  },
  plugins: [],
};
export default config;
