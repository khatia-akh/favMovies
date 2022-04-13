import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./homeStackNavigation/homeStackNavigation";
import FavoritesStackNavigation from "./favouritesStackNavigation/favoritesStackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#F4C518",
          tabBarInactiveTintColor: "lightgray",
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#121212",
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Favourite" component={FavoritesStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomTabBar;
