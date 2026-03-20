/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d8ebff",
          200: "#badbff",
          500: "#1678f2",
          600: "#0f62cc",
          700: "#0d4f9f",
          900: "#102743",
        },
      },
      boxShadow: {
        panel: "0 22px 60px rgba(15, 23, 42, 0.14)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-in": "floatIn 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
