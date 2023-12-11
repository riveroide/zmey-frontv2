import { delProduct, delAllProducts } from "../../reducers/cartSlice";

export const delProductFunction = (product) => (dispatch) => {
  dispatch(delProduct(product));
};

export const delAllProductsFunction = () => (dispatch) => {
  dispatch(delAllProducts());
};
