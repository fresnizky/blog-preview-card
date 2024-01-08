/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(47, 88%, 63%)",
        "neutral-100": "hsl(0, 0%, 100%)",
        "neutral-500": "hsl(0, 0%, 50%)",
        "neutral-900": "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        primary: ["Figtree", "sans-serif"],
      },
      fontSize: {
        "text-xl": "1.5rem",
        "text-lg": "1.25rem",
        "text-base": "1rem",
        "text-sm": "0.875rem",
        "text-xs": "0.75rem",
      },
    },
  },
  plugins: [],
};
