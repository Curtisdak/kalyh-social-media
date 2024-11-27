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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes:{
        bounce: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(2)", opacity: 0.7 },
        },
      },
      animation: {
        "bounce-delay-1": "bounce 1.5s infinite ease-in-out 0s",
        "bounce-delay-2": "bounce 1.5s infinite ease-in-out 0.2s",
        "bounce-delay-3": "bounce 1.5s infinite ease-in-out 0.4s",
        "bounce-delay-4": "bounce 1.5s infinite ease-in-out 0.6s",
        "bounce-delay-5": "bounce 1.5s infinite ease-in-out 0.8s",
      },
    },
  },
  plugins: [],
};
export default config;
