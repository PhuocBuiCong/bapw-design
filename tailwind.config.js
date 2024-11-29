/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#111111",
        },
      },
      fontFamily: {
        qlassy: ["Qlassy", "sans-serif"],
        akkurat: ["Akkurat", "sans-serif"],
        chronicle: ["Chronicle", " sans-serif"],
      },
    },
  },
  plugins: [],
};
