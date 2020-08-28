import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.family}>Details</Text>
      <Animatable.Image
        source={require("../assets/under.png")}
        resizeMode="cover"
        style={styles.image}
        animation="zoomInDown"
        duration={1000}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  family: {
    fontFamily: "sans-serif-condensed",
    fontSize: 30,
    borderColor: "#009387",
    borderWidth: 5,
    padding: 10,
    paddingLeft: 20,
    borderRadius : 10
  },
  image: {
    height: "50%",
    width: "50%",
  },
});

export default DetailsScreen;
