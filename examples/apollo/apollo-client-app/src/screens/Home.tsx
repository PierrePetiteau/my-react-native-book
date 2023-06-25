import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { MainStackParamsList } from "../navigation/MainStack";

type NavigationOptions = {
  key: keyof MainStackParamsList;
  title: string;
}[];

const options: NavigationOptions = [
  { key: "BasicQuery", title: "Basic query" },
  { key: "InfiniteScroll", title: "Pagination & Infinite scroll" },
];

export const Home = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamsList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map(({ key, title }) => (
        <View key={key} style={styles.itemContainer}>
          <Button title={title} onPress={() => navigation.navigate(key)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 8,
  },
  itemContainer: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
  },
});
