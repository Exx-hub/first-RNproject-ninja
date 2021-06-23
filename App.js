import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Create an app", key: "1" },
    { text: "Upload to app store", key: "2" },
    { text: "Study some more", key: "3" },
  ]);

  const handleSubmit = (text) => {
    console.log("add todo!");

    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };

  const handlePress = (key) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.key !== key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.key.toString()}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePress} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  textInput: {
    borderColor: "darkgray",
  },
});
