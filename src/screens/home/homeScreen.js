import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import MovieItem from "../../components/moviesItem";

import { FavouriteListContext } from "../../context/favouriteListContext";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [searchResult, setSearchResult] = useState();
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const { favouriteList, updateFavouriteList } =
    useContext(FavouriteListContext);

  console.log("searchhhh trufalse--->", text);

  const getMoviesData = () => {
    setLoading(true);
    setSearch(false);
    setText("");
    console.log("get mooovie dataaa");
    axios
      .get("https://imdb-api.com/en/API/BoxOfficeAllTime/k_b9bwwcyz")
      .then(function (response) {
        // handle success
        // console.log("response-->", response);
        setData(response?.data?.items);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const onSearch = () => {
    console.log("get on search dataaa");
    setLoading(true);
    setSearch(true);
    axios
      .get(`https://imdb-api.com/en/API/SearchMovie/k_b9bwwcyz/${text}`)
      .then(function (response) {
        // handle success
        console.log(
          "response---------------------------------------------------------->",
          response.data?.results?.slice(0, 5)
        );
        setSearchResult(response?.data?.results?.slice(0, 5));
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <View style={styles.container}>
      {/* ListHeaderComponent={() => {
          return ( */}
      {loading && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            top: 300,
            zIndex: 200,
          }}
        >
          <ActivityIndicator size="large" color="yellow" />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          borderRadius: 5,
          overflow: "hidden",
          marginTop: 30,
        }}
      >
        <TextInput
          placeholder="Search Imdb"
          style={styles.searchInput}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
          style={{
            borderLeftWidth: 1,
            borderLeftColor: "#989898",
            backgroundColor: "#fff",
            height: 40,
            paddingHorizontal: 10,
            justifyContent: "center",
          }}
          onPress={search ? getMoviesData : onSearch}
        >
          <Text
            style={{
              color: "#989898",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {search ? "x" : "search"}
          </Text>
        </TouchableOpacity>
      </View>

      {search ? (
        <Text style={styles.title}>Search Results</Text>
      ) : (
        <Text style={styles.title}>Most Popular Movies</Text>
      )}
      <FlatList
        data={search ? searchResult : data}
        keyExtractor={(item, index) => index}
        renderItem={(item) => (
          <MovieItem item={item.item} navigation={navigation} />
        )}
        contentContainerStyle={{ paddingBottom: 250 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
