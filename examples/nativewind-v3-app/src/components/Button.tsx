import { styled, useColorScheme } from "nativewind";
import { FC, ReactElement, useRef } from "react";
import { ActivityIndicator, Animated, Easing, Pressable, Text } from "react-native";
import colors from "../theme/colors";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export type ButtonProps = {
  onPress: () => void;
  text: string;
  intent?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "disabled";
  size?: "small" | "medium" | "large";
  fit?: "content" | "container";
  shape?: "rounded" | "circle" | "square";
  outline?: boolean;
  loading?: boolean;
  uppercase?: boolean;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
};

const useColors = () => {
  const { colorScheme } = useColorScheme();

  if (colorScheme === "light") {
    return colors.light;
  } else {
    return colors.dark;
  }
};

type Variant<Props extends {}> = Partial<Props> & { _v: any };

function objectIncludes<T extends Record<string, unknown>>(obj: T, includedObj: Partial<T>): boolean {
  return Object.entries(includedObj).every(([key, value]) => obj[key] === value);
}

const compose = <Props extends {}>(props: Props, variants: Variant<Props>[]) => {
  let value: any;
  for (const { _v, ...variantProps } of variants) {
    if (objectIncludes(props, Object(variantProps))) {
      value = _v;
    }
  }
  return value;
};

const useActivityIndicatorColor = (props: ButtonProps) => {
  const colors = useColors();
  return compose(props, [
    { intent: "neutral", _v: colors["neutral-content"] },
    { intent: "primary", _v: colors["primary-content"] },
    { intent: "secondary", _v: colors["secondary-content"] },
    { intent: "accent", _v: colors["accent-content"] },
    { intent: "info", _v: colors["info-content"] },
    { intent: "success", _v: colors["success-content"] },
    { intent: "warning", _v: colors["warning-content"] },
    { intent: "error", _v: colors["error-content"] },
    { intent: "disabled", _v: colors["neutral-content"] },

    { intent: "neutral", outline: true, _v: colors["neutral"] },
    { intent: "primary", outline: true, _v: colors["primary"] },
    { intent: "secondary", outline: true, _v: colors["secondary"] },
    { intent: "accent", outline: true, _v: colors["accent"] },
    { intent: "info", outline: true, _v: colors["info"] },
    { intent: "success", outline: true, _v: colors["success"] },
    { intent: "warning", outline: true, _v: colors["warning"] },
    { intent: "error", outline: true, _v: colors["error"] },
    { intent: "disabled", outline: true, _v: colors["neutral"] },
  ]);
};

const StyledPressable = styled(AnimatedPressable, "flex flex-row justify-center items-center border-2", {
  variants: {
    intent: {
      neutral: "border-neutral bg-neutral",
      primary: "border-primary bg-primary",
      secondary: "border-secondary bg-secondary",
      accent: "border-accent bg-accent",
      info: "border-info bg-info",
      success: "border-success bg-success",
      warning: "border-warning bg-warning",
      error: "border-error bg-error",
      disabled: "border-transparent bg-base-200",
    },
    outline: {
      true: "bg-tranparent",
    },
    size: {
      small: "h-8 px-4",
      medium: "h-12 px-4",
      large: "h-16 px-4",
    },
    fit: {
      content: "self-center",
      container: "flex-grow",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-lg",
      circle: "rounded-full",
    },
  },
  compoundVariants: [
    { intent: "neutral", outline: true, className: "bg-transparent border-neutral-outline" },
    { intent: "primary", outline: true, className: "bg-transparent" },
    { intent: "secondary", outline: true, className: "bg-transparent" },
    { intent: "accent", outline: true, className: "bg-transparent" },
    { intent: "info", outline: true, className: "bg-transparent" },
    { intent: "success", outline: true, className: "bg-transparent" },
    { intent: "warning", outline: true, className: "bg-transparent" },
    { intent: "error", outline: true, className: "bg-transparent" },
    { intent: "disabled", outline: true, className: "bg-transparent border-base-content opacity-40" },
  ],
});

const StyledText = styled(Text, "font-semibold", {
  variants: {
    intent: {
      neutral: "text-neutral-content",
      primary: "text-primary-content",
      secondary: "text-secondary-content",
      accent: "text-accent-content",
      info: "text-info-content",
      success: "text-success-content",
      warning: "text-warning-content",
      error: "text-error-content",
      disabled: "text-base-content opacity-40",
    },
    outline: {
      true: "",
    },
    uppercase: {
      true: "uppercase",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  compoundVariants: [
    { intent: "neutral", outline: true, className: "text-neutral-outline" },
    { intent: "primary", outline: true, className: "text-primary" },
    { intent: "secondary", outline: true, className: "text-secondary" },
    { intent: "accent", outline: true, className: "text-accent" },
    { intent: "info", outline: true, className: "text-info" },
    { intent: "success", outline: true, className: "text-success" },
    { intent: "warning", outline: true, className: "text-warning" },
    { intent: "error", outline: true, className: "text-error" },
    { intent: "disabled", outline: true, className: "opacity-100" },
  ],
});

export const Button: FC<ButtonProps> = (props) => {
  const {
    onPress,
    text,
    intent = "neutral",
    size = "medium",
    fit = "content",
    shape = "rounded",
    outline = false,
    uppercase = true,
    loading = false,
    leftElement = null,
    rightElement = null,
  } = props;
  const activityIndicatorColor = useActivityIndicatorColor(props);

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 200,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  };

  const buttonStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <StyledPressable
      intent={intent}
      size={size}
      fit={fit}
      shape={shape}
      outline={outline}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={intent === "disabled" || loading}
      style={buttonStyle}
    >
      {loading ? <ActivityIndicator size="small" color={activityIndicatorColor} className="pr-2" /> : leftElement}
      <StyledText intent={intent} size={size} uppercase={uppercase} outline={outline}>
        {text}
      </StyledText>
      {rightElement}
    </StyledPressable>
  );
};
