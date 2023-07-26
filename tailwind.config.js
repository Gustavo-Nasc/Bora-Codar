/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: 'Tektur',
      },
      textColor: {
        logo: '#8F56E9',
        alt: '#121214',
      },
      backgroundColor: {
        main: '#121214',
      },
    },
  },
  plugins: [],
}
