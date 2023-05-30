const nativewind = require("nativewind/tailwind");
const Color = require("color");
const colors = require("./src/theme/colors");

const toForeground = (input, percentage = 0.8) => {
  const colorMix = Color(input).isDark() ? Color("white") : Color("black");
  const color = Color(input).mix(colorMix, percentage).saturate(10);
  return color.string();
};

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    variables: {
      "--colors-primary": colors.light["primary"],
      "--colors-primary-content": colors.light["primary-content"],

      "--colors-secondary": colors.light["secondary"],
      "--colors-secondary-content": colors.light["secondary-content"],

      "--colors-accent": colors.light["accent"],
      "--colors-accent-content": colors.light["accent-content"],

      "--colors-neutral": colors.light["neutral"],
      "--colors-neutral-outline": colors.light["neutral"],
      "--colors-neutral-content": colors.light["neutral-content"],

      "--colors-base-100": colors.light["base-100"],
      "--colors-base-200": colors.light["base-200"],
      "--colors-base-300": colors.light["base-300"],
      "--colors-base-content": colors.light["base-content"],

      "--colors-info": colors.light["info"],
      "--colors-info-content": colors.light["info-content"],

      "--colors-success": colors.light["success"],
      "--colors-success-content": colors.light["success-content"],

      "--colors-warning": colors.light["warning"],
      "--colors-warning-content": colors.light["warning-content"],

      "--colors-error": colors.light["error"],
      "--colors-error-content": colors.light["error-content"],
    },
    darkVariables: {
      "--colors-primary": colors.dark["primary"],
      "--colors-primary-content": colors.dark["primary-content"],

      "--colors-secondary": colors.dark["secondary"],
      "--colors-secondary-content": colors.dark["secondary-content"],

      "--colors-accent": colors.dark["accent"],
      "--colors-accent-content": colors.dark["accent-content"],

      "--colors-neutral": colors.dark["neutral"],
      "--colors-neutral-outline": colors.dark["neutral-content"],
      "--colors-neutral-content": colors.dark["neutral-content"],

      "--colors-base-100": colors.dark["base-100"],
      "--colors-base-200": colors.dark["base-200"],
      "--colors-base-300": colors.dark["base-300"],
      "--colors-base-content": colors.dark["base-content"],

      "--colors-info": colors.dark["info"],
      "--colors-info-content": colors.dark["info-content"],

      "--colors-success": colors.dark["success"],
      "--colors-success-content": colors.dark["success-content"],

      "--colors-warning": colors.dark["warning"],
      "--colors-warning-content": colors.dark["warning-content"],

      "--colors-error": colors.dark["error"],
      "--colors-error-content": colors.dark["error-content"],
    },
    extend: {
      colors: {
        primary: "var(--colors-primary)",
        "primary-content": "var(--colors-primary-content)",

        secondary: "var(--colors-secondary)",
        "secondary-content": "var(--colors-secondary-content)",

        accent: "var(--colors-accent)",
        "accent-content": "var(--colors-accent-content)",

        neutral: "var(--colors-neutral)",
        "neutral-outline": "var(--colors-neutral-outline)",
        "neutral-content": "var(--colors-neutral-content)",

        "base-100": "var(--colors-base-100)",
        "base-200": "var(--colors-base-200)",
        "base-300": "var(--colors-base-300)",
        "base-content": "var(--colors-base-content)",

        info: "var(--colors-info)",
        "info-content": "var(--colors-info-content)",

        success: "var(--colors-success)",
        "success-content": "var(--colors-success-content)",

        warning: "var(--colors-warning)",
        "warning-content": "var(--colors-warning-content)",

        error: "var(--colors-error)",
        "error-content": "var(--colors-error-content)",
      },
    },
  },
  plugins: [],
  presets: [nativewind],
};
