/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '5rem'
      },
      screens: {
        xs: '475px',
        '2xs': '375px',
      },
      colors: {
        "scrollbar-bg": "#141414",
        "scrollbar-thumb-bg": "#323232",
        "scrollbar-thumb-hover": "#484848",
      },
    },
  },
  plugins: [],
}
