import { APPLY_PICKUP_DISCOUNT, APPLY_PROMO, REMOVE_PICKUP_DISCOUNT } from "./actions";

// Initialize State
const promoState = {
  basePrice: 125.35,
  pickupDiscount: 4.30,
  price: 125.35,
};

const reducer = (state = promoState, action) => {
  switch(action.type) {
  case APPLY_PICKUP_DISCOUNT:
    console.log("Price changed to this: ", action.newPrice);
    return {...state, price: action.newPrice};
  case REMOVE_PICKUP_DISCOUNT:
    console.log("Price changed to this: ", action.newPrice);
    return {...state, price: action.newPrice};
  case APPLY_PROMO:
    return {...state, price: action.newPrice};
  default:
    // do nothing
  }
  return state;
};

export default (state, action) => {
  return reducer(state, action);
};
