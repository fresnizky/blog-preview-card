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
        lg: "clamp(1.25rem, 5vw, 1.5rem)",
        base: "clamp(0.875rem, 3.8vw, 1rem)",
        sm: "clamp(0.75rem, 3vw, 0.875rem)",
      },
      boxShadow: {
        article: "8px 8px 0px 0px #000;",
      },
    },
  },
  plugins: [],
};
