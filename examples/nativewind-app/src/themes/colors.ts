import Color from "color";

const toForeground = (input: string, percentage = 0.8) => {
  const colorMix = Color(input).isDark() ? Color("white") : Color("black");
  const color = Color(input).mix(colorMix, percentage).saturate(10);
  return color.string();
};

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

  "primary-content": "#ffffff",
  "secondary-content": "#ffffff",
  "accent-content": "#ffffff",
  "neutral-focus": "#111318",
  "neutral-content": "#A6ADBB",
  "base-100": "#2A303C",
  "base-200": "#242933",
  "base-300": "#20252E",
  "base-content": "#A6ADBB",
};

const colors = {
  primary: Color(baseColors.primary).string(),
  secondary: Color(baseColors.secondary).string(),
  accent: Color(baseColors.accent).string(),
  neutral: Color(baseColors.neutral).string(),
  info: Color(baseColors.info).string(),
  success: Color(baseColors.success).string(),
  warning: Color(baseColors.warning).string(),
  error: Color(baseColors.error).string(),
  "base-100": Color(baseColors.base).string(),
  "base-200": Color(baseColors.base).darken(0.1).string(),
  "base-300": Color(baseColors.base).darken(0.1).darken(0.1).string(),

  "primary-content": toForeground(baseColors.primary),
  "secondary-content": toForeground(baseColors.secondary),
  "accent-content": toForeground(baseColors.accent),
  "neutral-content": toForeground(baseColors.neutral),
  "base-content": toForeground(baseColors.base),
  "info-content": toForeground(baseColors.info),
  "success-content": toForeground(baseColors.success),
  "warning-content": toForeground(baseColors.warning),
  "error-content": toForeground(baseColors.error),
  ...baseColors,
};
