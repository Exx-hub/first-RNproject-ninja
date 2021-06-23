import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [input, setInput] = useState("");
  //   console.log(input);

  const changeHandler = (val) => {
    setInput(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo..."
        //onChangeText={changeHandler} // does the same as below automatically
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        title="Add Todo"
        onPress={() => handleSubmit(input)}
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
