import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabBar from "./src/navigation/bottomTabBar";
import { FavouriteListProvider } from "./src/provider/favouriteListProvider";
import * as Network from "expo-network";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  const checkNetworkStatus = async () => {
    const network = await Network.getNetworkStateAsync();
    console.log(network.isConnected);
    setIsConnected(network.isConnected);
  };

  useEffect(() => {
    checkNetworkStatus();
  }, [isConnected]);

  if (isConnected) {
    console.log("Connected!");
  } else {
    console.log("Internet is Not connected");
  }

  return (
    <>
      <FavouriteListProvider>
        {/* need to add root drawer navigator */}
        <BottomTabBar />
      </FavouriteListProvider>
    </>
  );
}

const styles = StyleSheet.create({});
