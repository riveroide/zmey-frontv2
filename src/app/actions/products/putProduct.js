import axios from "../../axiosConfig";

export const modifyProduct = (product) => async () => {
  try {
    await axios.put(`products/${product.id}`, product);
  } catch (error) {
    console.log(error);
  }
};