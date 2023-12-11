import { subProduct, sumProduct } from "../../reducers/cartSlice";

export const sumProductFunction = (product) => (dispatch) => {
    dispatch(sumProduct(product))
}

export const subProductFunction = (product) => (dispatch) => {
    dispatch(subProduct(product))
}