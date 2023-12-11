import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    allProducts: [],
    oneProduct: {},
    collectionProducts: [],
    maleCategories: [],
    femaleCategories: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    getOneProduct: (state, action) => {
      state.oneProduct = action.payload;
    },
    getCollectionProducts: (state, action) => {
      state.collectionProducts = action.payload;
    },
    setCurrentMaleCategories: (state, action) => {
      state.maleCategories = action.payload;
    },
    setCurrentFemaleCategories: (state, action) => {
      state.femaleCategories = action.payload;
    },
  },
});

export const {
  getAllProducts,
  getOneProduct,
  getCollectionProducts,
  setCurrentFemaleCategories,
  setCurrentMaleCategories,
  setAllProducts,
} = productSlice.actions;

export default productSlice.reducer;
