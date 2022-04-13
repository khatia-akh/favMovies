import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouritesScreen from "../../screens/favourites/favouritesScreen";

const FavoritessStack = createNativeStackNavigator();

const FavoriteSackNavigation = () => {
  return (
    <FavoritessStack.Navigator
      screenOptions={{
        //   headerShown: false,
        headerStyle: {
          backgroundColor: "#121212",
          color: "red",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <FavoritessStack.Screen name="Favourite" component={FavouritesScreen} />
      {/* <FavoritessStack.Screen name="Details" component={DetailsScreen} /> */}
    </FavoritessStack.Navigator>
  );
};
export default FavoriteSackNavigation;
