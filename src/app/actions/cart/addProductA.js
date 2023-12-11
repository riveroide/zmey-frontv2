import { addProduct } from "../../reducers/cartSlice";


export const addProductFunction = (product) => async(dispatch)=>{
    await dispatch(addProduct(product))
}