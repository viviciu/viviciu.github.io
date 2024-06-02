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
        zinc: "#101010",
        'threejsBlue': "hsl(0, 95, 70)",
        'blog-headerBlock': 'rgba(217, 217, 217, 0.14)',
      },

      // Typography
      fontSize: {
        base: "1rem",
        lg: "1.375rem", // This is the 'entry' text in styleguide!
        xl: "1.75rem",
        '9xl': "3.88rem",
      },

      // font family
      fontFamily: {
        serif: ["Adobe Text Pro"],
      },
    },
  },
  plugins: [
    // for prose
    require('@tailwindcss/typography'),
  ],
};
