/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors:{
      state: {
        950:'#020617',
        700: '#334155'
      },
      white:{
        100:'#ffffff'
      }
    },
    fontFamily:{
      'serif':['ui-serif','Imbue'],
      'sans':['ui-sans-serif','Rubik'],
      'sans2': ['Helvetica', 'Arial', 'sans-serif'],
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
      themes: [
        "light",
        "dark",
        "corporate"
      ],
    },
}

