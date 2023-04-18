import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   cart: cartReducer,
// });

const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer },
});

export default store;

export const server = "https://food-delivery-backend-dusky.vercel.app/api/v1";
