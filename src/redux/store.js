import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer, orderReducer } from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   cart: cartReducer,
// });

const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer, order: orderReducer },
});

export default store;

export const server = "https://food-delivery-backend-dusky.vercel.app/api/v1";
