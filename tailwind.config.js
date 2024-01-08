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
        xl: "1.5rem",
        lg: "1.25rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      boxShadow: {
        article: "8px 8px 0px 0px #000;",
      },
    },
  },
  plugins: [],
};
