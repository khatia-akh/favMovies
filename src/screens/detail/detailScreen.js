import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";

function DetailsScreen({ route }) {
  const { data } = route.params;
  console.log("route params -data--->", data);

  const [poster, setPoster] = useState();

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/API/Posters/k_b9bwwcyz/${data.id}`)
      .then(function (response) {
        // handle success
        console.log("response-->", response.data.posters[0]);
        setPoster(response?.data?.posters[0]?.link);
        // setData(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.title}>{data.year}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.title}>rank: {data.rank}</Text>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.buttonTxt}>save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: poster }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: 50,
  },
  textsContainer: {
    backgroundColor: "#1A1A1A",
    // flex: 1,
    padding: 7,
  },
  imgContainer: {
    flex: 1,
    height: 500,
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
  },
  saveBtn: {
    backgroundColor: "#2C2C2C",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonTxt: {
    color: "#F4C518",
    fontWeight: "bold",
  },
});
