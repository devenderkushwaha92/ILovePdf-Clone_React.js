/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path includes all relevant files
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Custom breakpoint for extra small screens
        'sm': '640px', // Default small breakpoint
        'md': '768px', // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2x extra-large breakpoint
      },
      margin: {
        '100': '33rem', // Custom margin class
        '101': '50rem', // Custom margin class
        'lap': '64rem', // Custom margin class
      },
    }, // Add any custom theme settings here
  },
  plugins: [], // Add any additional plugins here
};
