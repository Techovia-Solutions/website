/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Roboto", "sans-serif"],
        body: ["Open Sans", "Lato", "sans-serif"],
      },
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        // Semantic names (recommended)
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        border: "var(--color-border)",
        
        // Legacy/Explicit names (mapped to variables for consistency)
        dark: {
          bg: "#0F172A", // Keeping hex for fallback/explicit usage if needed, or could map to var(--color-bg) but that might be circular if not careful
          surface: "#1E293B",
          text: "#F8FAFC",
        },
        light: {
          bg: "#FFFFFF",
          surface: "#F3F4F6",
          text: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};