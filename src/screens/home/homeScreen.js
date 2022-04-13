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
import { CollorsList } from "../../constants/colors";

const HomeScreen = () => {
  const [data, setData] = useState();
  const [searchResult, setSearchResult] = useState();
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const { favouriteList, updateFavouriteList } =
    useContext(FavouriteListContext);

  const getMoviesData = () => {
    setLoading(true);
    setSearch(false);
    setText("");
    axios
      .get("https://imdb-api.com/en/API/BoxOfficeAllTime/k_nkq1b6r5")
      .then(function (response) {
        setData(response?.data?.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const onSearch = () => {
    setLoading(true);
    setSearch(true);
    axios
      .get(`https://imdb-api.com/en/API/SearchMovie/k_nkq1b6r5/${text}`)
      .then(function (response) {
        setSearchResult(response?.data?.results?.slice(0, 5));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      )}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Imdb"
          style={styles.searchInput}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={search ? getMoviesData : onSearch}
        >
          <Text style={styles.searchBtnText}>{search ? "x" : "search"}</Text>
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
        renderItem={(item) => <MovieItem item={item.item} />}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CollorsList.black,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: CollorsList.white,
    paddingHorizontal: 20,
  },
  title: {
    color: CollorsList.white,
    textAlign: "center",
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  loadingView: {
    position: "absolute",
    width: "100%",
    top: 300,
    zIndex: 200,
  },
  searchContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 30,
  },
  searchBtn: {
    borderLeftWidth: 1,
    borderLeftColor: "#989898",
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  searchBtnText: {
    color: "#989898",
    fontWeight: "bold",
    fontSize: 16,
  },
});
