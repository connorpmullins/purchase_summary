import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide}>
        <MaterialCommunityIcons name={"chevron-left"} size={45} color={"#fff"} onPress={null}/>
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.textHeader}>Shipping and Pickup</Text>
      </View>
      <View style={styles.headerSide}/>
    </View>
  )
}

/* NOTES:
  .Double SafeAreaView allows different colors for top and bottom of phone on iphoneX
*/
export default class App extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.safeTop} />
        <SafeAreaView>


          <StatusBar barStyle={"light-content"} />
          <Header />
          <ScrollView style={styles.body}>
            {/*Switch between Shipping and Pickup*/}
            <View>
            </View>

            {/*See Pic of Chair*/}
            <View>
            </View>

            {/*Main Module (padding === outerPadding)*/}
            <View>
              {/*Payment Info*/}
              <View>
                {/*Main Payment Info*/}
                <View></View>
                {/*Est Total View*/}
                <View></View>

                {/*Expansion Module 1*/}
                <View></View>

                {/*Expansion Module 2*/}
                <View></View>
              </View>
            </View>



          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: "#00008B",
    flexDirection: "row",
    flexShrink: 1,
    justifyContent: "space-between",
    minHeight: 47,
  },
  headerCenter: {
    flex: 3,
    justifyContent: "center",
  },
  headerSide: {
    flex: 1,
  },
  safeTop: {
    backgroundColor: "#00008B",
    flex: 0,
  },
  textHeader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
