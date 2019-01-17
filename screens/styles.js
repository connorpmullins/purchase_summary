import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  applyButton: {
    alignSelf: "flex-end",
    borderRadius: 22,
    borderWidth: 1,
    marginBottom: 4,
    marginLeft: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  body: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 16,
  },
  bottomBuffer: {
    height: 40,
  },
  button2Child: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  deliveryOptions: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailInfo: {
    flex: 2,
    justifyContent: "center",
  },
  detailsOptions: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flex: 3,
    padding: 16,
  },
  detailsView: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4,
  },
  expander: {
    alignItems: "center",
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  inputPromo: {
    borderWidth: 1,
    height: 40,
    flex: 1,
  },
  mediumImage: {
    alignSelf: "center",
    margin: 35,
    height: 70,
    width: 70,
  },
  paymentInfo: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  promoApplier: {
    flex: 1,
  },
  promoView: {
    backgroundColor: "grey",
    flexGrow: 1,
    flexDirection: "column",
    paddingTop: 10,
  },
  safeTop: {
    backgroundColor: "#003366",
    flex: 0,
  },
  tinyImage: {
    height: 20,
    width: 20,
  },
  qtyText: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
});

export default styles;
