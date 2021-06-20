import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Alvin", id: 1 },
    { name: "Pauline", id: 2 },
    { name: "Pablo", id: 3 },
    { name: "Kieran", id: 4 },
    { name: "Thea", id: 5 },
    { name: "Juts", id: 6 },
    { name: "Randy", id: 7 },
  ]);

  console.log(people);

  return (
    <View style={styles.container}>
      <Text>JAGI FAMILY</Text>

      <FlatList
        numColumns={2}
        // keyExtractor={(item, index) => index.toString()}
        // to remove warning about key of each list item
        keyExtractor={(item) => item.id.toString()}
        // this is used if there is no key property. indicate the property you want to
        // be used as key. in this case the id like in most databases you will use
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* flatlists lazy loads so its better for more items on the list - performance */}

      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* ScrollView is fine for smaller lists and if you just need scrollability */}
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
    marginHorizontal: 10,
    marginTop: 24,
  },
});
