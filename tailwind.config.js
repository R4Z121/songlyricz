/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'app-carousel': "url('/img/carousel.jpg')",
      },
      screens: {
        'xs': '550px',
      },
      boxShadow: {
        'app-card-shadow': '1px 1px 10px 2px black',
        'app-pagination-shadow': '1px 1px 3px 1px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}
