/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#22d3ee"
      }
    }
  }
};
