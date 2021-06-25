import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    backgroundColor: "rebeccapurple",
    padding: 10,
    flex: 1,
  },
  boxTwo: {
    backgroundColor: "red",
    padding: 20,
    flex: 1,
  },
  boxThree: {
    backgroundColor: "green",
    padding: 30,
    flex: 1,
  },
  boxFour: {
    backgroundColor: "yellow",
    padding: 40,
    flex: 3,
  },
});
