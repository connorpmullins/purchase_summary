import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

{/* NOTE: Ignoring the arrow that appears when selected === true in real app */}

const clickExpander = (props) => {
  if (props.expanded) { a = "minus" }
  else { a = "plus" }
  return (
    <TouchableOpacity style={styles.clickToExpand} onPress={props.onPress}>
      <Text style={styles.clickText}> See Item Details </Text>
      <AntDesign name={a} size={18} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  clickText: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
  clickToExpand: {
    alignSelf: "flex-start",
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
  },
});

export default clickExpander;
