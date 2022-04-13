import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import MovieItem from "../../components/moviesItem";

import { FavouriteListContext } from "../../context/favouriteListContext";

const FavouritesScreen = ({ navigation }) => {
  const [data, setData] = useState();
  //   console.log("data000--->", data);

  //   useEffect(() => {
  //     axios
  //       .get("https://imdb-api.com/en/API/BoxOfficeAllTime/k_b9bwwcyz")
  //       .then(function (response) {
  //         // handle success
  //         // console.log("response-->", response);
  //         setData(response.data.items);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .then(function () {
  //         // always executed
  //       });
  //   }, []);

  const { favouriteList, updateFavouriteList } =
    useContext(FavouriteListContext);

  console.log("favouriteList favouriteList----******--->", favouriteList);

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
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
