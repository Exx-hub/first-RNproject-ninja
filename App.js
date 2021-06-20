import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Alvin", key: 1 },
    { name: "Pauline", key: 2 },
    { name: "Pablo", key: 3 },
    { name: "Kieran", key: 4 },
    { name: "Thea", key: 5 },
    { name: "Juts", key: 6 },
    { name: "Randy", key: 7 },
  ]);

  console.log(people);

  return (
    <View style={styles.container}>
      <Text>JAGI FAMILY</Text>

      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "rebeccapurple",
    fontSize: 24,
  },
});
