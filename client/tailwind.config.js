const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#2a4365',  // Updated background
        'primary-tx': '#e2e8f0',  // Slightly darker primary text
        'accent': '#38bdf8',      // Brighter accent
        'secondary-bg': '#355e73',// Darker secondary background
        'secondary-tx': '#81a4ad',// Darker secondary text
        'highlight': '#f6ad55',   // Softer highlight
        'error': '#e63946',       // Retained error color
        'success': '#06d6a0',     // Retained success color
      },
    },
  },
  plugins: [
    // Add custom plugins here if needed
  ],
};