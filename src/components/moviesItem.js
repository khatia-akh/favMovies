import React, { useState, useEffect, useContext } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { FavouriteListContext } from "../context/favouriteListContext";
import { CollorsList } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const MovieItem = ({ item }) => {
  const navigation = useNavigation();
  const { favouriteList, updateFavouriteList } =
    useContext(FavouriteListContext);

  const saveToFavourite = (favItem) => {
    updateFavouriteList([...favouriteList, favItem]);
    alert("saved");
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { data: item })}
      style={styles.container}
    >
      <View style={styles.textsContainer}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.year}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.title}>rank: {item.rank}</Text>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => saveToFavourite(item)}
          >
            <Text style={styles.buttonTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgContainer}></View>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 7,
    flexDirection: "row",
    borderRadius: 5,
    overflow: "hidden",
  },
  textsContainer: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    padding: 7,
  },
  imgContainer: {
    width: 160,
    height: 150,
    backgroundColor: CollorsList.white,
  },
  title: {
    color: CollorsList.white,
  },
  saveBtn: {
    backgroundColor: "#2C2C2C",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonTxt: {
    color: "#F4C518",
    fontWeight: "bold",
  },
  titleView: { flex: 1, margin: 5 },
});
