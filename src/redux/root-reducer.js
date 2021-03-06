import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import directoryReducer from "../redux/directory/directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // contains string names/keys of reducers to persist
};

const rootReducer = combineReducers({
  user: userReducer, // handled by firebase; no need to persist with redux
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
