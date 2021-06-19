import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Pauline");
  const [person, setPerson] = useState({ name: "Pablo", age: 4 })
  const handlePress = () => {
    if (name === "Pauline") setName("Alvin")
    if (name !== "Pauline") setName("Pauline")

    if (person.name === "Pablo") {
      setPerson({ name: "Kieran", age: 6 })
    } else {
      setPerson({ name: "Pablo", age: 4 })
    }
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <Text>His name is {person.name} and he is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={handlePress} title="update state" />
      </View>

      {/* <Text></Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
