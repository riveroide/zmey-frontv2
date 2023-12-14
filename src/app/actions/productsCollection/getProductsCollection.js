import axios from "../../axiosConfig";
import { getAllCollections } from "../../reducers/productCollectionsSlice";

export const getProductsCollection = () => async (dispatch) => {
  try {
    const res = await axios.get(`/productCollections`)
    dispatch(getAllCollections(res.data));
  } catch (error) {
    return error;
  }
};
