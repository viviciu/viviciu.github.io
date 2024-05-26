/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adds custom colors to existing pallette. Now we don't have to type hex codes. Just say "gray" or "blue".
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
          400: "#E8EAEC"
        },
        zinc: "#101010"
      },

      // Typography
      fontSize: {
        base: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem"
      }
    },
  },
  plugins: [
    // for prose
    require('@tailwindcss/typography'),
  ],
};
