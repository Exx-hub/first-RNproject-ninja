import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    fontWeight: "bold",
    color: "gray",
    padding: 16,
    // backgroundColor: "lightgray",
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
