import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existProduct = state.cartProducts.filter(
        (e) =>
          e.name.toLowerCase() === action.payload.name.toLowerCase() &&
          e.color.toLowerCase() === action.payload.color.toLowerCase() &&
          e.size.toLowerCase() === action.payload.size.toLowerCase()
      );
      if (existProduct.length) {
        state.cartProducts = state.cartProducts.map((p) => {
          if (
            p.name.toLowerCase() === action.payload.name.toLowerCase() &&
            p.color.toLowerCase() === action.payload.color.toLowerCase() &&
            p.size.toLowerCase() === action.payload.size.toLowerCase()
          ) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },
    delProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) =>
          product.name.toLowerCase() !== action.payload.name.toLowerCase() ||
          product.color.toLowerCase() !== action.payload.color.toLowerCase() ||
          product.size.toLowerCase() !== action.payload.size.toLowerCase()
      );
    },
    sumProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map((product) => {
        if (
          product.name.toLowerCase() === action.payload.name.toLowerCase() &&
          product.color.toLowerCase() === action.payload.color.toLowerCase() &&
          product.size.toLowerCase() === action.payload.size.toLowerCase()
        ) {
          product.quantity += 1;
        }
        return product;
      });
    },
    subProduct: (state, action) => {
      state.cartProducts = state.cartProducts.map((product) => {
        if (
          product.name.toLowerCase() === action.payload.name.toLowerCase() &&
          product.color.toLowerCase() === action.payload.color.toLowerCase() &&
          product.size.toLowerCase() === action.payload.size.toLowerCase()
        ) {
          product.quantity -= 1;
        }
        return product;
      });
    },
    delAllProducts: (state) => {
      state.cartProducts = [];
    },
  },
});

export const {
  addProduct,
  delProduct,
  sumProduct,
  subProduct,
  delAllProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
