import React from 'react';
import {
  StyleSheet,
  Text,
  View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


const header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide}>
        <FontAwesome name={"angle-left"} size={40} color={"#fff"} onPress={null}/>
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.headerText}>Shipping and Pickup</Text>
      </View>
      <View style={styles.headerSide}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003366",
    flexDirection: "row",
    flexShrink: 1,
    justifyContent: "space-between",
    minHeight: 47,
    paddingHorizontal: 10,
  },
  headerCenter: {
    flex: 3,
    justifyContent: "center",
  },
  headerSide: {
    flex: 1,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default header;
