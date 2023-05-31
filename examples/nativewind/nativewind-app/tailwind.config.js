const Color = require("color");

const toForeground = (input, percentage = 0.8) => {
  const colorMix = Color(input).isDark() ? Color("white") : Color("black");
  const color = Color(input).mix(colorMix, percentage).saturate(10);
  return color.string();
};

const baseColors = {
  primary: "#570df8",
  "primary-dark": "#661AE6",
  secondary: "#f000b8",
  "secondary-dark": "#D926AA",
  accent: "#37cdbe",
  "accent-dark": "#1FB2A5",
  neutral: "#3d4451",
  "neutral-dark": "#191D24",
  base: "#ffffff",
  "base-dark": "#2A303C",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",

  "primary-content": "#ffffff",
  "secondary-content": "#ffffff",
  "accent-content": "#ffffff",
  "neutral-focus": "#111318",
  "neutral-content": "#ffffff",
  "neutral-content-dark": "#A6ADBB",
  "base-100": "#ffffff",
  "base-100-dark": "#2A303C",
  "base-200": "#F2F2F2",
  "base-200-dark": "#242933",
  "base-300": "#E5E6E6",
  "base-300-dark": "#20252E",
  "base-content": "#1f2937",
  "base-content-dark": "#A6ADBB",
};

const colors = {
  primary: Color(baseColors.primary).string(),
  "primary-dark": Color(baseColors["primary-dark"]).string(),
  secondary: Color(baseColors.secondary).string(),
  "secondary-dark": Color(baseColors["secondary-dark"]).string(),
  accent: Color(baseColors.accent).string(),
  "accent-dark": Color(baseColors["accent-dark"]).string(),
  neutral: Color(baseColors.neutral).string(),
  "neutral-dark": Color(baseColors["neutral-dark"]).string(),
  info: Color(baseColors.info).string(),
  success: Color(baseColors.success).string(),
  warning: Color(baseColors.warning).string(),
  error: Color(baseColors.error).string(),
  "base-100": Color(baseColors.base).string(),
  "base-100-dark": Color(baseColors["base-dark"]).string(),
  "base-200": Color(baseColors.base).darken(0.1).string(),
  "base-200-dark": Color(baseColors["base-dark"]).darken(0.1).string(),
  "base-300": Color(baseColors.base).darken(0.1).darken(0.1).string(),
  "base-300-dark": Color(baseColors["base-dark"]).darken(0.1).darken(0.1).string(),

  "primary-content": toForeground(baseColors.primary),
  "primary-content-dark": toForeground(baseColors["primary-dark"]),
  "secondary-content": toForeground(baseColors.secondary),
  "secondary-content-dark": toForeground(baseColors["secondary-dark"]),
  "accent-content": toForeground(baseColors.accent),
  "accent-content-dark": toForeground(baseColors["accent-dark"]),
  "neutral-content": toForeground(baseColors.neutral),
  "neutral-content-dark": toForeground(baseColors["neutral-dark"]),
  "base-content": toForeground(baseColors.base),
  "base-content-dark": toForeground(baseColors["base-dark"]),
  "info-content": toForeground(baseColors.info),
  "success-content": toForeground(baseColors.success),
  "warning-content": toForeground(baseColors.warning),
  "error-content": toForeground(baseColors.error),
  ...baseColors,
};

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
