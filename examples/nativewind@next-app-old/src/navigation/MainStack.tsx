import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@screens/HomeScreen";
import { SwitchThemeScreen } from "@screens/SwitchThemeScreen";
import React from "react";
import { Image } from "react-native";

export type StackParamsList = {
  Home: undefined;
  SwitchThemeScreen: undefined;
};

const Stack = createStackNavigator<StackParamsList>();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Stack.Screen
          name="SwitchThemeScreen"
          component={SwitchThemeScreen}
          options={{
            headerBackImage: () => (
              <Image
                style={{ tintColor: "white" }}
                source={require("../../assets/arrow-small-left.png")}
                className="w-8 h-8 ml-2"
              />
            ),
            headerTitle: "",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#020116",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "white",
            headerBackTitle: " ",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
