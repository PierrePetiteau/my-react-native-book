import { styled } from "nativewind";
import { Pressable, Text } from "react-native";

const Button = styled(Pressable, "border rounded", {
  variants: {
    intent: {
      primary: "bg-blue-500 border-transparent hover:bg-blue-600"
      secondary: "bg-white border-gray-400 hover:bg-gray-100",
    },
    size: {
      small: "py-1 px-2",
      medium: "py-2 px-4",
    },
  },
  defaultProps: {
    intent: "primary",
    size: "medium",
  },
});

const ButtonText = styled(Text, "font-semibold", {
  variants: {
    intent: {
      primary: "text-white"
      secondary: "text-gray-800",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
    },
  },
  defaultProps: {
    intent: "primary",
    size: "medium",
  },
});

export function MyButton({ intent, size, ...props }) {
  return (
    <Button intent={intent} size={size} {...props}>
      <ButtonText intent={intent} size={size}>Hello, World</ButtonText>
   </Button>
  )
}