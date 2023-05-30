import { styled, useColorScheme } from "nativewind";
import { Button, Text, TouchableOpacity, View } from "react-native";

const StyledButton = styled(Button);

export const SwitchThemeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  console.log("---------", "colorScheme", colorScheme);

  return (
    <View className={"dark flex-1 items-center justify-center bg-white dark:bg-black"}>
      <Text className="text-black dark:text-white">
        Color scheme is {colorScheme} {colorScheme === "light" ? "☀️" : "✨"}
      </Text>
      <StyledButton className="mt-[200px]" title="Toggle theme" onPress={toggleColorScheme} />
      <TouchableOpacity className="btn bg-primary">
        <Text className="text-white dark:text-accent">Secondary button</Text>
      </TouchableOpacity>
    </View>
  );
};
