import clsx from "clsx";
import { FC, ReactElement, useRef } from "react";
import { ActivityIndicator, Animated, Easing, Pressable, Text } from "react-native";

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
  lowercase?: boolean;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
};

export const Button: FC<ButtonProps> = ({
  onPress,
  text,
  intent = "neutral",
  size = "medium",
  fit = "content",
  shape = "rounded",
  outline = false,
  loading = false,
  lowercase = false,
  leftElement = null,
  rightElement = null,
}) => {
  const pressableClassName = clsx({
    "flex flex-row justify-center items-center border-2": true,

    "h-8 px-4": size === "small",
    "h-12 px-4": !size || size === "medium",
    "h-16 px-4": size === "large",
    "self-center": fit === "content",
    "flex-grow": fit === "container",

    "border-neutral dark:border-neutral-dark": intent === "neutral",
    "border-primary dark:border-primary-dark": intent === "primary",
    "border-secondary dark:border-secondary-dark": intent === "secondary",
    "border-accent dark:border-accent-dark": intent === "accent",
    "border-info": intent === "info",
    "border-success": intent === "success",
    "border-warning": intent === "warning",
    "border-error": intent === "error",
    "border-transparent": intent === "disabled",

    "border-neutral dark:border-neutral-content-dark": outline && intent === "neutral",
    "border-base-content/40 dark:border-base-content-dark/40": outline && intent === "disabled",

    "bg-neutral dark:bg-neutral-dark": !outline && intent === "neutral",
    "bg-primary dark:bg-primary-dark": !outline && intent === "primary",
    "bg-secondary dark:bg-secondary-dark": !outline && intent === "secondary",
    "bg-accent dark:bg-accent-dark": !outline && intent === "accent",
    "bg-info": !outline && intent === "info",
    "bg-success": !outline && intent === "success",
    "bg-warning": !outline && intent === "warning",
    "bg-error": !outline && intent === "error",
    "bg-base-200 dark:bg-base-200-dark": !outline && intent === "disabled",

    "rounded-none": shape === "square",
    "rounded-lg": shape === "rounded",
    "rounded-full": shape === "circle",
  });

  const textClassName = clsx({
    "font-[raleway-bold] font-semibold": true,

    uppercase: !lowercase,
    "text-sm": size === "small",
    "text-base": size === "medium",
    "text-lg": size === "large",

    "text-neutral-content dark:text-neutral-content-dark": !outline && intent === "neutral",
    "text-primary-content dark:text-primary-content-dark": !outline && intent === "primary",
    "text-secondary-content dark:text-secondary-content-dark": !outline && intent === "secondary",
    "text-accent-content dark:text-accent-content-dark": !outline && intent === "accent",
    "text-info-content": !outline && intent === "info",
    "text-success-content": !outline && intent === "success",
    "text-warning-content": !outline && intent === "warning",
    "text-error-content": !outline && intent === "error",
    "text-base-content dark:text-base-content-dark": intent === "disabled",

    "text-neutral dark:text-neutral-content-dark": outline && intent === "neutral",
    "text-primary dark:text-primary-dark": outline && intent === "primary",
    "text-secondary dark:text-secondary-dark": outline && intent === "secondary",
    "text-accent dark:text-accent-dark": outline && intent === "accent",
    "text-info": outline && intent === "info",
    "text-success": outline && intent === "success",
    "text-warning": outline && intent === "warning",
    "text-error": outline && intent === "error",

    "text-base-content/40 dark:text-base-content-dark/40": intent === "disabled",
  });

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
    <AnimatedPressable
      style={buttonStyle}
      className={pressableClassName}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={intent === "disabled" || loading}
    >
      {loading ? <ActivityIndicator size="small" color="gray" className="pr-2" /> : leftElement}
      <Text className={textClassName}>{text}</Text>
      {rightElement}
    </AnimatedPressable>
  );
};
