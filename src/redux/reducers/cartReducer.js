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

export const cartReducer = createReducer(initialState, {
  cheeseBurgerIncrement: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  vegCheeseBurgerIncrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity += 1;
  },
  burgerWithFriesIncrement: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  cheeseBurgerDecrement: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  vegCheeseBurgerDecrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity -= 1;
  },
  burgerWithFriesDecrement: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.vegCheeseBurger.price *
        state.cartItems.vegCheeseBurger.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.shippingCharges + state.tax;
  },

  emptyState: (state) => {
    state.cartItems = {
      cheeseBurger: { quantity: 0, price: 200 },
      vegCheeseBurger: { quantity: 0, price: 500 },
      burgerWithFries: { quantity: 0, price: 1800 },
    };
    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});

export const orderReducer = createReducer(
  {},
  {
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  }
);
