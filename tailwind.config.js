module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      colors: { accent: { DEFAULT: "#0d9488", dark: "#2dd4bf" } },
    },
  },
  plugins: [],
};
