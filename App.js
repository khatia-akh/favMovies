import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabBar from "./src/navigation/bottomTabBar";
import { FavouriteListProvider } from "./src/provider/favouriteListProvider";

export default function App() {
  return (
    <>
      <FavouriteListProvider>
        <BottomTabBar />
      </FavouriteListProvider>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
