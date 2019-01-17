import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

{/* NOTE: Ignoring the arrow that appears when selected === true in real app */}

const lineItem = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flex1}>
        <Text style={[styles.text1, props.extraStyle]}>{props.text1}</Text>
      </View>
      <View style={styles.flex1}>
        <Text style={[styles.text2, props.extraStyle]}>{props.text2}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flex1: {flex: 1},
  text1: {
    fontWeight: "400",
  },
  text2: {
    fontWeight: "500",
    textAlign: "right",
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default lineItem;
