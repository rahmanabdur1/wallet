/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(25, 39, 75, 1)',
        'custom-black': 'rgba(19, 18, 23, 0.85)',
        'custom-bg':'rgba(19, 18, 23, 0.75)',
         'custom-nav':'rgba(25, 38, 73, 1)',
      },
    
   
    },
  },
  plugins: [],
};
