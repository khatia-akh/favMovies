import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import MovieItem from "../../components/moviesItem";

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

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        ListHeaderComponent={() => {
          return <Text style={styles.title}>favorite movie</Text>;
        }}
        keyExtractor={(item, index) => index}
        renderItem={(item) => (
          <MovieItem item={item.item} navigation={navigation} />
        )}
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
