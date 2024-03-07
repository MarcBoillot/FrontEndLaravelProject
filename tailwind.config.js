/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily:{
      'serif':['ui-serif','Imbue']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '0.75em',
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
      themes: false,
      darkTheme:"dark",
    },
}

