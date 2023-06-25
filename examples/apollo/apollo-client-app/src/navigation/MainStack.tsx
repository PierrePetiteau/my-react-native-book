import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BasicQuery } from "../screens/BasicQuery";
import { Home } from "../screens/Home";
import { InfiniteScroll } from "../screens/InfiniteScroll";

export type MainStackParamsList = {
  Home: undefined;
  BasicQuery: undefined;
  InfiniteScroll: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BasicQuery" component={BasicQuery} />
      <Stack.Screen name="InfiniteScroll" component={InfiniteScroll} />
    </Stack.Navigator>
  );
};
