import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    cheeseBurger: {
      quantity: 0,
      price: 200,
    },
    vegCheeseBurger: {
      quantity: 0,
      price: 500,
    },
    burgerWithFries: {
      quantity: 0,
      price: 1800,
    },
  },
  subTotal: 0,
  tax: 0,
  shippingCharges: 0,
  total: 0,
  shippingInfo: {},
};
export const cartReducer = createReducer(initialState, {});
