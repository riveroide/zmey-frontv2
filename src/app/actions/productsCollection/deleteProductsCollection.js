import axios from "../../axiosConfig";

export const deleteProductsCollection = (productCollectionID) => async () => {
  try {
    await axios.delete("/productCollections/" + productCollectionID);
  } catch (error) {
    console.log(error);
  }
};
