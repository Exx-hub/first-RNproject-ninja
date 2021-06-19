import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.boldText}>Alvin <Text>Flores</Text> Acosta</Text>
      </View>
      <View style={styles.body}>
        <Text>REACT NATIVE DEV</Text>
      </View>
      <StatusBar style="auto" />
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
  header: {
    backgroundColor: "gray",
    padding: 20
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 30
  },
  body: {
    backgroundColor: 'lightblue'
  }
});
