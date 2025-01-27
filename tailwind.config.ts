import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    scrollbar,  
    aspectRatio,
  ],
} satisfies Config;
