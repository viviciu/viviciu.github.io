/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mwsGrey: '#d4d4d4',
        offBlack: '#333333',
        offBlack1: '#373737',
        offBlack2: '#515151',
        offBlack3: '#939393'
      },
      fontFamily: {
        'SFProDisplay': ['SFProDisplay', 'sans-serif'],
        'SuisseWorks': ['SuisseWorks', 'serif'],
        'Suisse': ['Suisse', 'sans-serif'],
        'InputMono': ['InputMono', 'monospace'],
        'LabMono': ['LabMono', 'monospace'],
        'MonumentGroteskSemiMono': ['MonumentGroteskSemiMono', 'sans-serif'],
        'MonumentGroteskSemiMonoThin': ['MonumentGroteskSemiMonoThin', 'sans-serif']
      },
      fontSize: {
        xxs: "0.5rem",
        xs: "0.75rem",
        sm: "0.8rem",
        base: "1rem",
        lg: "1.375rem",
        xl: "1.75rem",
        "9xl": "3.88rem",
        h1: "var(--fs-h1)",
        cap: "var(--fs-cap)",
        p: "var(--fs-p)",
        h4pp: "2.1875rem",
        callout: "var(--fs-callout)",
      },
      lineHeight: {
        h1: "var(--lh-h1)",
        cap: "var(--lh-cap)",
        p: "var(--lh-p)",
        pMobile: "var(--lh-pMobile)",
        p3: "var(--lh-p3)",
        h4pp: "1",
        callout: "var(--lh-callout2)",
      },
      letterSpacing: {
        h1: "-0.13019rem",
      },
    }
  },
  plugins: []
}; 