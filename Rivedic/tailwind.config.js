/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 ENABLE DARK MODE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayurvedic: {
          bg: "#0f172a",      // Deep charcoal
          card: "#020617",    // Dark card
          accent: "#15803d",  // Green
          gold: "#f59e0b",    // Amber / Gold
        },
      },
    },
  },
  plugins: [],
};
