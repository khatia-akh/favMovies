import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MovieItem = ({ item, navigation }) => {
  //   console.log("item---->??", item);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { data: item })}
      style={styles.container}
    >
      <View style={styles.textsContainer}>
        <View style={{ flex: 1, margin: 5 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.year}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.title}>rank: {item.rank}</Text>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.buttonTxt}>save</Text>
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
    backgroundColor: "pink",
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
    backgroundColor: "#fff",
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonTxt: {
    color: "#F4C518",
    fontWeight: "bold",
  },
});