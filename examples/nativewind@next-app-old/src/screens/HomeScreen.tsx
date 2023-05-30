import { StackParamsList } from "@navigation/MainStack";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { Button, View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamsList>>();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Button title="Theme" onPress={() => navigation.navigate("SwitchThemeScreen")} />
    </View>
  );
};
