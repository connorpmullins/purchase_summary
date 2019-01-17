import CHANGE_PRICE from "./actions";

// Initialize State
const promoState = {
  pickupDiscount: 4.30,
  price: 125.35,
};

const reducer = (state = promoState, action) => {
  switch(action.type) {
  case CHANGE_PRICE:
    console.log("Price changed this much: ", action.price);
    return {...state, price: price};
  default:
    // do nothing
  }
  return state;
};

export default (state, action) => {
  return reducer(state, action);
};
