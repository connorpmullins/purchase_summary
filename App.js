import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
  import { createStore, applyMiddleWare } from "redux";
import { connect, Provider } from "react-redux";
import thunkMiddleWare from 'redux-thunk';
import reducer from "./reducer";
import PurchaseSummary from "./screens/PurchaseSummary";


const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));


/* NOTES:
  .Double SafeAreaView allows different colors for top and bottom of phone on iphoneX
*/
export default class App extends React.Component {
  render() {
    console.log("store: ", store);
    return (
      <Provider store={store}>
        <PurchaseSummary />
      </Provider>
    )
  }
};