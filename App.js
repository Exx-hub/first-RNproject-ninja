import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Pauline");
  const [age, setAge] = useState("34")

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Enter your name.." 
        onChangeText={(value) => setName(value)}
        />
      <Text>Enter age:</Text>
      <TextInput 
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter your age.." 
        onChangeText={(value) => setAge(value)}
        />

      <Text>My name is {name}, I am {age} years old.</Text>
    
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
  input : {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
