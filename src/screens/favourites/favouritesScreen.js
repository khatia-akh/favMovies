import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import MovieItem from "../../components/moviesItem";

import { FavouriteListContext } from "../../context/favouriteListContext";
import { CollorsList } from "../../constants/colors";

const FavouritesScreen = ({ navigation }) => {
  const [data, setData] = useState();

  const { favouriteList, updateFavouriteList } =
    useContext(FavouriteListContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteList}
        ListHeaderComponent={() => {
          return <Text style={styles.title}>favorite movie</Text>;
        }}
        keyExtractor={(item, index) => index}
        renderItem={(item) => (
          <MovieItem item={item.item} navigation={navigation} />
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CollorsList.black,
  },
  title: {
    color: CollorsList.white,
    textAlign: "center",
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
