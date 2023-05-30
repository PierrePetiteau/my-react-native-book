/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind");
const Color = require("color");
const colors = require("tailwindcss/colors");

const baseColors = {
  primary: "#661AE6",
  secondary: "#D926AA",
  accent: "#1FB2A5",
  neutral: "#191D24",
  base: "#2A303C",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
};

const toForeground = (input, percentage = 0.8) => {
  const colorMix = Color(input).isDark() ? Color("white") : Color("black");
  const color = Color(input).mix(colorMix, percentage).saturate(10);
  return color.hex();
};

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewind],
  darkMode: "class",
  theme: {
    variables: {
      // primary
      "--p": Color(baseColors.primary).hex(),
      // secondary
      "--s": Color(baseColors.secondary).hex(),
      // accent
      "--a": Color(baseColors.accent).hex(),
      // neutral
      "--n": Color(baseColors.neutral).hex(),
      // info
      "--in": Color(baseColors.info).hex(),
      // success
      "--su": Color(baseColors.success).hex(),
      // warning
      "--wa": Color(baseColors.warning).hex(),
      // error
      "--er": Color(baseColors.error).hex(),
      // base 100 200 300
      "--b1": Color(baseColors.base).hex(),
      "--b2": Color(baseColors.base).darken(0.1).hex(),
      "--b3": Color(baseColors.base).darken(0.1).darken(0.1).hex(),

      // primary content
      "--pc": toForeground(Color(baseColors.primary)),
      // secondary content
      "--sc": toForeground(Color(baseColors.secondary)),
      // accent content
      "--ac": toForeground(Color(baseColors.accent)),
      // neutral content
      "--nc": toForeground(Color(baseColors.neutral)),
      // base content
      "--bc": toForeground(Color(baseColors.base)),
      // info content
      "--inc": toForeground(Color(baseColors.info)),
      // success content
      "--suc": toForeground(Color(baseColors.success)),
      // warning content
      "--wac": toForeground(Color(baseColors.warning)),
      // error content
      "--erc": toForeground(Color(baseColors.error)),
    },
    colors: {
      ...colors,
      primary: "var(--p)",
      secondary: "var(--s)",
      accent: "var(--a)",
      neutral: "var(--n)",
      info: "var(--in)",
      success: "var(--su)",
      warning: "var(--wa)",
      error: "var(--er)",
      "base-100": "var(--b1)",
      "base-200": "var(--b2)",
      "base-300": "var(--b3)",

      "primary-content": "var(--pc)",
      "secondary-content": "var(--sc)",
      "accent-content": "var(--ac)",
      "neutral-content": "var(--nc)",
      "base-content": "var(--bc)",
      "info-content": "var(--inc)",
      "success-content": "var(--suc)",
      "warning-content": "var(--wac)",
      "error-content": "var(--erc)",
    },
    screens: {
      sm: { min: "300px", max: "379px" }, // Small screens
      md: { min: "380px", max: "500px" }, // Medium screens
    },
    extend: {
      borderRadius: {
        btn: "8px",
      },
      borderWidth: {
        btn: "1px",
      },
    },
  },
};
