import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

{/* NOTE: Ignoring the arrow that appears when selected === true in real app */}

const infoButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.base, props.selected ? styles.selected : null]}>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 7,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    minHeight: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  selected: {
    borderColor: "black",
    borderWidth: 2,
  },
});

export default infoButton;
