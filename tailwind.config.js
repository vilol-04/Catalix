module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_01: "#ffffff" },
        gray: {
          50: "#f9f9f9",
          500: "#929599",
          600: "#6c6f6b",
          900: "#1d1b20",
          "600_01": "#79747e",
          "50_01": "#fef7ff",
        },
        blue_gray: { 100: "#d9dadb", 700: "#2f667f", 900: "#262c33", "700_01": "#4a5056" },
        teal: { 300: "#539abb", "300_01": "#539bbb" },
        green: { A700: "#26d75a" },
        deep_orange: { 300: "#ff6e66" },
        black: { 900: "#000000" },
        blue: { A200_7f: "#4592ff7f", "200_7f": "#a2d2fc7f" },
      },
      boxShadow: {
        xs: "0px 4px 4px 0px #000000",
        sm: "8.89px 8.89px 12px 0px #000000",
        md: "0px 1px 1px 0px #000000",
        lg: "1px 1px 2px 0px #000000",
        xl: "0px 0px 4px 0px #6d6d6d",
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
