const CHANGE_PRICE = "CHANGE_PRICE";

export const changePrice = (price) => {
  return {
    type: CHANGE_PRICE,
    price: price,
  };
};

export const applyDiscount = (discount) => {
  console.log("applying discount!");
  // Imagine some API call happening here
  return (dispatch, getState) => {
    let oldPrice = getState().price;
    if (typeof price !== "number") {throw("error! Price is not a number")};
    if (typeof discount !== "number") {throw("error! Discount is not a number")};
    let newPrice = oldPrice - discount;
    dispatch(changePrice(newPrice));
  };
};

export const removeDiscount = (discount) => {
  // Imagine some API call happening here
  return (dispatch, getState) => {
    let oldPrice = getState().price;
    if (typeof price !== "number") {throw("error! Price is not a number")};
    if (typeof discount !== "number") {throw("error! Discount is not a number")};
    let newPrice = oldPrice + discount;
    dispatch(changePrice(price));
  };
};
