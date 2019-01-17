export const APPLY_PICKUP_DISCOUNT = "APPLY_PICKUP_DISCOUNT";
export const REMOVE_PICKUP_DISCOUNT = "APPLY_PICKUP_DISCOUNT";
export const APPLY_PROMO = "APPLY_PROMO";

// export const changePrice = (price) => {
//   return {
//     type: CHANGE_PRICE,
//     price: price,
//   };
// };
function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

export const applyPickupDiscount = (base, price) => {
  console.log("you're applying a discount, base: ", base, " price: ", price);
  let newPrice = roundToTwo(base - price);
  return {
    type: APPLY_PICKUP_DISCOUNT,
    newPrice
  };
};

export const removePickupDiscount = (base, price) => {
  console.log("you're removing a discount");
  let newPrice = roundToTwo(base + price);
  return {
    type: REMOVE_PICKUP_DISCOUNT,
    newPrice
  };
};

export const applyPromo = (base) => {
  console.log("you're applying a promo code");
  const newPrice = roundToTwo(base * .9);
  return {
    type: APPLY_PROMO,
    newPrice
  }
}
