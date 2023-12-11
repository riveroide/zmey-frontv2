import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers imports here
import userSlice from "./reducers/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./reducers/productSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import cartSlice from "./reducers/cartSlice";
import filterSlice from "./reducers/filterSlice";
import favoritesSlice from "./reducers/favoritesSlice";
import adminSlice from "./reducers/adminSlice";
import ordersSlice from "./reducers/ordersSlice";
import productCollectionsSlice from "./reducers/productCollectionsSlice";
import codesSlice from "./reducers/codesSlice";



const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["favorites"],
};

const persistReducers = combineReducers({
  //reducers
  userInfo: userSlice,
  products: productSlice,
  categories: categoriesSlice,
  cart: cartSlice,
  filters: filterSlice,
  favorites: favoritesSlice,
  admin: adminSlice,
  orders: ordersSlice,
  productCollections: productCollectionsSlice,
  codes: codesSlice,
});

const persistedReducer = persistReducer(persistConfig, persistReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
