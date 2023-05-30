import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { ScrollView, Text, View } from "react-native";
import { Button } from "./src/components/Button";
import { useLoadResources } from "./src/hooks/useLoadRessources";

export default function App() {
  const { isAppReady } = useLoadResources();

  const { colorScheme, toggleColorScheme } = useColorScheme();

  if (!isAppReady) {
    return null;
  }

  return (
    <ScrollView className="flex min-h-screen pt-[60px] bg-base-100 dark:bg-base-100-dark">
      <View className="pb-[160px]">
        <StatusBar style="auto" />
        <View className="flex-row justify-center items-center p-4">
          <Button
            fit="container"
            intent="neutral"
            text={colorScheme === "light" ? "Join the dark side 🌙" : "Praise the sun ☀️"}
            onPress={toggleColorScheme}
          />
        </View>
        <View className="flex-row p-4">
          <Button intent="primary" text={"Primary"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="secondary" text={"Secondary"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="accent" text={"Accent"} onPress={() => {}} />
        </View>
        <View className="flex-row p-4 pt-0">
          <Button outline intent="primary" text={"Primary"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="secondary" text={"Secondary"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="accent" text={"Accent"} onPress={() => {}} />
        </View>

        <View className="flex-row p-4">
          <Button intent="info" text={"Info"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="success" text={"Success"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="warning" text={"Warning"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="error" text={"Error"} onPress={() => {}} />
        </View>
        <View className="flex-row p-4 pt-0">
          <Button outline intent="info" text={"Info"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="success" text={"Success"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="warning" text={"Warning"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="error" text={"Error"} onPress={() => {}} />
        </View>

        <View className="flex-row p-4">
          <Button intent="neutral" text={"Neutral"} onPress={() => {}} />
          <View className="w-2" />
          <Button intent="disabled" text={"Disabled"} onPress={() => {}} />
          <View className="w-2" />
          <Button loading text={"Loading"} onPress={() => {}} />
        </View>
        <View className="flex-row p-4 pt-0">
          <Button outline intent="neutral" text={"Neutral"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline intent="disabled" text={"Disabled"} onPress={() => {}} />
          <View className="w-2" />
          <Button outline loading text={"Loading"} onPress={() => {}} />
        </View>

        <View className="flex-row justify-center items-center p-4">
          <Button size="small" text={"Small"} onPress={() => {}} />
          <View className="w-2" />
          <Button size="medium" text={"Medium"} onPress={() => {}} />
          <View className="w-2" />
          <Button size="large" text={"Large"} onPress={() => {}} />
        </View>

        <View className="w-screen flex-row p-4">
          <Button fit="content" text={"Fit content"} onPress={() => {}} />
          <View className="w-2" />
          <Button fit="container" text={"Fit container"} onPress={() => {}} />
        </View>

        <View className="flex-row justify-center items-center p-4">
          <Button shape="circle" text={"Circle"} onPress={() => {}} />
          <View className="w-2" />
          <Button shape="rounded" text={"Rounded"} onPress={() => {}} />
          <View className="w-2" />
          <Button shape="square" text={"Square"} onPress={() => {}} />
        </View>

        <View className="flex-row justify-center items-center p-4">
          <Button leftElement={<Text className="pr-2">❤️</Text>} text={"Left element"} onPress={() => {}} />
          <View className="w-2" />
          <Button rightElement={<Text className="pl-2">❤️</Text>} text={"Right element"} onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}
