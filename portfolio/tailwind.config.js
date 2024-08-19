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
          400: "#E8EAEC",
        },
        zinc: "#101010",
        threejsBlue: "hsl(0, 95, 70)",
        "blog-headerBlock": "rgba(217, 217, 217, 0.14)",
      },

      // Typography
      fontSize: {
        xxs: "0.5rem",
        xs: "0.75rem",
        sm: "0.8rem",
        base: "1rem",
        lg: "1.375rem", // This is the 'entry' text in styleguide!
        xl: "1.75rem",
        "9xl": "3.88rem",
        "h1": "var(--fs-h1)",
        "p": "var(--fs-p)",
      },

      // LINE HEIGHT
      lineHeight: {
        "h1": 'var(--lh-h1)',
        "p": 'var(--lh-p)',
      },

      // font family
      fontFamily: {
        serif: ["AdobeTextPro-Regular"],
        display: ["Suisse"],
        CMUSerif: ["CMU-Serif"],
        HelveticaMedium: ["Helvetica-Neue-Medium"],
      },

      // RESPONSIVE DESIGN : SCREEN SIZES
      // SEE https://tailwindcss.com/docs/responsive-design FOR DEFAULTS (sm,md,lg,xl,2xl)
      // SEE THIS SIZE FOR COMMON DEVICE WIDTHS: https://www.mydevice.io/ and https://www.icwebdesign.co.uk/common-viewport-sizes
      // md is like an iPad air. iPad pro is 1024px wide.
      screens: {
        xs: "390px", // 390px is an iPhone 12 Pro
      },
    },
  },
  plugins: [
    // for prose
    require("@tailwindcss/typography"),
    // for checkbox changing color of label
    function ({ addUtilities }) {
      addUtilities({
        ".checkbox-label-checked": {
          'input[type="checkbox"]:checked ~ &': {
            color: "#94928d", // Customize this color as needed
          },
        },
      });
    },
  ],
};
