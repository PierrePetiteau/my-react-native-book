const Color = require("color");

const toForeground = (input, percentage = 0.8) => {
  const colorMix = Color(input).isDark() ? Color("white") : Color("black");
  const color = Color(input).mix(colorMix, percentage).saturate(10);
  return color.string();
};

module.exports = {
  light: {
    primary: "#570df8",
    "primary-content": "#ffffff",

    secondary: "#f000b8",
    "secondary-content": "#ffffff",

    accent: "#37cdbe",
    "accent-content": "#163835",

    neutral: "#3d4451",
    "neutral-outline": "#3d4451",
    "neutral-content": "#ffffff",

    "base-100": "#ffffff",
    "base-200": "#F2F2F2",
    "base-300": "#E5E6E6",
    "base-content": "#1f2937",

    info: "#3ABFF8",
    "info-content": toForeground("#3ABFF8"),

    success: "#36D399",
    "success-content": toForeground("#36D399"),

    warning: "#FBBD23",
    "warning-content": toForeground("#FBBD23"),

    error: "#F87272",
    "error-content": toForeground("#F87272"),
  },
  dark: {
    primary: "#661AE6",
    "primary-content": "#ffffff",

    secondary: "#D926AA",
    "secondary-content": "#ffffff",

    accent: "#1FB2A5",
    "accent-content": "#ffffff",

    neutral: "#191D24",
    "neutral-outline": "#A6ADBB",
    "neutral-content": "#A6ADBB",
    "neutral-focus": "#111318",

    "base-100": "#2A303C",
    "base-200": "#242933",
    "base-300": "#20252E",
    "base-content": "#A6ADBB",

    info: "#3ABFF8",
    "info-content": toForeground("#3ABFF8"),

    success: "#36D399",
    "success-content": toForeground("#36D399"),

    warning: "#FBBD23",
    "warning-content": toForeground("#FBBD23"),

    error: "#F87272",
    "error-content": toForeground("#F87272"),
  },
};
