/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2c3e9e",
        secondary: "#02CCFE",
        tersiary: "#0FA958",
        card: "#444444",
        "card-hover": "#555555",
        "card-active": "#666666",
        "card-active-hover": "#777777",
      },
      borderColor: {
        primary: "#2c3e9e",
        secondary: "#02CCFE",
        tersiary: "#0FA958",
        card: "#444444",
        "card-hover": "#555555",
        "card-active": "#666666",
        "card-active-hover": "#777777",
        black: "#333",
      },
      textDecorationColor: {
        primary: "#2c3e9e",
        secondary: "#02CCFE",
        tersiary: "#0FA958",
        card: "#444444",
        "card-hover": "#555555",
        "card-active": "#666666",
        "card-active-hover": "#777777",
      },
      textColor: {
        primary: "#2c3e9e",
        secondary: "#02CCFE",
        tersiary: "#0FA958",
        card: "#FFFFFF",
        "card-hover": "#FFFFFF",
        "card-active": "#FFFFFF",
        "card-active-hover": "#FFFFFF",
        black: "#333",
      },
      boxShadowColor: {
        primary: "#2c3e9e",
        secondary: "#02CCFE",
        tersiary: "#0FA958",
        black: "#333",
      },
    },
  },
  plugins: [],
};
