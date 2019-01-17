import React from 'react';
import { StyleSheet, View } from 'react-native';

{/* NOTE: Ignoring the arrow that appears when selected === true in real app */}

const divider = () => {
  return (
    <View style={styles.bar}>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    alignSelf: "center",
    borderColor: "gray",
    borderTopWidth: 1,
    height: 1,
    marginBottom: 16,
    width: "100%",
  },
});

export default divider;
