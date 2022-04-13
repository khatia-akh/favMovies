import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/homeScreen";
import DetailsScreen from "../../screens/detail/detailScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        //   headerShown: false,
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
