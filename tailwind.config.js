/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  experimental: {
    darkModeVariant: true,
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
        },
        // dark: "#222222",
        // nextCor: '#d6d3d1',
        shopCor: '#fef08a',
        sysCor: '#67e8f9',
        cliCor: '#f87171',
        jsonCor: '#f9a8d4',
        willsCor: '#c084fc',
        reqCor: '#ede9fe',
        reloadCor: '#fef3c7',
        cloneCor: '#f87171'
      },
      // keyframes: {
      //   flicker: {
      //     "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
      //       opacity: 0.99,
      //       filter:
      //         "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
      //     },
      //     "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
      //       opacity: 0.4,
      //       filter: "none",
      //     },
      //   },
      // },
      animation: {
        flicker: "flicker 3s linear infinite",
      },
    },
  },
  plugins: [],
};
