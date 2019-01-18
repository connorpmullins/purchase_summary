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
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { applyPickupDiscount, applyPromo, removePickupDiscount } from "../actions.js";
import styles from "./styles";
import InfoButton from "../components/infoButton.js";
import Header from "../components/header.js";
import Divider from "../components/divider.js";
import LineItem from "../components/lineItem.js";
import ClickExpander from "../components/clickExpander.js";


class PurchaseSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
      pickup: false,
      promo: false,
      promoCode: "",
      promoApplied: false,
      shipping: true,
    }
  }

  _deliveryHandler(type) {
    if (type === "pickup" && !this.state.pickup) {
      this.setState({pickup: true, shipping: false});
      this.props.applyPickupDiscount(this.props.price, this.props.pickupDiscount);
    } else if (type === "shipping" && !this.state.shipping) {
      this.props.removePickupDiscount(this.props.price, this.props.pickupDiscount);
      this.setState({pickup: false, shipping: true});
    }
  }

  _detailExpander() {
    this.setState({
      details: !this.state.details,
    })
  }

  _promoApplyer() {
    if (this.state.promoCode === "DISCOUNT" && !this.props.promoApplied) {
      this.props.applyPromo(this.props.price);
      // dispatch action that reduces price by 10%
    } else {
      alert("Promo code is invalid");
      this.setState({promoCode: ""});
    }
  }

  _promoExpander() {
    this.setState({
      promo: !this.state.promo,
    })
  }

  /* NOTES:
    .Double SafeAreaView allows different colors for top and bottom of phone on iphoneX
  */
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView style={styles.safeTop} />
        <SafeAreaView style={{flex: 1}}>


          <Header />
          <ScrollView style={styles.body}>

            {/*Switch between Shipping and Pickup*/}
            <View style={styles.deliveryOptions}>

              {/*Info Button 1*/}
              <InfoButton selected={this.state.shipping} onPress={() => this._deliveryHandler("shipping")}>
                <Text> Shipping </Text>
              </InfoButton>

              {/*Info Button 2*/}
              <InfoButton selected={this.state.pickup} onPress={() => this._deliveryHandler("pickup")}>

                {/*Walmart pic small and pickup*/}
                <View style={styles.button2Child}>
                  <Image
                    source={require('../assets/walmart.png')}
                    style={styles.tinyImage}
                  />
                  <Text style={{color: "#cc5500"}}> Pickup</Text>
                </View>

                {/*Save$4.30 , wrap text*/}
                <View style={styles.button2Child}>
                  <Text style={{color: "#ad0000"}}> Save $4.30!</Text>
                </View>
              </InfoButton>
            </View>

            {/*Pic of Chair  -- design choice, I think it looks better centered*/}
            <Image source={require("../assets/chair.jpeg")} style={styles.mediumImage}/>

            {/*Main Module (padding === outerPadding)*/}
            <View style={styles.detailsOptions}>
              {/*Payment Info*/}
              <View style={styles.paymentInfo}>

                {/*Main Payment Info*/}
                <LineItem text1={"Subtotal"} text2={"$115.00"}/>
                <LineItem text1={"Shipping"} text2={"Free"}/>
                <LineItem text1={"Taxes"} text2={"$10.35"}/>
                <LineItem text1={"Based on 94085"}/>
                <Divider />

                {/*Est Total View*/}
                <LineItem
                  text1={"Est. total"}
                  text2={this.props.price}
                  extraStyle={{fontSize: 25, fontWeight: "500"}}
                />
                <Divider />

                {/*Expansion Module 1*/}
                <View style={styles.expander}>
                  <ClickExpander expanded={this.state.details} onPress={() => this._detailExpander()}/>

                  { !this.state.details ?
                    null :

                    <View style={styles.detailsView}>
                      <View style={styles.flex1}>
                        <Image
                          source={require("../assets/chair.jpeg")}
                          style={[styles.mediumImage, {margin: 0}]}
                        />
                      </View>
                      <View style={styles.detailInfo}>
                        <Text>OFM Essntials Racecar-Style Leather Gaming Chair, Red </Text>
                        <Text>${this.props.discountPrice || "115.00"} {this.state.promoApplied ? this.props.price : null}</Text>
                      </View>
                      <View style={styles.qtyText}><Text style={{textAlign: "right"}}>Qty: 1</Text></View>
                    </View>

                  }
                </View>
                <Divider />

                {/*Expansion Module 2*/}
                <View style={styles.expander} >
                  <ClickExpander expanded={this.state.promo} onPress={() => this._promoExpander()}/>
                  { !this.state.promo ?
                    null :

                    <View style={styles.detailsView}>
                      <View style={styles.promoApplier}>
                        <Text style={{textAlign: "left"}}>Promo code</Text>
                        <TextInput
                          style={styles.inputPromo}
                          onChangeText={(text) => this.setState({promoCode: text})}
                          value={this.state.promoCode}
                        />
                      </View>
                      <TouchableOpacity style={styles.applyButton} onPress={() => this._promoApplyer()}>
                        <Text> Apply </Text>
                      </TouchableOpacity>
                    </View>

                  }
                </View>

              </View>
            </View>
            <View style={styles.bottomBuffer}/>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("dispatch: ", dispatch);
  return {
    applyPromo: (base) => dispatch(applyPromo(base)),
    applyPickupDiscount: (base, price) => dispatch(applyPickupDiscount(base, price)),
    removePickupDiscount: (base, price) => dispatch(removePickupDiscount(base, price)),
  };
};

const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    basePrice: state.basePrice,
    pickupDiscount: state.pickupDiscount,
    price: state.price,
    promoApplied: promoApplied,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);
