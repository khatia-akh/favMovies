import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouritesScreen from "../../screens/favourites/favouritesScreen";

const FavoritessStack = createNativeStackNavigator();

const FavoriteSackNavigation = () => {
  return (
    <FavoritessStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
          color: "red",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <FavoritessStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
      />
    </FavoritessStack.Navigator>
  );
};
export default FavoriteSackNavigation;
